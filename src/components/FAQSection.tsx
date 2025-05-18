
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  delay: number;
}

const FAQItem = ({ question, answer, isOpen, onToggle, delay }: FAQItemProps) => {
  return (
    <motion.div 
      className="mb-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
    >
      <button 
        onClick={onToggle}
        className="w-full flex justify-between items-center text-left p-5 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all"
      >
        <h3 className="text-xl font-medium text-white">{question}</h3>
        <ChevronDown 
          className={`text-white transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`} 
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-5 pt-4 text-white/70 text-lg backdrop-blur-md bg-white/3 border-x border-b border-white/10 rounded-b-2xl">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const faqs = [
    {
      question: "When will GeFe launch?",
      answer: "We're planning to launch in Q3 2025. Join our waitlist to be notified as soon as we go live!"
    },
    {
      question: "How does the authentication process work?",
      answer: "All items on GeFe go through a rigorous authentication process by our team of experts to ensure quality and authenticity."
    },
    {
      question: "Can I sell my own thrifted items on GeFe?",
      answer: "Yes! GeFe will be a marketplace where you can both buy and sell pre-loved fashion items."
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we plan to offer international shipping to most countries upon launch."
    }
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-black relative overflow-hidden" id="faq">
      <div className="container relative z-10">
        <motion.h2 
          className="text-5xl md:text-6xl font-dancing text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-white">Frequently </span>
          <span className="text-thrifty-orange">Asked </span>
          <span className="text-thrifty-blue">Questions</span>
        </motion.h2>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
              delay={index}
            />
          ))}
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-20 right-20 w-60 h-60 bg-thrifty-blue/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-thrifty-orange/10 rounded-full blur-3xl animate-float-delay"></div>
    </section>
  );
};

export default FAQSection;
