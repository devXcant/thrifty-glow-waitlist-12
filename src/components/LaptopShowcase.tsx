
import React, { useEffect, useRef } from 'react';

const LaptopShowcase = () => {
  const laptopRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      },
      { threshold: 0.1 }
    );
    
    if (laptopRef.current) {
      observer.observe(laptopRef.current);
    }
    
    return () => {
      if (laptopRef.current) {
        observer.unobserve(laptopRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={laptopRef}
      className="w-full max-w-4xl mx-auto relative opacity-0 translate-y-10 transition-all duration-1000 ease-out"
    >
      <div className="laptop-outer bg-gray-800 rounded-t-lg p-2 shadow-xl">
        <div className="laptop-screen relative bg-gray-900 h-[60vh] overflow-hidden rounded">
          {/* Mockup content */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#212121] to-black">
            {/* Mock navigation */}
            <div className="h-16 border-b border-white/10 flex items-center px-6">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="bg-white/10 h-8 w-96 mx-auto rounded-full flex items-center justify-center text-xs text-white/60">
                thriftyglow.com
              </div>
            </div>
            
            {/* Mock content */}
            <div className="px-6 py-8 grid grid-cols-3 gap-4">
              <div className="col-span-3 mb-6">
                <h2 className="font-dancing text-5xl text-white text-center mb-2">
                  <span className="text-thrifty-orange">Thrifty</span>
                  <span className="text-thrifty-blue">Glow</span>
                </h2>
                <p className="text-center text-white/70 text-sm">Sustainable fashion at your fingertips</p>
              </div>
              
              {/* Mock products */}
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div 
                  key={item}
                  className="bg-white/5 h-64 rounded-lg p-4 flex flex-col hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <div className="h-36 bg-gradient-to-br from-gray-700 to-gray-800 rounded-md mb-4 flex items-center justify-center">
                    <span className="text-white/30 text-xs">Product Image</span>
                  </div>
                  <h3 className="text-white font-medium text-sm">Vintage Item #{item}</h3>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-thrifty-orange font-semibold">${(Math.random() * 100).toFixed(2)}</span>
                    <span className="text-xs text-white/50">4.{Math.floor(Math.random() * 10)} ★</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="laptop-base h-4 bg-gradient-to-b from-gray-700 to-gray-800 rounded-b-xl mx-auto w-[95%]"></div>
      <div className="laptop-bottom h-1 bg-gray-900 rounded-b-xl mx-auto w-[90%]"></div>
      
      {/* Glow effect */}
      <div className="absolute -z-10 w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-thrifty-blue/20 blur-[100px] rounded-full"></div>
    </div>
  );
};

export default LaptopShowcase;
