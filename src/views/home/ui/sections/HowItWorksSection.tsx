import { FC } from 'react';
import { Button } from '@heroui/react';

export const HowItWorksSection: FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Choose your template.',
      description:
        'Select from 50+ industry-specific templates. Customize colors, fonts, and layout to match your brand perfectly.',
      time: '5 minutes',
      gradient: 'from-blue-400 to-purple-500',
    },
    {
      step: '02',
      title: 'Add your content.',
      description:
        'Upload your logo, images, and content. Connect existing systems via API or import data with migration tools.',
      time: '15 minutes',
      gradient: 'from-purple-400 to-pink-500',
    },
    {
      step: '03',
      title: 'Launch and scale.',
      description:
        'We handle app store submission, hosting, and infrastructure. Your app goes live with automatic scaling.',
      time: '24 hours',
      gradient: 'from-pink-400 to-red-500',
    },
  ];

  return (
    <section className='relative bg-gray-50 dark:bg-gray-900 z-20 py-32'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-20'>
          <div className='inline-block px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium mb-6'>
            Simple Process
          </div>
          <h2 className='text-4xl lg:text-6xl font-bold mb-6 tracking-tight'>
            Three steps to
            <span className='block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent'>
              launch.
            </span>
          </h2>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto'>
          {steps.map((step, index) => (
            <div
              key={index}
              className='relative bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-200/50 dark:border-gray-700/50 hover:scale-[1.02] transition-all duration-500'
            >
              <div
                className={`inline-block px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${step.gradient} text-white mb-6`}
              >
                Step {step.step}
              </div>
              <h3 className='text-2xl font-bold tracking-tight mb-4 text-gray-900 dark:text-gray-100'>
                {step.title}
              </h3>
              <p className='text-gray-600 dark:text-gray-300 leading-relaxed font-light mb-4'>
                {step.description}
              </p>
              <div className='text-sm text-gray-500 dark:text-gray-400'>
                ⏱️ {step.time}
              </div>

              <div
                className={`absolute -right-10 -bottom-10 w-20 h-20 bg-gradient-to-br ${step.gradient} rounded-full opacity-10 blur-2xl`}
              ></div>
            </div>
          ))}
        </div>

        <div className='text-center'>
          <Button
            variant='bordered'
            size='lg'
            radius='full'
            className='border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-gray-400 font-semibold px-8 py-4 text-lg transition-all duration-300'
          >
            Watch demo ▸
          </Button>
        </div>
      </div>
    </section>
  );
};
