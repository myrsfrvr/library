import { Link } from 'react-router-dom';
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoLinkedin,
} from 'react-icons/io5';

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
          <IoLogoInstagram />
        </a>

        <a href="https://x.com/" target="_blank" rel="noreferrer">
          <IoLogoTwitter />
        </a>

        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noreferrer"
        >
          <IoLogoLinkedin />
        </a>
      </div>

      <p className="footer__copyright">
        © 2026 The Story Haven Ltd. This website is a personal project
        and does not represent a real library or organization.
      </p>
    </footer>
  );
}

export default Footer;
