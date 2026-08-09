import { useEffect, useState } from 'react';

import { getBook, deleteBook } from '../api/booksApi';

function useBook(id) {
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;

    async function fetchBook() {
      try {
        setLoading(true);

        const data = await getBook(id);

        if (!ignore) {
          setBook(data);
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

    if (id) {
      fetchBook();
    }

    return () => {
      ignore = true;
    };
  }, [id]);

  async function removeBook() {
    if (!book) return;

    await deleteBook(book._id);

    setBook(null);
  }

  return {
    book,
    loading,
    error,
    removeBook,
  };
}

export default useBook;
