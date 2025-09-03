
import React from 'react';
import { Page } from '../types';
import { NAV_LINKS } from '../constants';
import LeafIcon from './icons/LeafIcon';

interface HeaderProps {
  activePage: Page;
  setActivePage: (page: Page) => void;
}

const Header: React.FC<HeaderProps> = ({ activePage, setActivePage }) => {
  return (
    <header className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center cursor-pointer" onClick={() => setActivePage(Page.Home)}>
          <LeafIcon className="w-8 h-8 text-primary" />
          <h1 className="text-2xl font-bold text-text-dark ml-2">AgroConnect</h1>
        </div>
        <nav className="hidden md:flex space-x-8 items-center">
          {NAV_LINKS.map((page) => (
            <button
              key={page}
              onClick={() => setActivePage(page)}
              className={`text-lg font-medium transition duration-300 ease-in-out relative ${
                activePage === page ? 'text-primary' : 'text-text-light hover:text-primary'
              }`}
            >
              {page}
              {activePage === page && (
                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-primary"></span>
              )}
            </button>
          ))}
        </nav>
        {/* Mobile menu could be added here */}
      </div>
    </header>
  );
};

export default Header;
