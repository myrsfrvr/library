import { useEffect, useState } from 'react';

import { searchBooks } from '../api/booksApi';

function useSearchBooks(query) {
  const [books, setBooks] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;

    async function fetchBooks() {
      try {
        setLoading(true);
        setError(null);

        const data = await searchBooks(query);

        if (!ignore) {
          setBooks(data);
        }
      } catch (err) {
        if (!ignore) {
          setBooks([]);
          setError(err.message);
        }
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    }

    if (query) {
      fetchBooks();
    }

    return () => {
      ignore = true;
    };
  }, [query]);

  return {
    books,
    loading,
    error,
  };
}

export default useSearchBooks;
