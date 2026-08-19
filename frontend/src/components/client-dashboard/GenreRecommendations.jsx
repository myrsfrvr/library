import { Link } from 'react-router-dom';
import SERVER_URL from '../../config/server';

function GenreRecommendations({ books = [] }) {
  if (!books.length) return null;

  return (
    <section className="dashboard-section genre-recommendations">
      <div className="dashboard-section__header">
        <div>
          <span className="dashboard-section__eyebrow">
            DISCOVER SOMETHING NEW
          </span>

          <h2>Recommended for you</h2>

          <p>Explore books based on genres you might enjoy.</p>
        </div>

        <Link to="/books" className="dashboard-section__link">
          Browse all
        </Link>
      </div>

      <div className="recommendation-grid">
        {books.slice(0, 5).map(book => (
          <Link
            to={`/books/${book._id}`}
            className="recommendation-card"
            key={book._id}
          >
            <div className="recommendation-card__cover">
              <img
                src={`${SERVER_URL}/img/book-covers/${book.imageCover}`}
                alt={`Cover of ${book.title}`}
              />
            </div>

            <div className="recommendation-card__info">
              <span>
                {book.author.map(author => author.name).join(', ')}
              </span>
              <h3>{book.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default GenreRecommendations;
