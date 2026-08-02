import { useState } from 'react';
import AuthorCard from './AuthorCard';

function AuthorsSection({ authors }) {
  const visibleAuthors = authors.filter(author => author.featured);

  const [startIndex, setStartIndex] = useState(0);

  const displayedAuthors = visibleAuthors.slice(
    startIndex,
    startIndex + 3,
  );

  return (
    <section className="authors">
      <div className="authors__heading">
        <h2 className="heading-secondary">Authors</h2>
      </div>

      <div className="authors__carousel">
        <button
          className={`authors__carousel-btn previous-btn ${
            startIndex === 0 ? 'faded' : ''
          }`}
          disabled={startIndex === 0}
          onClick={() => setStartIndex(i => i - 1)}
        >
          ◀
        </button>

        <div className="authors__carousel-track">
          {displayedAuthors.map(author => (
            <AuthorCard key={author._id} author={author} />
          ))}
        </div>

        <button
          className={`authors__carousel-btn next-btn ${
            startIndex >= visibleAuthors.length - 3 ? 'faded' : ''
          }`}
          disabled={startIndex >= visibleAuthors.length - 3}
          onClick={() => setStartIndex(i => i + 1)}
        >
          ▶
        </button>
      </div>
    </section>
  );
}

export default AuthorsSection;
