import { Link } from 'react-router-dom';
import SERVER_URL from '../../config/server';
import { IoTrashOutline, IoCreateOutline } from 'react-icons/io5';

const tagColors = {
  romance: 'book__card-tag--1',
  fantasy: 'book__card-tag--1',
  drama: 'book__card-tag--1',
  satire: 'book__card-tag--1',

  horror: 'book__card-tag--2',
  gothic: 'book__card-tag--2',
  thriller: 'book__card-tag--2',
  tragedy: 'book__card-tag--2',
  dystopian: 'book__card-tag--2',

  history: 'book__card-tag--3',
  mystery: 'book__card-tag--3',
  adventure: 'book__card-tag--3',
  bildungsroman: 'book__card-tag--3',
  'science fiction': 'book__card-tag--3',
};

function BookCard({ book, onDelete }) {
  // const IMAGE_URL = 'http://localhost:8000';

  return (
    <div className="book__card">
      <img
        className="book__card-img"
        src={`${SERVER_URL}/img/book-covers/${book.imageCover}`}
        alt={book.title}
      />

      <div className="book__card-info">
        <Link to={`/books/${book._id}`} className="book__card-title">
          {book.title}
        </Link>

        <p className="book__card-author">
          {book.author.map(a => a.name).join(', ')}
        </p>

        <div className="book__card-additional">
          <p>{book.yearPublished}</p>

          <div className="book__card-circle"></div>

          <p>{book.language}</p>
        </div>

        <div className="book__card-tags">
          {book.genre.map(tag => (
            <p
              key={tag}
              className={`book__card-tag ${
                tagColors[tag.toLowerCase()] ?? 'book__card-tag--0'
              }`}
            >
              {tag}
            </p>
          ))}
        </div>
      </div>

      <div className="book__card-btns">
        <button className="book__card-btn">
          <IoCreateOutline />
        </button>

        <button
          className="book__card-btn book__card-btn--delete"
          onClick={() => onDelete(book)}
        >
          <IoTrashOutline />
        </button>
      </div>
    </div>
  );
}

export default BookCard;
