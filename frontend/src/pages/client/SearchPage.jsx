import { useSearchParams, Link } from 'react-router-dom';
import useSearchBooks from '../../hooks/useSearchBooks';

import BooksSection from '../../components/books/BooksSection';
import Loading from '../../components/common/Loading';

import { IoBookOutline } from 'react-icons/io5';

// TODO: search is aldo for a client

function SearchPage() {
  const [searchParams] = useSearchParams();

  const query = searchParams.get('q');

  const { books, loading, error } = useSearchBooks(query);

  if (!query) {
    return <p>No search query provided.</p>;
  }

  if (loading) {
    return <Loading />;
  }

  let noResults;
  if (error || books.length === 0) {
    noResults = true;
  }

  return (
    <section className="search">
      <div className="create__header">
        <h2 className="heading-secondary create__heading">
          Search results
        </h2>
      </div>

      {noResults ? (
        // <div className="search__not-found">
        //   <img
        //     className="search__not-found--img"
        //     src="public/img/not_found.jpg"
        //     alt="Results not found"
        //   />
        //   <p>No books found for "{query}".</p>
        // </div>
        <div className="not-found">
          <div className="not-found__content">
            <div className="not-found__icon">
              <IoBookOutline />
            </div>

            <span className="not-found__code">404</span>

            <h1>No books found for "{query}"</h1>

            <p>
              Looks like this book has gone missing from our library.
              It may have been moved, deleted, or is yet to arrive.
            </p>

            <Link to="/" className="not-found__btn">
              Go to Home page
            </Link>
          </div>
        </div>
      ) : (
        <BooksSection books={books} onDelete={() => {}} />
      )}
    </section>
  );
}

export default SearchPage;
