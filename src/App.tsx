import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { StatsBar } from './components/StatsBar';
import { BackendSection } from './components/BackendSection';
import { PlatformSection } from './components/PlatformSection';
import { TradingRoomSection } from './components/TradingRoomSection';
import { CompetitionSection } from './components/CompetitionSection';
import { PropFirmsSection } from './components/PropFirmsSection';
import { GetInvolvedSection } from './components/GetInvolvedSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AdminDashboard } from './components/AdminDashboard';
import { FloatingGitHub } from './components/FloatingGitHub';
import { Toaster } from 'sonner@2.0.3';
import logo from 'figma:asset/58ece3ae699ed2a60521d02495cec62c28ec1e5b.png';

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  // Set favicon and page title
  useEffect(() => {
    // Set page title
    document.title = 'FairTrading - Open-Source Prop Futures Trading Ecosystem';
    
    // Set favicon
    let link = document.querySelector("link[rel*='icon']") as HTMLLinkElement;
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
    }
    link.href = logo;
    
    // Also set apple-touch-icon for better mobile support
    let appleLink = document.querySelector("link[rel='apple-touch-icon']") as HTMLLinkElement;
    if (!appleLink) {
      appleLink = document.createElement('link');
      appleLink.rel = 'apple-touch-icon';
      document.head.appendChild(appleLink);
    }
    appleLink.href = logo;
  }, []);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  // Show admin dashboard if path is /admin
  if (currentPath === '/admin') {
    return (
      <>
        <AdminDashboard />
        <Toaster position="top-center" theme="dark" />
      </>
    );
  }

  // Show main site
  return (
    <div className="min-h-screen bg-[#0a0e1a]">
      <Header />
      <main>
        <Hero />
        <StatsBar />
        <BackendSection />
        <PlatformSection />
        <TradingRoomSection />
        <CompetitionSection />
        <PropFirmsSection />
        <GetInvolvedSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingGitHub />
      <Toaster position="top-center" theme="dark" />
    </div>
  );
}
