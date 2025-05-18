
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

  // Array of image paths for the screenshots
  const screenshotImages = [
    '/lovable-uploads/974f5818-9bbd-4de2-a863-4ff181eef936.png',
    '/lovable-uploads/bf534fe0-5815-4ceb-8080-f935b0fc75f9.png',
    '/lovable-uploads/77e82627-1367-4755-baae-14fafeccfea5.png',
    '/lovable-uploads/cf5c236b-70b7-4241-995d-82dc5656768e.png',
    '/lovable-uploads/f6871340-177d-4eda-8e50-7397556f58a3.png',
    '/lovable-uploads/f6871340-177d-4eda-8e50-7397556f58a3.png',
  ];

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
                <div className="w-3 h-3 rounded-full bg-white/70"></div>
                <div className="w-3 h-3 rounded-full bg-white/50"></div>
                <div className="w-3 h-3 rounded-full bg-white/30"></div>
              </div>
              <div className="bg-white/10 h-8 w-96 mx-auto rounded-full flex items-center justify-center text-xs text-white/60">
                gefe.com
              </div>
            </div>
            
            {/* Mock content */}
            <div className="px-6 py-8 grid grid-cols-3 gap-4">
              <div className="col-span-3 mb-6">
                <h2 className="font-dancing text-5xl text-white text-center mb-2">
                  <span className="text-white">Ge</span>
                  <span className="text-white/80">Fe</span>
                </h2>
                <p className="text-center text-white/70 text-sm">Sustainable fashion at your fingertips</p>
              </div>
              
              {/* Actual screenshots with animation */}
              {screenshotImages.map((imagePath, index) => (
                <div 
                  key={index}
                  className="bg-white/5 h-64 rounded-lg p-4 flex flex-col hover:bg-white/10 transition-all cursor-pointer transform hover:scale-105 hover:shadow-lg border border-white/10 hover:border-white/20"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="h-36 bg-gray-800 rounded-md mb-4 flex items-center justify-center overflow-hidden group">
                    <img 
                      src={imagePath} 
                      alt={`GeFe Screenshot ${index + 1}`}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <h3 className="text-white font-medium text-sm">Product Feature #{index + 1}</h3>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-white font-semibold">Explore Now</span>
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
      
      {/* Enhanced glow effect */}
      <div className="absolute -z-10 w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/10 blur-[100px] rounded-full animate-pulse-slow"></div>
    </div>
  );
};

export default LaptopShowcase;
