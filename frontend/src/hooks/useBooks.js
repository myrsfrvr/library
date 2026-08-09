import { useEffect, useState } from 'react';

import { getBooks, deleteBook } from '../api/booksApi';

function useBooks() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;

    async function fetchBooks() {
      try {
        setLoading(true);

        const data = await getBooks();

        if (!ignore) {
          setBooks(data);
        }
      } catch (err) {
        if (!ignore) {
          setError(err.message);
        }
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    }

    fetchBooks();

    return () => {
      ignore = true;
    };
  }, []);

  async function removeBook(id) {
    if (!id) return;

    await deleteBook(id);

    setBooks(current => current.filter(book => book._id !== id));
  }

  return {
    books,
    loading,
    error,
    removeBook,
  };
}

export default useBooks;
