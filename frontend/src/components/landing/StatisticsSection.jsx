function StatisticsSection() {
  return (
    <section className="statistics">
      <h2 className="heading-secondary">
        Build Your Personal Library
      </h2>

      {/* TODO: improve stats later */}
      <div className="statistics__grid">
        <div className="stat__card">
          <h3>1000+</h3>

          <p>Books</p>
        </div>

        <div className="stat__card">
          <h3>50+</h3>

          <p>Genres</p>
        </div>

        <div className="stat__card">
          <h3>365</h3>

          <p>Reading Days</p>
        </div>
      </div>
    </section>
  );
}

export default StatisticsSection;
