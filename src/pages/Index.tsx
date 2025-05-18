import React, { useEffect, useRef } from "react";
import Header from "@/components/Header";
import WaitlistForm from "@/components/WaitlistForm";
import LaptopShowcase from "@/components/LaptopShowcase";
import FeatureSection from "@/components/FeatureSection";
import AppScreenshots from "@/components/AppScreenshots";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button"; // Add this import

const Index = () => {
  const countRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const counters = entry.target.querySelectorAll("[data-count]");
          counters.forEach(counter => {
            const target = parseInt(counter.getAttribute("data-count") || "0");
            let count = 0;
            const updateCount = () => {
              if (count < target) {
                count += Math.ceil(target / 100);
                if (count > target) count = target;
                counter.textContent = count.toString();
                requestAnimationFrame(updateCount);
              }
            };
            updateCount();
          });
        }
      },
      { threshold: 0.5 }
    );
    
    if (countRef.current) {
      observer.observe(countRef.current);
    }
    
    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, []);

  // Create floating bubbles
  const renderBubbles = () => {
    const bubbles = [];
    for (let i = 0; i < 15; i++) {
      const size = Math.random() * 100 + 50;
      const left = Math.random() * 100;
      const animDuration = Math.random() * 30 + 15;
      const animDelay = Math.random() * 15;
      const opacity = Math.random() * 0.07 + 0.02;
      
      bubbles.push(
        <div 
          key={i}
          className="absolute rounded-full blur-3xl"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            left: `${left}%`,
            top: `-${size / 2}px`,
            background: 'rgba(255, 255, 255, 0.05)',
            animation: `float ${animDuration}s ease-in-out infinite`,
            animationDelay: `${animDelay}s`,
            opacity
          }}
        />
      );
    }
    return bubbles;
  };

  const renderAIInsights = () => {
    return (
      <div className="w-full max-w-4xl mx-auto glass-effect p-8 rounded-2xl mb-20 relative overflow-hidden opacity-0 animate-fade-in" style={{ animationDelay: '1.2s' }}>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent opacity-30"></div>
        <img 
          src="/lovable-uploads/f6871340-177d-4eda-8e50-7397556f58a3.png" 
          alt="AI-Generated Insights" 
          className="w-full h-auto rounded-lg opacity-80 hover:opacity-100 transition-opacity duration-300"
        />
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Header />
      
      {/* Floating animated bubbles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {renderBubbles()}
      </div>
      
      {/* Hero Section */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="opacity-0 animate-fade-in text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="text-white">Discover Unique </span>
              <span className="font-dancing text-white">Vintage</span>
              <span className="text-white"> Fashion</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              Join our exclusive waitlist for early access to the most innovative 
              thrift shopping experience, connecting fashion lovers with curated pre-loved treasures.
            </p>
            
            <WaitlistForm />
          </div>
        </div>
        
        {/* Background elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-white/10 rounded-full blur-[100px]"></div>
      </section>
      
      {/* Laptop Showcase */}
      <section className="py-20 relative">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 opacity-0 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <span className="font-dancing text-white">Experience</span>
            <span className="text-white"> the Future of Thrift Shopping</span>
          </h2>
          
          <LaptopShowcase />
        </div>
      </section>
      
      {/* Features Section */}
      <FeatureSection />
      
      {/* AI Insights Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 opacity-0 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <span className="text-white">AI-Powered </span>
            <span className="font-dancing text-white">Insights</span>
          </h2>
          
          {renderAIInsights()}
        </div>
      </section>
      
      {/* Screenshot Showcase */}
      <AppScreenshots />
      
      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <span className="text-white">Ready to </span>
              <span className="font-dancing text-white">Revolutionize</span>
              <span className="text-white"> Your Wardrobe?</span>
            </h2>
            <p className="text-xl text-white/80 mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              Join our waitlist today and be the first to experience GeFe when we launch.
              Early subscribers get exclusive perks and discounts!
            </p>
            
            <a href="#join-waitlist">
              <Button 
                className="bg-white hover:bg-white/90 text-black px-8 py-6 rounded-full text-lg animate-pulse-glow opacity-0 animate-fade-in hover-scale"
                style={{ animationDelay: '0.5s' }}
              >
                Join The Waitlist Now
              </Button>
            </a>
          </div>
        </div>
        
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-white/10 rounded-full blur-[100px]"></div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
