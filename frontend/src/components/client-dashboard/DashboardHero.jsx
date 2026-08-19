import { Link } from 'react-router-dom';
import { IoBookOutline } from 'react-icons/io5';

function DashboardHero({ currentBook }) {
  return (
    <section
      className={`dashboard-hero ${
        currentBook ? 'dashboard-hero--reading' : ''
      }`}
    >
      <div className="dashboard-hero__blobs" aria-hidden="true">
        <img
          src="/img/blobs/blob-1.svg"
          className="dashboard-hero__blob dashboard-hero__blob--1"
          alt=""
        />

        <img
          src="/img/blobs/blob-2.svg"
          className="dashboard-hero__blob dashboard-hero__blob--2"
          alt=""
        />

        <img
          src="/img/blobs/blob-3.svg"
          className="dashboard-hero__blob dashboard-hero__blob--3"
          alt=""
        />

        <img
          src="/img/blobs/blob-4.svg"
          className="dashboard-hero__blob dashboard-hero__blob--4"
          alt=""
        />

        <img
          src="/img/blobs/blob-5.svg"
          className="dashboard-hero__blob dashboard-hero__blob--5"
          alt=""
        />

        <img
          src="/img/blobs/blob-6.svg"
          className="dashboard-hero__blob dashboard-hero__blob--6"
          alt=""
        />
      </div>

      <div className="dashboard-hero__content">
        {!currentBook ? (
          <>
            <div className="dashboard-hero__text">
              <span className="dashboard-hero__subtitle">
                YOUR PERSONAL LIBRARY
              </span>

              <h1>Welcome to your reading journey</h1>

              <p>
                Discover books, create collections and start building
                your personal library.
              </p>

              {/* <Link to="/books" className="dashboard-hero__btn"> */}
              <Link to="/books" className="header__btn">
                Explore books
              </Link>
            </div>

            {/* <div className="dashboard-hero__illustration">
              <IoBookOutline />
            </div> */}
          </>
        ) : (
          <>
            <div className="dashboard-hero__text">
              <span className="dashboard-hero__subtitle">
                LAST READ
              </span>

              <h1>{currentBook.title}</h1>

              <p>{currentBook.author.name}</p>

              <div className="dashboard-hero__progress">
                <div className="dashboard-hero__progress-bar">
                  <div
                    className="dashboard-hero__progress-value"
                    style={{ width: `${currentBook.progress}%` }}
                  />
                </div>

                <span>{currentBook.progress}%</span>
              </div>

              <Link
                to={`/books/${currentBook._id}`}
                className="dashboard-hero__btn"
              >
                Continue reading
              </Link>
            </div>

            <div className="dashboard-hero__book">
              <img
                src={currentBook.imageCover}
                alt={`Cover of ${currentBook.title}`}
              />
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default DashboardHero;
