import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoPersonCircleOutline, IoSearch } from 'react-icons/io5';

import useAuth from '../../hooks/useAuth';

import SearchModal from '../common/SearchModal';

function ClientNavbar() {
  const navigate = useNavigate();

  const { user, logout } = useAuth();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);

  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  function handleLogout() {
    logout();

    navigate('/login');
  }

  return (
    <nav className="nav scrolled">
      <Link to="/" className="nav__link-logo">
        <img
          className="nav__logo"
          src="/img/logo-black.png"
          alt="Logo of The Story Haven"
        />
      </Link>

      <div className="nav__links--scrolled">
        <Link to="/books" className="nav__link">
          Books
        </Link>

        <Link to="/authors" className="nav__link">
          Authors
        </Link>

        <button
          className="nav__search-btn"
          onClick={() => setShowSearchModal(true)}
        >
          <IoSearch />
        </button>

        <div className="client-nav__profile" ref={menuRef}>
          <button
            className="nav__search-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <IoPersonCircleOutline />
          </button>

          {isMenuOpen && (
            <div className="client-nav__dropdown">
              <div className="client-nav__user">
                <p>{user?.username}</p>

                <p>{user?.email}</p>
              </div>

              <Link
                to="/account"
                className="client-nav__dropdown-link"
                onClick={() => setIsMenuOpen(false)}
              >
                My account
              </Link>

              <button
                className="client-nav__logout"
                onClick={handleLogout}
              >
                Log out
              </button>
            </div>
          )}
        </div>
      </div>

      <SearchModal
        isOpen={showSearchModal}
        onClose={() => setShowSearchModal(false)}
      />
    </nav>
  );
}

export default ClientNavbar;
