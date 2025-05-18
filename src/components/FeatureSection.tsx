
import React, { useEffect, useRef } from 'react';

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
      className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10 opacity-0 translate-y-10 transition-all duration-700"
      style={{ transitionDelay: delay }}
    >
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-thrifty-blue to-thrifty-orange flex items-center justify-center mb-4 text-white">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-white/70">{description}</p>
    </div>
  );
};

const FeatureSection = () => {
  return (
    <section className="py-24" id="features">
      <div className="container">
        <h2 className="text-4xl md:text-5xl font-dancing text-center mb-16 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <span className="text-white">Why Choose </span>
          <span className="text-thrifty-orange">Thrifty</span>
          <span className="text-thrifty-blue">Glow</span>
          <span className="text-white">?</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Feature 
            title="Curated Collections"
            description="Discover hand-selected vintage and thrifted items curated by our fashion experts."
            icon={<span className="text-xl">👚</span>}
            delay="0.1s"
          />
          <Feature 
            title="Sustainable Fashion"
            description="Join our eco-friendly community and reduce fashion waste with pre-loved clothing."
            icon={<span className="text-xl">🌿</span>}
            delay="0.2s"
          />
          <Feature 
            title="Authenticated Items"
            description="Every item is verified for quality and authenticity before listing."
            icon={<span className="text-xl">✅</span>}
            delay="0.3s"
          />
          <Feature 
            title="Personalized Recommendations"
            description="Our algorithm learns your style to suggest items you'll love."
            icon={<span className="text-xl">👤</span>}
            delay="0.4s"
          />
          <Feature 
            title="Seller Marketplace"
            description="Sell your own pre-loved fashion items and earn with our easy-to-use platform."
            icon={<span className="text-xl">💰</span>}
            delay="0.5s"
          />
          <Feature 
            title="Global Shipping"
            description="Shop vintage treasures from around the world with affordable shipping options."
            icon={<span className="text-xl">🌎</span>}
            delay="0.6s"
          />
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
