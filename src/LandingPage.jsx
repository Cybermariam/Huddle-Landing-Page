import React from 'react';
import HeroSection from '../src/components/HeroSection';
import StatsSection from '../src/components/StatsSection';
import FeatureSection from '../src/components/FeatureSection';
import CallToAction from '../src/components/CallToAction';

const LandingPage = () => {
  return (
    <main className="pt-[100px] m-auto">
      <HeroSection />
      <StatsSection />
      <FeatureSection />
      <CallToAction />
    </main>
  );
};

export default LandingPage;
