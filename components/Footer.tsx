
import React from 'react';
import LeafIcon from './icons/LeafIcon';

const Footer: React.FC = () => {
  return (
    <footer className="bg-text-dark text-white">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <LeafIcon className="w-8 h-8 text-primary" />
            <span className="text-xl font-bold ml-2">AgroConnect</span>
          </div>
          <p className="text-sm text-slate-300">
            &copy; {new Date().getFullYear()} AgroConnect. All Rights Reserved.
          </p>
          <div className="flex mt-6 md:mt-0 space-x-6">
            <a href="#" className="hover:text-primary transition-colors">Facebook</a>
            <a href="#" className="hover:text-primary transition-colors">Twitter</a>
            <a href="#" className="hover:text-primary transition-colors">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
