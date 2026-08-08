import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!isHomePage) return;

    function handleScroll() {
      setScrolled(window.scrollY > 50);
    }

    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isHomePage]);

  const showScrolledNavbar = !isHomePage || scrolled;

  return (
    <nav className={`nav ${showScrolledNavbar ? 'scrolled' : ''}`}>
      <Link to="/" className="nav__link-logo">
        <img
          className="nav__logo"
          src={
            showScrolledNavbar
              ? '/img/logo-black.png'
              : '/img/logo-white.png'
          }
          alt="Logo of The Story Haven"
        />
      </Link>

      {!showScrolledNavbar ? (
        <div className="nav__links--default">
          <a href="#books" className="nav__btn">
            Browse Books
          </a>
        </div>
      ) : (
        <div className="nav__links--scrolled">
          <Link to="/#books" className="nav__link">
            Books
          </Link>

          <Link to="/#authors" className="nav__link">
            Authors
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
