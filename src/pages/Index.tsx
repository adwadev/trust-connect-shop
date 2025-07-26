import { useEffect } from 'react';
import Hero from '@/components/Hero';
import DemoFlow from '@/components/DemoFlow';
import ProblemSolution from '@/components/ProblemSolution';
import Benefits from '@/components/Benefits';
import WaitlistSignup from '@/components/WaitlistSignup';
import Footer from '@/components/Footer';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Index = () => {
  useScrollAnimation();

  return (
    <div className="min-h-screen">
      <Hero />
      <DemoFlow />
      <ProblemSolution />
      <Benefits />
      <WaitlistSignup />
      <Footer />
    </div>
  );
};

export default Index;
