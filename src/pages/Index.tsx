import { useEffect } from 'react';
import Hero from '@/components/Hero';
import InteractiveDemoFlow from '@/components/InteractiveDemoFlow';
import DemoFlow from '@/components/DemoFlow';
import ProblemSolution from '@/components/ProblemSolution';
import Benefits from '@/components/Benefits';
import ReputationBadges from '@/components/ReputationBadges';
import WaitlistSignup from '@/components/WaitlistSignup';
import Footer from '@/components/Footer';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Index = () => {
  useScrollAnimation();

  return (
    <div className="min-h-screen">
      <main>
        <Hero />
        <section>
          <InteractiveDemoFlow />
        </section>
        <section>
          <DemoFlow />
        </section>
        <section>
          <ProblemSolution />
        </section>
        <section>
          <Benefits />
        </section>
        <section>
          <ReputationBadges />
        </section>
        <section>
          <WaitlistSignup />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
