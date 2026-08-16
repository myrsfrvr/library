import { Link } from 'react-router-dom';
import {
  IoCheckmarkCircleOutline,
  IoBookOutline,
} from 'react-icons/io5';

function ReadingJourneySection() {
  return (
    <section className="journey">
      <div className="journey__content">
        <div className="journey__left">
          <span className="journey__subtitle">
            YOUR PERSONAL LIBRARY
          </span>

          <h2 className="journey__title">
            Track Every Chapter of Your Reading Journey
          </h2>

          <p className="journey__description">
            Organize your books, save your progress, and build a
            library that grows with you.
          </p>

          <div className="journey__list">
            <div className="journey__item">
              <IoCheckmarkCircleOutline />

              <span>Create reading lists</span>
            </div>

            <div className="journey__item">
              <IoCheckmarkCircleOutline />

              <span>Save your reading progress</span>
            </div>

            <div className="journey__item">
              <IoCheckmarkCircleOutline />

              <span>Set reading goals</span>
            </div>

            <div className="journey__item">
              <IoCheckmarkCircleOutline />

              <span>Discover new books</span>
            </div>
          </div>

          <Link to="/register" className="journey__btn">
            Start Today
          </Link>
        </div>

        {/* TODO: add screenshot of an app later */}
        {/* or illustration:
          Three stacked books
          One book open
          Bookmarks sticking out
          Small floating stars */}
        <div className="journey__right">
          <div className="journey__circle">
            <IoBookOutline />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReadingJourneySection;
