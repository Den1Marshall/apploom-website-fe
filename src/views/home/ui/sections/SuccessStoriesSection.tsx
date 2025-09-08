import { FC } from 'react';
import { Avatar } from '@heroui/react';

export const SuccessStoriesSection: FC = () => {
  const stories = [
    {
      name: 'Sarah Chen',
      role: 'Founder, Fresh Bites Cafe',
      avatar:
        'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=100',
      result: '300% increase',
      quote:
        'Apploom helped us launch our food ordering app in just one day. Our revenue tripled within the first month!',
      metrics: { orders: '+300%', revenue: '$25k/mo', rating: '4.8★' },
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Owner, FitLife Gym',
      avatar:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100',
      result: '500+ new members',
      quote:
        'The member app has revolutionized how we engage with our community. Class bookings are up 400%.',
      metrics: { members: '+500', bookings: '+400%', retention: '85%' },
    },
    {
      name: 'Emily Johnson',
      role: 'CEO, Boutique Fashion',
      avatar:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100',
      result: '$50k monthly',
      quote:
        "Our e-commerce app pays for itself 250x over. Best business investment we've ever made.",
      metrics: { revenue: '$50k/mo', conversion: '+180%', downloads: '10k+' },
    },
  ];

  return (
    <section className='relative bg-white dark:bg-black z-20 py-32'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-20'>
          <div className='inline-block px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium mb-6'>
            Real Results
          </div>
          <h2 className='text-4xl lg:text-6xl font-bold mb-6 tracking-tight'>
            Loved by
            <span className='block bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent'>
              businesses.
            </span>
          </h2>
          <p className='text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-light'>
            See how companies transformed their operations
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto'>
          {stories.map((story, index) => (
            <div
              key={index}
              className='bg-gray-50 dark:bg-gray-900 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 border border-gray-200/50 dark:border-gray-800/50'
            >
              <div className='mb-6'>
                <div className='inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-4'>
                  {story.result}
                </div>
                <p className='text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-light italic mb-6'>
                  &quot;{story.quote}&quot;
                </p>
              </div>

              <div className='flex items-center gap-4 mb-6'>
                <Avatar
                  src={story.avatar}
                  size='lg'
                  className='ring-2 ring-gray-200 dark:ring-gray-700'
                />
                <div>
                  <div className='font-semibold text-gray-900 dark:text-gray-100'>
                    {story.name}
                  </div>
                  <div className='text-sm text-gray-500 dark:text-gray-400'>
                    {story.role}
                  </div>
                </div>
              </div>

              <div className='grid grid-cols-3 gap-2 text-center'>
                {Object.entries(story.metrics).map(([key, value]) => (
                  <div
                    key={key}
                    className='bg-white dark:bg-gray-800 rounded-lg p-2 border border-gray-200/50 dark:border-gray-700/50'
                  >
                    <div className='font-bold text-sm'>{value}</div>
                    <div className='text-xs text-gray-500 dark:text-gray-400 capitalize'>
                      {key}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
