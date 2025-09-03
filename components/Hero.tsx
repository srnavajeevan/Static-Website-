
import React from 'react';
import { Page } from '../types';

interface HeroProps {
    setActivePage: (page: Page) => void;
}

const Hero: React.FC<HeroProps> = ({ setActivePage }) => {
  return (
    <div
      className="relative bg-cover bg-center h-[60vh] md:h-[80vh] flex items-center"
      style={{ backgroundImage: "url('https://picsum.photos/seed/farmhero/1600/900')" }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative container mx-auto px-6 text-center text-white">
        <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 animate-fade-in-down">
          Cultivating the Future of Farming
        </h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 animate-fade-in-up">
          Your all-in-one digital companion for modern agriculture. Get AI-powered tips, weather forecasts, and a marketplace for everything you need.
        </p>
        <button
          onClick={() => setActivePage(Page.FarmingTips)}
          className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-full text-lg transition-transform transform hover:scale-105 duration-300"
        >
          Get Farming Tips
        </button>
      </div>
    </div>
  );
};

export default Hero;
