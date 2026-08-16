import { Link } from 'react-router-dom';

function Hero() {
  return (
    <header className="header">
      <div className="header__left-side">
        <span className="heading-primary--small">The</span>

        <h1 className="heading-primary">Story Haven</h1>

        <p className="header__slogan">
          Discover Worlds, One Book at a Time
        </p>

        <Link to="/login" className="header__btn">
          Get started
        </Link>
        {/* <Link to="/register" className="header__btn">
          Register
        </Link> */}
      </div>

      <div className="header__right-side"></div>
    </header>
  );
}

export default Hero;
