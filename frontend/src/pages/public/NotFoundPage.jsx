import { Link } from 'react-router-dom';
import { IoBookOutline } from 'react-icons/io5';

function NotFoundPage() {
  return (
    <main className="not-found container">
      <div className="not-found__content">
        <div className="not-found__icon">
          <IoBookOutline />
        </div>

        <span className="not-found__code">404</span>

        <h1>Page not found</h1>

        <p>
          Looks like this page has gone missing from our library. It
          may have been moved, deleted, or the address you entered
          doesn't exist.
        </p>

        <Link to="/" className="not-found__btn">
          Go to Home page
        </Link>
      </div>
    </main>
  );
}

export default NotFoundPage;
