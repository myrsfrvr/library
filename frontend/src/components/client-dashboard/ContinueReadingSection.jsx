import { Link } from 'react-router-dom';

function ContinueReadingSection({ books }) {
  if (!books?.length) return null;

  return (
    <section className="dashboard-section continue-reading">
      <div className="dashboard-section__header">
        <div>
          <span className="dashboard-section__eyebrow">
            KEEP READING
          </span>

          <h2>Continue reading</h2>
        </div>

        <Link to="/books" className="dashboard-section__link">
          View all
        </Link>
      </div>

      <div className="continue-reading__list">
        {books.map(book => (
          <article className="continue-reading__card" key={book._id}>
            <Link to={`/books/${book._id}`}>
              <img src={book.cover} alt={`Cover of ${book.title}`} />
            </Link>

            <div className="continue-reading__info">
              <span className="continue-reading__author">
                {book.author.name}
              </span>

              <h3>{book.title}</h3>

              <div className="continue-reading__progress">
                <div className="continue-reading__progress-bar">
                  <div
                    className="continue-reading__progress-value"
                    style={{ width: `${book.progress}%` }}
                  />
                </div>

                <span>{book.progress}%</span>
              </div>

              <Link
                to={`/books/${book._id}`}
                className="continue-reading__button"
              >
                Continue
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ContinueReadingSection;
