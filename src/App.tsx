import Navigation from './components/Navigation';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import RoutingLayer from './components/RoutingLayer';
import Protocol from './components/Protocol';
import NetworkMetrics from './components/NetworkMetrics';
import NetworkArchitecture from './components/NetworkArchitecture';
import InfrastructureVsTasks from './components/InfrastructureVsTasks';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <SocialProof />
      <RoutingLayer />
      <Protocol />
      <NetworkMetrics />
      <NetworkArchitecture />
      <InfrastructureVsTasks />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
