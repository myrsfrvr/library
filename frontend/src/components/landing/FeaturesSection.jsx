import {
  IoBookmarkOutline,
  IoStatsChartOutline,
  IoSparklesOutline,
} from 'react-icons/io5';

function FeaturesSection() {
  return (
    <section className="features">
      <h2 className="heading-secondary">
        Everything You Need for Your Reading Journey
      </h2>

      <div className="features__grid">
        <div className="feature__card">
          <div className="feature__icon-div">
            <IoBookmarkOutline className="feature__icon" />
          </div>

          <h3>Continue Where You Left Off</h3>

          <p>
            Keep track of every book and never lose your place again.
          </p>

          {/* <div className="feature__number">01</div> */}
        </div>

        <div className="feature__card">
          <div className="feature__icon-div">
            <IoStatsChartOutline className="feature__icon" />
          </div>

          <h3>Reading Statistics</h3>

          <p>
            Monitor your reading habits and follow your progress over
            time.
          </p>

          {/* <div className="feature__number">02</div> */}
        </div>

        <div className="feature__card">
          <div className="feature__icon-div">
            <IoSparklesOutline className="feature__icon" />
          </div>

          <h3>Personalized Recommendations</h3>

          <p>
            Discover new books based on your interests and reading
            history.
          </p>

          {/* <div className="feature__number">03</div> */}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
