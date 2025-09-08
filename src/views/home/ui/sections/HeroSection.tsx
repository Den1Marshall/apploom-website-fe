'use client';

import { FC } from 'react';
import Link from 'next/link';
import { Button } from '@heroui/react';
import { Phone } from '@/shared/ui';

export const HeroSection: FC = () => {
  const platforms = [
    { type: 'ios' as const, name: 'iOS App', video: '/videos/test.mp4' },
    {
      type: 'android' as const,
      name: 'Android App',
      video: '/videos/test2.mp4',
    },
  ];

  return (
    <section className='relative pt-8 pb-20 lg:pt-12 lg:pb-32 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-16 lg:mb-20'>
          <div className='inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-8'>
            <div className='w-2 h-2 bg-blue-500 rounded-full animate-pulse'></div>
            Trusted by 10,000+ businesses worldwide
          </div>

          <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 tracking-tight leading-none'>
            <span className='block'>Launch your</span>
            <span className='block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent'>
              branded mobile app
            </span>
            <span className='block'>in 24 hours.</span>
          </h1>

          <p className='text-xl sm:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-12 font-light leading-relaxed'>
            Transform your business with native iOS and Android apps.
            <br className='hidden sm:block' />
            No coding required. No delays. No limits.
          </p>

          <div className='flex flex-col sm:flex-row gap-4 justify-center items-center mb-12'>
            <Button
              color='primary'
              size='lg'
              radius='full'
              className='bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300'
              as={Link}
              href='/signup'
            >
              Start free trial
            </Button>

            <Button
              variant='bordered'
              size='lg'
              radius='full'
              className='border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-gray-400 font-semibold px-8 py-4 text-lg transition-all duration-300'
              as={Link}
              href='/demo'
            >
              Watch the film ▸
            </Button>
          </div>

          <div className='flex flex-col sm:flex-row justify-center gap-6 sm:gap-12 text-sm text-gray-500 dark:text-gray-400'>
            <span>14-day free trial</span>
            <span>No credit card required</span>
            <span>Cancel anytime</span>
          </div>
        </div>

        <div className='flex flex-col lg:flex-row gap-16 lg:gap-32 justify-center items-start max-w-7xl mx-auto'>
          {platforms.map((platform) => (
            <div
              key={platform.name}
              className='flex flex-col items-center gap-6 w-full lg:w-auto'
            >
              <div className='text-center'>
                <h3 className='text-xl lg:text-2xl font-semibold mb-2 tracking-tight'>
                  {platform.name}
                </h3>
                <p className='text-gray-500 dark:text-gray-400 text-sm'>
                  {platform.type === 'ios'
                    ? 'Available on the App Store'
                    : 'Get it on Google Play'}
                </p>
              </div>

              <Phone
                type={platform.type}
                videoSrc={platform.video}
                className='transform hover:scale-105 transition-all duration-700 ease-out max-h-[400px] lg:max-h-[500px] drop-shadow-2xl'
              />

              <div className='text-center'>
                <p className='text-sm text-gray-500 dark:text-gray-400 mb-3'>
                  Ready in 24 hours
                </p>
                <Button
                  variant='light'
                  radius='full'
                  size='sm'
                  className='text-blue-600 dark:text-blue-400 font-medium'
                >
                  Learn more ▸
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
