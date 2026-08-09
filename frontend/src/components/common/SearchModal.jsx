function SearchModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal" onClick={onClose}>
      <div
        className="modal-content modal-search"
        onClick={e => e.stopPropagation()}
      >
        <h2>Search Books</h2>

        <form className="search-form">
          <input
            className="search-input"
            placeholder="Search for a book..."
          />

          <button className="search-submit">🔍</button>
        </form>
      </div>
    </div>
  );
}

export default SearchModal;
