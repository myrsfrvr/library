import BooksSection from '../../components/books/BooksSection';
import useBooks from '../../hooks/useBooks';
import { useState } from 'react';
import Loading from '../../components/common/Loading';
import DeleteModal from '../../components/common/DeleteModal';

function BooksPage() {
  const [bookToDelete, setBookToDelete] = useState(null);
  const { books, loading: booksLoading, removeBook } = useBooks();

  return (
    <section className="container">
      {booksLoading ? (
        <Loading />
      ) : (
        <BooksSection books={books} onDelete={setBookToDelete} />
      )}

      <DeleteModal
        isOpen={bookToDelete !== null}
        onCancel={() => setBookToDelete(null)}
        onConfirm={async () => {
          await removeBook(bookToDelete._id);

          setBookToDelete(null);
        }}
      />
    </section>
  );
}

export default BooksPage;
