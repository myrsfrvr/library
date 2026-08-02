const tagColors = {
  romance: 'details__tag--1',
  fantasy: 'details__tag--1',
  drama: 'details__tag--1',
  satire: 'details__tag--1',

  horror: 'details__tag--2',
  gothic: 'details__tag--2',
  thriller: 'details__tag--2',
  tragedy: 'details__tag--2',
  dystopian: 'details__tag--2',

  history: 'details__tag--3',
  mystery: 'details__tag--3',
  adventure: 'details__tag--3',
  bildungsroman: 'details__tag--3',
  'science fiction': 'details__tag--3',
};

import LoanHistory from './LoanHistory';

function BookInformation({ book }) {
  return (
    <div className="details__main">
      <h1 className="details__title">{book.title}</h1>

      <p className="details__author">
        {book.author.map(author => author.name).join(', ')}
      </p>

      <p className="details__summary">{book.summary}</p>

      <div className="details__genres">
        <p>Genres</p>

        <div className="details__tags">
          {book.genre.map(genre => (
            <p
              key={genre}
              className={`details__tag ${
                tagColors[genre.toLowerCase()] ?? 'details__tag--0'
              }`}
            >
              {genre}
            </p>
          ))}
        </div>
      </div>

      <p className="details__publisher">
        First published in {book.yearPublished} by {book.publisher}
      </p>

      <p className="details__language">Language: {book.language}</p>

      <p className="details__status">
        Status:{' '}
        <span
          className={
            book.status.toLowerCase() === 'available'
              ? 'details__status--available'
              : 'details__status--borrowed'
          }
        >
          {book.status}
        </span>
      </p>

      <LoanHistory loans={book.loanDates} />
    </div>
  );
}

export default BookInformation;
