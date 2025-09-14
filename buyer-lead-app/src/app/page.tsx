import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import StatsSection from './components/StatsSection';
import LeadIntakeForm from './components/LeadIntakeForm';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <div className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <LeadIntakeForm />
        </div>
      </div>
      <TestimonialsSection />
      <Footer />
    </div>
  );
}
