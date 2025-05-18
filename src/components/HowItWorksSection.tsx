
import React, { useEffect, useRef } from 'react';

interface StepProps {
  number: number;
  title: string;
  description: string;
  delay: number;
  color: string;
}

const Step = ({ number, title, description, delay, color }: StepProps) => {
  const stepRef = useRef<HTMLDivElement>(null);
  
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
    
    if (stepRef.current) {
      observer.observe(stepRef.current);
    }
    
    return () => {
      if (stepRef.current) {
        observer.unobserve(stepRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={stepRef}
      className="relative opacity-0 translate-y-10 transition-all duration-700 group"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 h-full hover:bg-white/10 hover:border-white/20 transition-all shadow-lg relative overflow-hidden z-10">
        <div className={`absolute -inset-0.5 ${color} rounded-2xl opacity-0 group-hover:opacity-20 blur transition-all duration-700`}></div>
        <div className={`w-16 h-16 rounded-full ${color} flex items-center justify-center mb-6 text-white font-bold text-2xl transform group-hover:scale-110 transition-all duration-500`}>
          {number}
        </div>
        <h3 className="text-2xl font-semibold mb-4 text-white">{title}</h3>
        <p className="text-white/70 text-lg">{description}</p>
      </div>
      
      {/* Connection line between cards */}
      {number < 3 && (
        <div className="hidden md:block absolute top-1/2 -right-5 w-10 h-0.5 bg-gradient-to-r from-white/20 to-white/5 z-0"></div>
      )}
    </div>
  );
};

const HowItWorksSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden" id="how-it-works">
      <div className="container relative z-10">
        <h2 className="text-5xl md:text-6xl font-dancing text-center mb-16 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <span className="text-white">How </span>
          <span className="text-thrifty-orange">Ge</span>
          <span className="text-thrifty-blue">Fe</span>
          <span className="text-white"> Works</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-10">
          <Step 
            number={1}
            title="Browse & Discover"
            description="Explore our curated collection of vintage and pre-loved fashion items from around the world."
            delay={200}
            color="bg-gradient-to-br from-thrifty-orange/80 to-thrifty-orange/20"
          />
          
          <Step 
            number={2}
            title="Purchase Securely"
            description="Buy your favorite items with our secure payment system and buyer protection guarantee."
            delay={400}
            color="bg-gradient-to-br from-thrifty-blue/80 to-thrifty-blue/20"
          />
          
          <Step 
            number={3}
            title="Receive & Enjoy"
            description="Get your authenticated items delivered to your door and join our sustainable fashion community."
            delay={600}
            color="bg-gradient-to-br from-white/30 to-white/5"
          />
        </div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute top-10 left-10 w-80 h-80 bg-thrifty-blue/10 rounded-full blur-3xl animate-float-slow"></div>
      <div className="absolute bottom-20 right-20 w-60 h-60 bg-thrifty-orange/10 rounded-full blur-3xl animate-float-delay"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-1/2 bg-gradient-to-b from-thrifty-blue/5 to-transparent blur-3xl"></div>
    </section>
  );
};

export default HowItWorksSection;
