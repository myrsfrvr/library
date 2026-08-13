import { useSearchParams } from 'react-router-dom';

import BooksSection from '../components/books/BooksSection';

import Loading from '../components/common/Loading';

import useSearchBooks from '../hooks/useSearchBooks';

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
        <div className="search__not-found">
          <img
            className="search__not-found--img"
            src="public/img/not_found.jpg"
            alt="Results not found"
          />
          <p>No books found for "{query}".</p>
        </div>
      ) : (
        <BooksSection books={books} onDelete={() => {}} />
      )}
    </section>
  );
}

export default SearchPage;
