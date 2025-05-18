
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Send } from 'lucide-react';

const MessageForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
        duration: 5000,
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="w-full max-w-lg mx-auto">
      <h2 className="text-3xl font-dancing text-white mb-6 text-center">Get in Touch</h2>
      
      <form 
        onSubmit={handleSubmit} 
        className="space-y-4 backdrop-blur-md bg-white/5 p-8 rounded-2xl border border-white/10 shadow-xl"
      >
        <div>
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-12 rounded-md focus:ring-white focus:border-white"
          />
        </div>
        
        <div>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-12 rounded-md focus:ring-white focus:border-white"
          />
        </div>
        
        <div>
          <Textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            className="bg-white/10 border-white/20 text-white placeholder:text-white/50 min-h-[120px] rounded-md focus:ring-white focus:border-white resize-none"
          />
        </div>
        
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-white hover:bg-white/90 text-black hover:scale-105 transition-all duration-300 font-medium h-12"
        >
          {isSubmitting ? 'Sending...' : (
            <>
              Send Message <Send className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>
      </form>
    </div>
  );
};

export default MessageForm;
