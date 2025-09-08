import { FC } from 'react';
import Link from 'next/link';
import { Button, Progress } from '@heroui/react';

export const FeaturesSection: FC = () => {
  const features = [
    {
      title: 'Lightning fast.',
      subtitle: '24-hour deployment',
      description:
        'From concept to App Store in record time. Our AI-powered platform handles the complexity.',
      gradient: 'from-yellow-400 to-orange-500',
      textColor: 'text-orange-600 dark:text-orange-400',
    },
    {
      title: 'Completely yours.',
      subtitle: '100% white label',
      description:
        'Your brand. Your colors. Your identity. Zero Apploom branding anywhere.',
      gradient: 'from-purple-400 to-pink-500',
      textColor: 'text-purple-600 dark:text-purple-400',
    },
    {
      title: 'Real-time updates.',
      subtitle: 'Live content updates',
      description:
        'Update content, features, and design instantly without app store approvals. Push changes live in seconds.',
      gradient: 'from-cyan-400 to-blue-500',
      textColor: 'text-cyan-600 dark:text-cyan-400',
    },
    {
      title: 'Enterprise ready.',
      subtitle: 'Bank-level security',
      description:
        'SOC 2 certified infrastructure with end-to-end encryption. Your data stays protected.',
      gradient: 'from-green-400 to-blue-500',
      textColor: 'text-green-600 dark:text-green-400',
    },
    {
      title: 'Native performance.',
      subtitle: 'Built with React Native',
      description:
        'True native apps, not web wrappers. Smooth 60fps animations and platform optimizations.',
      gradient: 'from-blue-400 to-purple-500',
      textColor: 'text-blue-600 dark:text-blue-400',
    },
    {
      title: 'Advanced analytics.',
      subtitle: '50+ metrics tracked',
      description:
        'Deep insights into user behavior, revenue tracking, conversion analytics, and custom event tracking.',
      gradient: 'from-pink-400 to-purple-500',
      textColor: 'text-pink-600 dark:text-pink-400',
    },
  ];

  const roiData = [
    {
      amount: '$150,000',
      label: 'Traditional Development',
      color: 'red',
      value: 100,
      time: '6-12 months',
    },
    {
      amount: '$25,000',
      label: 'Freelancer Development',
      color: 'orange',
      value: 60,
      time: '3-6 months',
    },
    {
      amount: '$199/mo',
      label: 'Apploom Platform',
      color: 'green',
      value: 10,
      time: '24 hours',
    },
  ];

  const faqs = [
    {
      q: 'How quickly can my app be live?',
      a: 'Most apps go live within 24 hours. Complex customizations may take 2-3 days, but still 100x faster than traditional development.',
    },
    {
      q: 'Do I own the app and source code?',
      a: 'Yes! You have full ownership of your app, data, and can export everything. No vendor lock-in, ever.',
    },
    {
      q: 'What happens if I cancel my subscription?',
      a: 'Your app continues running for 30 days. You can export all data and transfer to another hosting provider if needed.',
    },
    {
      q: 'Can I customize the app design completely?',
      a: 'Absolutely. Change colors, fonts, layouts, add custom pages, integrate APIs - full customization available.',
    },
    {
      q: 'Is there a setup fee or hidden costs?',
      a: 'No setup fees, no hidden costs. Just $199/month includes hosting, app store management, updates, and support.',
    },
    {
      q: 'What kind of support do you provide?',
      a: '24/7 live chat support, dedicated success manager, video calls, and priority feature requests for all customers.',
    },
  ];

  return (
    <section className='relative bg-gray-50 dark:bg-gray-900 z-20 py-32'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-20'>
          <div className='inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-6'>
            Industry Leading
          </div>
          <h2 className='text-4xl lg:text-6xl font-bold mb-6 tracking-tight'>
            Designed for
            <span className='block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
              performance.
            </span>
          </h2>
        </div>

        {/* Features Grid */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto mb-20'>
          {features.map((feature, index) => (
            <div
              key={index}
              className='relative overflow-hidden rounded-3xl p-8 lg:p-12 bg-white dark:bg-gray-800 border border-gray-200/50 dark:border-gray-800/50 hover:scale-[1.02] transition-all duration-500'
            >
              <div className='space-y-4'>
                <div
                  className={`inline-block px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${feature.gradient} text-white`}
                >
                  {feature.subtitle}
                </div>
                <h3
                  className={`text-3xl lg:text-4xl font-bold tracking-tight ${feature.textColor}`}
                >
                  {feature.title}
                </h3>
                <p className='text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-light'>
                  {feature.description}
                </p>
              </div>

              <div
                className={`absolute -right-20 -bottom-20 w-40 h-40 bg-gradient-to-br ${feature.gradient} rounded-full opacity-5 blur-3xl`}
              ></div>
            </div>
          ))}
        </div>

        {/* ROI Section */}
        <div className='bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-3xl p-8 lg:p-12 mb-20 border border-gray-200/50 dark:border-gray-800/50'>
          <div className='text-center mb-12'>
            <h3 className='text-3xl lg:text-4xl font-bold mb-4 tracking-tight'>
              See your ROI
            </h3>
            <p className='text-lg text-gray-600 dark:text-gray-300 font-light'>
              Apploom typically pays for itself within 30 days
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {roiData.map((item, index) => (
              <div
                key={index}
                className='text-center bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50'
              >
                <div
                  className={`text-4xl font-bold mb-2 ${
                    item.color === 'red'
                      ? 'text-red-500'
                      : item.color === 'orange'
                      ? 'text-orange-500'
                      : 'text-green-500'
                  }`}
                >
                  {item.amount}
                </div>
                <div className='text-sm text-gray-600 dark:text-gray-300 mb-4'>
                  {item.label}
                </div>
                <Progress
                  color={
                    item.color === 'red'
                      ? 'danger'
                      : item.color === 'orange'
                      ? 'warning'
                      : 'success'
                  }
                  value={item.value}
                  className='mb-2'
                />
                <div className='text-xs text-gray-500 dark:text-gray-400'>
                  {item.time}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className='mb-20'>
          <div className='text-center mb-12'>
            <div className='inline-block px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium mb-6'>
              Frequently Asked Questions
            </div>
            <h3 className='text-3xl lg:text-4xl font-bold mb-4 tracking-tight'>
              Everything you need to know
            </h3>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto'>
            {faqs.map((faq, index) => (
              <div
                key={index}
                className='bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50'
              >
                <h4 className='font-semibold mb-3 text-blue-600 dark:text-blue-400'>
                  {faq.q}
                </h4>
                <p className='text-gray-600 dark:text-gray-300 leading-relaxed font-light'>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className='text-center'>
          <h3 className='text-3xl lg:text-4xl font-bold mb-6 tracking-tight'>
            Ready to launch?
          </h3>
          <p className='text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto font-light'>
            Join thousands of businesses building the future of mobile.
          </p>

          <div className='flex flex-col sm:flex-row gap-6 justify-center mb-8'>
            <Button
              color='primary'
              size='lg'
              radius='full'
              className='bg-blue-600 hover:bg-blue-700 text-white font-semibold px-12 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300'
              as={Link}
              href='/signup'
            >
              Start free trial
            </Button>

            <Button
              variant='bordered'
              size='lg'
              radius='full'
              className='border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-gray-400 font-semibold px-12 py-4 text-lg transition-all duration-300'
              as={Link}
              href='/contact'
            >
              Talk to an expert
            </Button>
          </div>

          <p className='text-sm text-gray-500 dark:text-gray-400'>
            14-day free trial. No credit card required.
          </p>
        </div>
      </div>
    </section>
  );
};
