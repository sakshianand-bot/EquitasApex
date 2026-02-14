import Hero from '../components/Hero';
import TrustIndicators from '../components/TrustIndicators';
import Services from '../components/Services';
import ProcessTimeline from '../components/ProcessTimeline';
import About from '../components/About';
import FeaturedIn from '../components/FeaturedIn';
import Testimonials from '../components/Testimonials';
import MarketInsights from '../components/MarketInsights';
import IBCalculator from '../components/IBCalculator';
import FAQAccordion from '../components/FAQAccordion';
import GlobalReach from '../components/GlobalReach';
import SecurityCredentials from '../components/SecurityCredentials';
import ConsultationCTA from '../components/ConsultationCTA';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <div className="min-h-screen bg-off-white">
      <Hero />
      <TrustIndicators />
      <Services />
      <ProcessTimeline />
      <About />
      <FeaturedIn />
      <Testimonials />
      <MarketInsights />
      <IBCalculator />
      <FAQAccordion />
      <GlobalReach />
      <SecurityCredentials />
      <ConsultationCTA />
      <Contact />
    </div>
  );
};

export default Home;
