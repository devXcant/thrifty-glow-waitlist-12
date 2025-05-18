
import React, { useEffect, useRef } from "react";
import Header from "@/components/Header";
import WaitlistForm from "@/components/WaitlistForm";
import LaptopShowcase from "@/components/LaptopShowcase";
import FeatureSection from "@/components/FeatureSection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

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

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="opacity-0 animate-fade-in text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="text-white">Discover Unique </span>
              <span className="font-dancing text-thrifty-orange">Vintage</span>
              <span className="text-white"> Fashion</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              Join our exclusive waitlist for early access to the most innovative 
              thrift shopping experience, connecting fashion lovers with curated pre-loved treasures.
            </p>
            
            <WaitlistForm />
          </div>
          
          {/* Stats */}
          <div 
            ref={countRef}
            className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-3xl mx-auto mt-20 opacity-0 animate-fade-in"
            style={{ animationDelay: '0.9s' }}
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-thrifty-orange mb-2">
                <span data-count="1000">0</span>+
              </div>
              <p className="text-white/70 text-sm">People on waitlist</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-thrifty-blue mb-2">
                <span data-count="5000">0</span>+
              </div>
              <p className="text-white/70 text-sm">Curated items</p>
            </div>
            <div className="text-center col-span-2 md:col-span-1">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                <span data-count="95">0</span>%
              </div>
              <p className="text-white/70 text-sm">Sustainable fashion</p>
            </div>
          </div>
        </div>
        
        {/* Background elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-thrifty-orange/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-thrifty-blue/20 rounded-full blur-[100px]"></div>
      </section>
      
      {/* Laptop Showcase */}
      <section className="py-20 relative">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 opacity-0 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <span className="font-dancing text-gradient-blue-orange">Experience</span>
            <span className="text-white"> the Future of Thrift Shopping</span>
          </h2>
          
          <LaptopShowcase />
        </div>
      </section>
      
      {/* Features Section */}
      <FeatureSection />
      
      {/* How It Works */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900" id="how-it-works">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-dancing text-center mb-16 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <span className="text-white">How </span>
            <span className="text-thrifty-blue">Thrifty</span>
            <span className="text-thrifty-orange">Glow</span>
            <span className="text-white"> Works</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 h-full hover-scale">
                <div className="w-12 h-12 rounded-full bg-thrifty-orange/20 flex items-center justify-center mb-6 text-thrifty-orange font-bold text-xl">
                  1
                </div>
                <h3 className="text-2xl font-semibold mb-4">Browse & Discover</h3>
                <p className="text-white/70">
                  Explore our curated collection of vintage and pre-loved fashion items from around the world.
                </p>
              </div>
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full blur-[50px] rounded-full bg-thrifty-orange/10"></div>
            </div>
            
            <div className="relative">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 h-full hover-scale">
                <div className="w-12 h-12 rounded-full bg-thrifty-blue/20 flex items-center justify-center mb-6 text-thrifty-blue font-bold text-xl">
                  2
                </div>
                <h3 className="text-2xl font-semibold mb-4">Purchase Securely</h3>
                <p className="text-white/70">
                  Buy your favorite items with our secure payment system and buyer protection guarantee.
                </p>
              </div>
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full blur-[50px] rounded-full bg-thrifty-blue/10"></div>
            </div>
            
            <div className="relative">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 h-full hover-scale">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-6 text-white font-bold text-xl">
                  3
                </div>
                <h3 className="text-2xl font-semibold mb-4">Receive & Enjoy</h3>
                <p className="text-white/70">
                  Get your authenticated items delivered to your door and join our sustainable fashion community.
                </p>
              </div>
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full blur-[50px] rounded-full bg-white/5"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <span className="text-white">Ready to </span>
              <span className="font-dancing text-thrifty-orange">Revolutionize</span>
              <span className="text-white"> Your Wardrobe?</span>
            </h2>
            <p className="text-xl text-white/80 mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              Join our waitlist today and be the first to experience ThriftyGlow when we launch.
              Early subscribers get exclusive perks and discounts!
            </p>
            
            <a href="#join-waitlist">
              <Button 
                className="bg-gradient-to-r from-thrifty-blue to-thrifty-orange hover:opacity-90 text-white px-8 py-6 rounded-full text-lg animate-pulse-glow opacity-0 animate-fade-in hover-scale"
                style={{ animationDelay: '0.5s' }}
              >
                Join The Waitlist Now
              </Button>
            </a>
          </div>
        </div>
        
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-72 h-72 bg-thrifty-blue/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-thrifty-orange/10 rounded-full blur-[100px]"></div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-24 bg-black" id="faq">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-dancing text-center mb-16 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <span className="text-white">Frequently </span>
            <span className="text-thrifty-orange">Asked </span>
            <span className="text-thrifty-blue">Questions</span>
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  question: "When will ThriftyGlow launch?",
                  answer: "We're planning to launch in Q3 2025. Join our waitlist to be notified as soon as we go live!"
                },
                {
                  question: "How does the authentication process work?",
                  answer: "All items on ThriftyGlow go through a rigorous authentication process by our team of experts to ensure quality and authenticity."
                },
                {
                  question: "Can I sell my own thrifted items on ThriftyGlow?",
                  answer: "Yes! ThriftyGlow will be a marketplace where you can both buy and sell pre-loved fashion items."
                },
                {
                  question: "Do you ship internationally?",
                  answer: "Yes, we plan to offer international shipping to most countries upon launch."
                },
                {
                  question: "What makes ThriftyGlow different from other thrift platforms?",
                  answer: "ThriftyGlow combines expert curation, authentication, and a community-focused approach to create a premium thrifting experience."
                }
              ].map((faq, index) => (
                <div 
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-lg p-6 backdrop-blur-sm transition-all hover:bg-white/10"
                >
                  <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                  <p className="text-white/70">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
