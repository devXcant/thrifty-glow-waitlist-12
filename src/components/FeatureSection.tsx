
import React, { useEffect, useRef } from 'react';
import { ShieldCheck, Gavel, CreditCard } from 'lucide-react';

interface FeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: string;
}

const Feature = ({ title, description, icon, delay }: FeatureProps) => {
  const featureRef = useRef<HTMLDivElement>(null);
  
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
    
    if (featureRef.current) {
      observer.observe(featureRef.current);
    }
    
    return () => {
      if (featureRef.current) {
        observer.unobserve(featureRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={featureRef}
      className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 opacity-0 translate-y-10 transition-all duration-700 hover:bg-white/10 hover:border-white/20 group shadow-lg relative overflow-hidden"
      style={{ transitionDelay: delay }}
    >
      <div className="absolute -inset-0.5 bg-gradient-to-br from-white/30 to-white/10 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-all duration-700"></div>
      <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-6 text-white transform group-hover:scale-110 transition-all duration-500 animate-pulse-slow">
        {icon}
      </div>
      <h3 className="text-2xl font-semibold mb-4 text-white">{title}</h3>
      <p className="text-white/70 text-lg">{description}</p>
    </div>
  );
};

const FeatureSection = () => {
  return (
    <section className="py-24 relative overflow-hidden" id="features">
      <div className="container relative z-10">
        <h2 className="text-5xl md:text-6xl font-dancing text-center mb-16 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <span className="text-white">Why Choose </span>
          <span className="text-white">Ge</span>
          <span className="text-white/80">Fe</span>
          <span className="text-white">?</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-10">
          <Feature 
            title="VERIFIED SELLERS"
            description="All sellers go through our verification process to ensure a safe, trustworthy marketplace experience."
            icon={<ShieldCheck className="w-8 h-8" />}
            delay="0.1s"
          />
          <Feature 
            title="COMPETITIVE BIDDING"
            description="Find unique pieces at prices you set through our auction system."
            icon={<Gavel className="w-8 h-8" />}
            delay="0.3s"
          />
          <Feature 
            title="SECURE PAYMENTS"
            description="Secure payment gateway with multiple options for safe and convenient transactions."
            icon={<CreditCard className="w-8 h-8" />}
            delay="0.5s"
          />
        </div>
      </div>
      
      {/* Floating bubble animations */}
      <div className="absolute top-20 -left-20 w-40 h-40 rounded-full bg-white/5 blur-3xl animate-float"></div>
      <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-white/5 blur-3xl animate-float-delay"></div>
    </section>
  );
};

export default FeatureSection;
