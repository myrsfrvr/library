import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__links">
        <Link className="footer__link" to="/books">
          Books
        </Link>

        <Link className="footer__link" to="/authors">
          Authors
        </Link>
      </div>

      <div className="footer__socials">
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noreferrer"
        >
          Instagram
        </a>

        <a href="https://x.com/" target="_blank" rel="noreferrer">
          X
        </a>

        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </div>

      <p className="footer__copyright">© 2026 The Story Haven Ltd.</p>
    </footer>
  );
}

export default Footer;
