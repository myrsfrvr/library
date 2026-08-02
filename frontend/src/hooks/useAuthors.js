import { useEffect, useState } from 'react';

import { getAuthors } from '../api/authorsApi';

function useAuthors() {
  const [authors, setAuthors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;

    async function fetchAuthors() {
      try {
        setLoading(true);

        const data = await getAuthors();

        if (!ignore) {
          setAuthors(data);
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

    fetchAuthors();

    return () => {
      ignore = true;
    };
  }, []);

  return {
    authors,
    loading,
    error,
  };
}

export default useAuthors;
