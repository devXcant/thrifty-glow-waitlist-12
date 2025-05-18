
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const WaitlistForm = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "You're on the list!",
        description: "We'll notify you when Thrifty Glow launches.",
        duration: 5000,
      });
      setEmail('');
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="w-full max-w-md mx-auto relative opacity-0 animate-fade-in"
      style={{ animationDelay: '0.6s' }}
      id="join-waitlist"
    >
      <div className="relative flex items-center">
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          required
          className="bg-white/10 border-white/20 text-white placeholder:text-white/50 pr-32 h-14 rounded-full focus:ring-thrifty-orange focus:border-thrifty-orange"
        />
        <Button
          type="submit"
          disabled={isSubmitting}
          className="absolute right-1 h-12 rounded-full bg-gradient-to-r from-thrifty-blue to-thrifty-orange hover:opacity-90 transition-all"
        >
          {isSubmitting ? 'Joining...' : 'Join Waitlist'}
        </Button>
      </div>
      <p className="mt-3 text-xs text-white/60 text-center">
        Join 1,000+ fashion enthusiasts already on our waitlist
      </p>
    </form>
  );
};

export default WaitlistForm;
