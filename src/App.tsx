import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { BackendSection } from './components/BackendSection';
import { PlatformSection } from './components/PlatformSection';
import { TradingRoomSection } from './components/TradingRoomSection';
import { CompetitionSection } from './components/CompetitionSection';
import { PropFirmsSection } from './components/PropFirmsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Toaster } from 'sonner@2.0.3';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0e1a]">
      <Header />
      <main>
        <Hero />
        <BackendSection />
        <PlatformSection />
        <TradingRoomSection />
        <CompetitionSection />
        <PropFirmsSection />
        <ContactSection />
      </main>
      <Footer />
      <Toaster position="top-center" theme="dark" />
    </div>
  );
}
