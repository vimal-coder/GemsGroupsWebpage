import React from 'react';
import { Menu } from 'lucide-react';

const Topbar = ({ onMenuClick }) => {
  return (
    <header className="h-16 glass-nav border-b border-gold-primary/20 flex items-center justify-between px-4 lg:px-8 text-white z-10 sticky top-0">
      <div className="flex items-center">
        <button 
          onClick={onMenuClick}
          className="md:hidden p-2 mr-2 text-gray-400 hover:text-gold-primary hover:bg-white/5 rounded-lg"
        >
          <Menu className="w-6 h-6" />
        </button>
        <h2 className="text-xl font-semibold hidden sm:block font-cinzel text-gradient">Welcome back, John Doe</h2>
      </div>

      <div className="flex items-center space-x-4">
        <div className="flex items-center">
          <div className="text-right mr-3 hidden sm:block">
            <p className="text-sm font-medium text-white">John Doe</p>
            <p className="text-xs text-gold-secondary">john.doe@example.com</p>
          </div>
          <img 
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=John" 
            alt="Avatar" 
            className="w-10 h-10 rounded-full bg-dark-bg border border-gold-primary"
          />
        </div>
      </div>
    </header>
  );
};

export default Topbar;
