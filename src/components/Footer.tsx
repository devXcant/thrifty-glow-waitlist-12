
import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 bg-black border-t border-white/10">
      <div className="container">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center space-x-2 mb-4">
            <span className="text-3xl font-dancing font-bold text-white">Ge</span>
            <span className="text-2xl font-dancing text-white/80">Fe</span>
          </div>
          <p className="text-white/60 text-md max-w-md mx-auto mb-8">
            Redefining thrift shopping with curated vintage collections for the modern fashion enthusiast.
          </p>
          
          <div className="flex space-x-6 mb-8">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 hover:bg-white/10 transition-colors">
              <Facebook className="h-5 w-5 text-white/70 hover:text-white transition-colors" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 hover:bg-white/10 transition-colors">
              <Instagram className="h-5 w-5 text-white/70 hover:text-white transition-colors" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 hover:bg-white/10 transition-colors">
              <Twitter className="h-5 w-5 text-white/70 hover:text-white transition-colors" />
            </a>
          </div>
          
          <p className="text-white/40 text-sm">© 2025 GeFe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
