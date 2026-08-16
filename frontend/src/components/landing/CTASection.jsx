import { Link } from 'react-router-dom';

function CTASection() {
  return (
    <section className="cta">
      <h2>Start Your Reading Adventure Today</h2>

      <p>
        Create an account and begin building your personal library.
      </p>

      <Link to="/register" className="cta__btn">
        Register Now
      </Link>
    </section>
  );
}

export default CTASection;
