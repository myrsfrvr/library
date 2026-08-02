import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import SearchModal from '../common/SearchModal';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 50);
    }

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <Link to="/" className="nav__link-logo">
          <img
            className="nav__logo"
            src={
              scrolled ? '/img/logo-black.png' : '/img/logo-white.png'
            }
            alt="Story Haven"
          />
        </Link>

        {!scrolled ? (
          <div className="nav__links--default">
            {/* <Link to="/books" className="nav__btn">
              Browse Books
            </Link> */}
          </div>
        ) : (
          <div className="nav__links--scrolled">
            {/* <Link to="/books" className="nav__link">
              Books
            </Link>

            <Link to="/authors" className="nav__link">
              Authors
            </Link> */}

            <button
              className="nav__search-btn"
              onClick={() => setSearchOpen(true)}
            >
              🔍
            </button>
          </div>
        )}
      </nav>

      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
      />
    </>
  );
}

export default Navbar;
