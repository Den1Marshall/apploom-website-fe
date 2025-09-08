'use client';

import { FC } from 'react';
import {
  HeroSection,
  StatsSection,
  SuccessStoriesSection,
  HowItWorksSection,
  ComparisonSection,
  FeaturesSection,
} from './sections';
import { Header } from './Header';

export const HomePage: FC = () => {
  return (
    <main className='bg-white dark:bg-black text-black dark:text-white'>
      <Header />
      <HeroSection />
      <StatsSection />
      <SuccessStoriesSection />
      <HowItWorksSection />
      <ComparisonSection />
      <FeaturesSection />
    </main>
  );
};
