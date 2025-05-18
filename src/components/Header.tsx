
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-3 bg-black/80 backdrop-blur-md' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="container flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-dancing font-bold text-white">Ge</span>
          <span className="text-xl font-dancing text-white/80">Fe</span>
        </div>
        
        <a href="#join-waitlist">
          <Button 
            className="bg-white hover:bg-white/90 text-black hover-scale"
          >
            Join Waitlist
          </Button>
        </a>
      </div>
    </header>
  );
};

export default Header;
