import { useState } from 'react';

import Hero from '../components/common/Hero';

import BooksSection from '../components/books/BooksSection';
import AuthorsSection from '../components/authors/AuthorsSection';
import DeleteModal from '../components/common/DeleteModal';
import Loading from '../components/common/Loading';

import useBooks from '../hooks/useBooks';
import useAuthors from '../hooks/useAuthors';

// TODO: probably what home page should look like. render / based on user.
// function HomePage() {
//   const { user } = useAuth();

//   if (!user) {
//     return <LandingPage />;
//   }

//   if (user.role === 'admin') {
//     return <AdminDashboard />;
//   }

//   return <ClientDashboard />;
// }

function HomePage() {
  const [bookToDelete, setBookToDelete] = useState(null);

  const { books, loading: booksLoading, removeBook } = useBooks();
  const { authors, loading: authorsLoading } = useAuthors();

  return (
    <>
      <Hero />

      {booksLoading ? (
        <Loading />
      ) : (
        <BooksSection books={books} onDelete={setBookToDelete} />
      )}

      {authorsLoading ? (
        <Loading />
      ) : (
        <AuthorsSection authors={authors} />
      )}

      <DeleteModal
        isOpen={bookToDelete !== null}
        onCancel={() => setBookToDelete(null)}
        onConfirm={async () => {
          await removeBook(bookToDelete._id);

          setBookToDelete(null);
        }}
      />
    </>
  );
}

export default HomePage;
