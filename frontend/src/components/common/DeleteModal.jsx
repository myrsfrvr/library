function DeleteModal({ isOpen, onCancel, onConfirm }) {
  if (!isOpen) return null;

  return (
    <div className="modal" onClick={onCancel}>
      <div
        className="modal__content"
        onClick={e => e.stopPropagation()}
      >
        <h3>Are you sure you want to delete this book?</h3>

        <div className="modal__actions">
          <button
            className="modal__btn modal__btn--cancel"
            onClick={onCancel}
          >
            Cancel
          </button>

          <button
            className="modal__btn modal__btn--delete"
            onClick={onConfirm}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
