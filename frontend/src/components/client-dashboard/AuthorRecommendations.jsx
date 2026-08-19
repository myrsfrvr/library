import { Link } from 'react-router-dom';
import SERVER_URL from '../../config/server';

function AuthorRecommendations({ authors = [] }) {
  if (!authors.length) return null;

  return (
    <section className="dashboard-section author-recommendations">
      <div className="dashboard-section__header">
        <div>
          <span className="dashboard-section__eyebrow">
            KEEP EXPLORING
          </span>

          <h2>Authors you might like</h2>

          <p>Discover more books from authors worth knowing.</p>
        </div>

        <Link to="/authors" className="dashboard-section__link">
          View all
        </Link>
      </div>

      <div className="author-recommendations__grid">
        {authors.slice(0, 3).map(author => (
          <Link
            to={`/authors/${author._id}`}
            className="author-recommendation"
            key={author._id}
          >
            <div className="author-recommendation__image">
              {author.image ? (
                <img
                  src={`${SERVER_URL}/img/authors/${author.image}`}
                  alt={author.name}
                />
              ) : (
                <span>{author.name.charAt(0)}</span>
              )}
            </div>

            <div className="author-recommendation__info">
              <span>AUTHOR</span>
              <h3>{author.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default AuthorRecommendations;
