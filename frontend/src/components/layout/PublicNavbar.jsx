import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
// import { IoSearch } from 'react-icons/io5';

// import SearchModal from '../common/SearchModal';

function PublicNavbar() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const [scrolled, setScrolled] = useState(false);
  // const [showSearchModal, setShowSearchModal] = useState(false);

  const isAuthPage =
    location.pathname === '/login' ||
    location.pathname === '/register';

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

      {/* {!showScrolledNavbar ? (
        <div className="nav__links--default">
          <a href="/" className="nav__btn">
            Browse Books
          </a>
        </div>
      ) : (
        <div className="nav__links--scrolled">
          <Link to="/" className="nav__link">
            Books
          </Link>

          <Link to="/" className="nav__link">
            Authors
          </Link>

          <button
            className="nav__search-btn"
            onClick={() => setShowSearchModal(true)}
          >
            <IoSearch />
          </button>
        </div>
      )} */}

      {showScrolledNavbar && !isAuthPage && (
        <div className="nav__links--scrolled">
          <Link to="/login" className="nav__link">
            Login
          </Link>

          <Link to="/register" className="nav__btn--primary">
            Sign up
          </Link>

          {/* <button
            className="nav__search-btn"
            onClick={() => setShowSearchModal(true)}
          >
            <IoSearch />
          </button> */}
        </div>
      )}

      {/* <SearchModal
        isOpen={showSearchModal}
        onClose={() => setShowSearchModal(false)}
      /> */}
    </nav>
  );
}

export default PublicNavbar;
