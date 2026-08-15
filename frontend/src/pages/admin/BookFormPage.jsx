import { useNavigate, useParams } from 'react-router-dom';

import BookForm from '../../components/books/BookForm';
import Loading from '../../components/common/Loading';

import useBook from '../../hooks/useBook';
import { createBook, updateBook } from '../../api/booksApi';

// TODO: available only for an admin, also protect all the CRUD operations from backend

function BookFormPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const isEditMode = Boolean(id);

  const { book, loading: bookLoading, error } = useBook(id);

  async function handleSubmit(bookData) {
    try {
      if (isEditMode) {
        await updateBook(id, bookData);
      } else {
        await createBook(bookData);
      }

      navigate('/');
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  }

  if (isEditMode && bookLoading) {
    return <Loading />;
  }

  if (isEditMode && error) {
    return <p>{error}</p>;
  }

  return (
    <section className="create">
      <div className="create__header">
        <h2 className="heading-secondary create__heading">
          {isEditMode ? 'Edit book' : 'Add a new book'}
        </h2>
      </div>

      {/* <BookForm
        book={isEditMode ? book : null}
        onSubmit={handleSubmit}
        loading={false}
      /> */}
      <BookForm
        key={isEditMode ? book?._id : 'new'}
        book={isEditMode ? book : null}
        onSubmit={handleSubmit}
        loading={false}
      />
    </section>
  );
}

export default BookFormPage;
