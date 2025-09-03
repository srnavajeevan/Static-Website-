
import React, { useState } from 'react';
import { Page } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import FarmingTips from './components/FarmingTips';
import WeatherWidget from './components/WeatherWidget';
import Marketplace from './components/Marketplace';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<Page>(Page.Home);

  const renderPage = () => {
    switch (activePage) {
      case Page.Home:
        return <Hero setActivePage={setActivePage} />;
      case Page.FarmingTips:
        return <FarmingTips />;
      case Page.Weather:
        return <WeatherWidget />;
      case Page.Marketplace:
        return <Marketplace />;
      case Page.Gallery:
        return <Gallery />;
      case Page.Contact:
        return <Contact />;
      default:
        return <Hero setActivePage={setActivePage} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background font-sans text-text-dark">
      <Header activePage={activePage} setActivePage={setActivePage} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
