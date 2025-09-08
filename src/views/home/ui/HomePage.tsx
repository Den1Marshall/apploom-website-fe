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

export const HomePage: FC = () => {
  return (
    <main className='bg-white dark:bg-black text-black dark:text-white'>
      <HeroSection />
      <StatsSection />
      <SuccessStoriesSection />
      <HowItWorksSection />
      <ComparisonSection />
      <FeaturesSection />
    </main>
  );
};
