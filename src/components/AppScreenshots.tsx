
import React, { useEffect, useRef } from 'react';

const screenshots = [
  {
    id: 1,
    title: "Dashboard Overview",
    description: "Track sales, listings and performance metrics at a glance.",
  },
  {
    id: 2,
    title: "Secure Transactions",
    description: "Monitor your escrow balance and completed transactions.",
  },
  {
    id: 3,
    title: "Direct Messaging",
    description: "Connect with buyers and answer questions about your items.",
  },
  {
    id: 4,
    title: "Seller Dashboard",
    description: "Manage your earnings and track payouts in real-time.",
  }
];

interface ScreenshotProps {
  index: number;
  title: string;
  description: string;
  direction: 'left' | 'right';
}

const Screenshot = ({ index, title, description, direction }: ScreenshotProps) => {
  const screenshotRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', direction === 'left' ? '-translate-x-20' : 'translate-x-20');
        }
      },
      { threshold: 0.1 }
    );
    
    if (screenshotRef.current) {
      observer.observe(screenshotRef.current);
    }
    
    return () => {
      if (screenshotRef.current) {
        observer.unobserve(screenshotRef.current);
      }
    };
  }, [direction]);

  return (
    <div 
      ref={screenshotRef} 
      className={`flex flex-col md:flex-row items-center gap-8 my-16 opacity-0 ${
        direction === 'left' ? '-translate-x-20' : 'translate-x-20'
      } transition-all duration-1000`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <div className={`md:w-1/2 ${direction === 'left' ? 'md:order-1' : 'md:order-2'}`}>
        <div className="glass-effect rounded-xl overflow-hidden shadow-2xl">
          <img 
            src={`/lovable-uploads/${getImagePath(index)}`}
            alt={title}
            className="w-full h-auto rounded-xl transform hover:scale-105 transition-all duration-700"
          />
        </div>
      </div>
      
      <div className={`md:w-1/2 ${direction === 'left' ? 'md:order-2' : 'md:order-1'}`}>
        <h3 className="text-3xl font-bold mb-4 text-white">{title}</h3>
        <p className="text-xl text-white/70 mb-6">{description}</p>
        <div className="h-1 w-20 bg-gradient-to-r from-white to-white/30"></div>
      </div>
    </div>
  );
};

// Helper function to get image paths from the uploaded images
const getImagePath = (index: number): string => {
  switch (index) {
    case 0:
      return '974f5818-9bbd-4de2-a863-4ff181eef936.png';
    case 1:
      return 'bf534fe0-5815-4ceb-8080-f935b0fc75f9.png';
    case 2:
      return '77e82627-1367-4755-baae-14fafeccfea5.png';
    case 3:
    default:
      return 'cf5c236b-70b7-4241-995d-82dc5656768e.png';
  }
};

const AppScreenshots = () => {
  return (
    <section className="py-24 relative overflow-hidden" id="how-it-works">
      <div className="container relative z-10">
        <h2 className="text-5xl md:text-6xl font-dancing text-center mb-16 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <span className="text-white">Experience the </span>
          <span className="text-white">Ge</span>
          <span className="text-white/80">Fe</span>
          <span className="text-white"> Platform</span>
        </h2>
        
        {screenshots.map((screenshot, index) => (
          <Screenshot 
            key={screenshot.id}
            index={index}
            title={screenshot.title}
            description={screenshot.description}
            direction={index % 2 === 0 ? 'left' : 'right'}
          />
        ))}
      </div>
      
      {/* Background animated elements */}
      <div className="absolute top-10 left-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-float-slow opacity-50"></div>
      <div className="absolute bottom-20 right-1/3 w-60 h-60 bg-white/5 rounded-full blur-3xl animate-float-delay opacity-70"></div>
      
      {/* Additional animated elements */}
      <div className="absolute w-20 h-20 border border-white/10 rounded-full left-1/4 top-20 animate-spin-slow opacity-30"></div>
      <div className="absolute w-32 h-32 border border-white/10 rounded-full right-1/4 bottom-20 animate-spin-slow opacity-20" style={{ animationDirection: 'reverse' }}></div>
    </section>
  );
};

export default AppScreenshots;
