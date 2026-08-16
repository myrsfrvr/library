import Hero from '../../components/common/Hero';
import Footer from '../../components/layout/Footer';

import FeaturesSection from '../../components/landing/FeaturesSection';
import StatisticsSection from '../../components/landing/StatisticsSection';
import CTASection from '../../components/landing/CTASection';
import ReadingJourneySection from '../../components/landing/ReadingJourneySection';

function LandingPage() {
  return (
    <>
      <Hero />

      <FeaturesSection />

      <StatisticsSection />

      <ReadingJourneySection />

      <CTASection />
    </>
  );
}

export default LandingPage;
