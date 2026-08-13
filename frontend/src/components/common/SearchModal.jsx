import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('');

  const navigate = useNavigate();

  if (!isOpen) return null;

  function handleSubmit(e) {
    e.preventDefault();

    if (!query.trim()) return;

    navigate(`/search?q=${encodeURIComponent(query.trim())}`);

    onClose();
    setQuery('');
  }

  return (
    <div className="modal" onClick={onClose}>
      <div
        className="modal-content modal-search"
        onClick={e => e.stopPropagation()}
      >
        <h2>Search Books</h2>

        <form className="search-form" onSubmit={handleSubmit}>
          <input
            className="search-input"
            type="text"
            placeholder="Search for a book..."
            value={query}
            onChange={e => setQuery(e.target.value)}
          />

          <button className="search-submit">Search</button>
        </form>
      </div>
    </div>
  );
}

export default SearchModal;
