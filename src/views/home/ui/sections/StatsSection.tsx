import { FC } from 'react';

export const StatsSection: FC = () => {
  const stats = [
    { number: '10,000+', label: 'Apps created', sublabel: 'and counting' },
    { number: '24', label: 'Hours average', sublabel: 'launch time' },
    { number: '99.9%', label: 'Uptime', sublabel: 'guaranteed' },
    { number: '4.9', label: 'Customer rating', sublabel: 'out of 5' },
  ];

  return (
    <section className='relative bg-gray-50 dark:bg-gray-900 z-20 py-20'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8 text-center'>
          {stats.map((stat, index) => (
            <div key={index} className='space-y-2'>
              <div className='text-4xl lg:text-5xl font-bold tracking-tight text-blue-600 dark:text-blue-400'>
                {stat.number}
              </div>
              <div className='text-lg font-semibold text-gray-900 dark:text-gray-100'>
                {stat.label}
              </div>
              <div className='text-sm text-gray-500 dark:text-gray-400'>
                {stat.sublabel}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
