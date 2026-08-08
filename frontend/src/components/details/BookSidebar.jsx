import { Link } from 'react-router-dom';
import SERVER_URL from '../../config/server';

function BookSidebar({ book, onDelete }) {
  return (
    <div className="details__sidebar">
      <img
        className="details__img"
        src={`${SERVER_URL}/img/book-covers/${book.imageCover}`}
        alt={book.title}
      />

      <div className="details__btns">
        <Link
          to={`/books/${book._id}/edit`}
          className="details__btn details__btn--edit"
        >
          <ion-icon name="create-outline"></ion-icon>
          <p>Edit</p>
        </Link>

        <button
          className="details__btn details__btn--delete"
          onClick={onDelete}
        >
          <ion-icon name="trash-outline"></ion-icon>
          <p>Delete</p>
        </button>
      </div>
    </div>
  );
}

export default BookSidebar;
