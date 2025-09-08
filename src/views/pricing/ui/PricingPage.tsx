'use client';

import { FC } from 'react';
import Link from 'next/link';
import { Button, Card, CardBody, CardHeader, Chip } from '@heroui/react';

// CheckIcon component
const CheckIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill='none'
    stroke='currentColor'
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M5 13l4 4L19 7'
    />
  </svg>
);

export const PricingPage: FC = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses getting started',
      features: [
        'Single mobile app (iOS + Android)',
        'Basic customization',
        'App store submission',
        'Basic analytics',
        'Email support',
        'SSL certificate included',
      ],
      popular: false,
      color: 'default',
    },
    {
      name: 'Professional',
      price: '$199',
      period: '/month',
      description: 'Most popular choice for growing businesses',
      features: [
        'Single mobile app (iOS + Android)',
        'Full white-label customization',
        'Real-time content updates',
        'Advanced analytics dashboard',
        'Push notifications',
        'API integrations',
        'Priority support',
        'Custom domains',
      ],
      popular: true,
      color: 'primary',
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations with specific needs',
      features: [
        'Multiple mobile apps',
        'Custom feature development',
        'Dedicated account manager',
        'SLA guarantees',
        'Advanced security features',
        'White-glove onboarding',
        '24/7 phone support',
        'Custom integrations',
      ],
      popular: false,
      color: 'secondary',
    },
  ];

  const faqs = [
    {
      q: 'Can I change plans anytime?',
      a: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately for upgrades, or at the next billing cycle for downgrades.',
    },
    {
      q: 'What happens during the free trial?',
      a: 'You get full access to all Professional plan features for 14 days. No credit card required. Your app will be fully functional during the trial.',
    },
    {
      q: 'Do you offer discounts for annual billing?',
      a: 'Yes! Save 20% when you pay annually. Contact our sales team for custom enterprise pricing and additional discounts.',
    },
    {
      q: 'What if I need custom features?',
      a: 'Our Enterprise plan includes custom feature development. For smaller custom needs, we offer paid add-ons starting at $500/feature.',
    },
    {
      q: 'Is there a setup fee?',
      a: 'No setup fees ever. The monthly price includes everything: hosting, app store management, updates, and support.',
    },
    {
      q: 'Can I cancel anytime?',
      a: 'Yes, you can cancel anytime with no penalties. Your app will continue running for 30 days to give you time to transition.',
    },
  ];

  return (
    <main className='bg-white dark:bg-black text-black dark:text-white'>
      {/* Hero Section */}
      <section className='relative pt-8 pb-20 lg:pt-12 lg:pb-32 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black'>
        <div className='container mx-auto px-4 text-center'>
          <div className='inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-8'>
            <div className='w-2 h-2 bg-blue-500 rounded-full animate-pulse'></div>
            Simple, transparent pricing
          </div>

          <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-none'>
            <span className='block'>Choose the perfect</span>
            <span className='block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent'>
              plan for your business
            </span>
          </h1>

          <p className='text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12 font-light'>
            Start with a 14-day free trial. No credit card required.
            <br className='hidden sm:block' />
            Cancel anytime with no penalties.
          </p>

          <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
            <Button
              color='primary'
              size='lg'
              radius='full'
              className='bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300'
              as={Link}
              href='/signup'
            >
              Start 14-day free trial
            </Button>

            <Button
              variant='bordered'
              size='lg'
              radius='full'
              className='border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-gray-400 font-semibold px-8 py-4 text-lg transition-all duration-300'
              as={Link}
              href='/contact'
            >
              Talk to sales
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className='relative bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 py-20'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-start pt-8'>
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative w-full ${
                  plan.popular
                    ? 'border-2 border-blue-500 lg:scale-105 shadow-2xl bg-white/80 dark:bg-gray-800/80'
                    : 'border border-gray-200/50 dark:border-gray-700/50 bg-white/70 dark:bg-gray-800/70'
                } backdrop-blur-sm rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:bg-white/90 dark:hover:bg-gray-800/90`}
              >
                {plan.popular && (
                  <div className='absolute -top-2 left-1/2 transform -translate-x-1/2 z-10'>
                    <Chip
                      color='primary'
                      size='sm'
                      className='bg-blue-600 text-white font-medium px-3 py-1 text-xs whitespace-nowrap shadow-lg'
                    >
                      Most Popular
                    </Chip>
                  </div>
                )}

                <CardHeader className='text-center p-6 lg:p-8 pb-4'>
                  <div className='space-y-4'>
                    <h3 className='text-xl lg:text-2xl font-bold'>
                      {plan.name}
                    </h3>
                    <p className='text-gray-600 dark:text-gray-300 text-sm lg:text-base'>
                      {plan.description}
                    </p>

                    <div className='py-4'>
                      <span className='text-3xl lg:text-5xl font-bold'>
                        {plan.price}
                      </span>
                      {plan.period && (
                        <span className='text-gray-500 dark:text-gray-400 text-base lg:text-lg'>
                          {plan.period}
                        </span>
                      )}
                    </div>

                    <Button
                      color={plan.popular ? 'primary' : 'default'}
                      size='lg'
                      radius='full'
                      className={`w-full font-semibold transition-all duration-300 ${
                        plan.popular
                          ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl'
                          : 'border-2 border-gray-300 dark:border-gray-600 hover:border-gray-400'
                      }`}
                      as={Link}
                      href='/signup'
                    >
                      {plan.name === 'Enterprise'
                        ? 'Contact Sales'
                        : 'Start Free Trial'}
                    </Button>
                  </div>
                </CardHeader>

                <CardBody className='px-6 lg:px-8 pb-6 lg:pb-8'>
                  <ul className='space-y-3 lg:space-y-4'>
                    {plan.features.map((feature, index) => (
                      <li key={index} className='flex items-start'>
                        <CheckIcon className='w-4 h-4 lg:w-5 lg:h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0' />
                        <span className='text-gray-700 dark:text-gray-300 text-sm lg:text-base'>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className='relative bg-gray-50 dark:bg-gray-900 py-20'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl lg:text-4xl font-bold mb-4'>
              Compare all features
            </h2>
            <p className='text-lg text-gray-600 dark:text-gray-300'>
              See exactly what&apos;s included in each plan
            </p>
          </div>

          <div className='overflow-x-auto'>
            <div className='bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg min-w-[600px]'>
              <table className='w-full'>
                <thead className='bg-gray-100 dark:bg-gray-700'>
                  <tr>
                    <th className='p-6 text-left font-semibold'>Features</th>
                    <th className='p-6 text-center font-semibold'>Starter</th>
                    <th className='p-6 text-center font-semibold'>
                      Professional
                    </th>
                    <th className='p-6 text-center font-semibold'>
                      Enterprise
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Mobile App (iOS + Android)', '✓', '✓', '✓'],
                    ['App Store Submission', '✓', '✓', '✓'],
                    ['Basic Customization', '✓', '✓', '✓'],
                    ['White-label Branding', '❌', '✓', '✓'],
                    ['Real-time Updates', '❌', '✓', '✓'],
                    ['Push Notifications', '❌', '✓', '✓'],
                    ['Advanced Analytics', '❌', '✓', '✓'],
                    ['API Integrations', '❌', '✓', '✓'],
                    ['Custom Domains', '❌', '✓', '✓'],
                    ['Priority Support', '❌', '✓', '✓'],
                    ['Multiple Apps', '❌', '❌', '✓'],
                    ['Custom Development', '❌', '❌', '✓'],
                    ['Dedicated Manager', '❌', '❌', '✓'],
                    ['SLA Guarantees', '❌', '❌', '✓'],
                  ].map((row, index) => (
                    <tr
                      key={index}
                      className={
                        index % 2 === 0
                          ? 'bg-white dark:bg-gray-800'
                          : 'bg-gray-50 dark:bg-gray-900'
                      }
                    >
                      <td className='p-4 font-medium'>{row[0]}</td>
                      <td className='p-4 text-center'>
                        <span
                          className={
                            row[1] === '✓' ? 'text-green-600' : 'text-gray-400'
                          }
                        >
                          {row[1]}
                        </span>
                      </td>
                      <td className='p-4 text-center'>
                        <span
                          className={
                            row[2] === '✓' ? 'text-green-600' : 'text-gray-400'
                          }
                        >
                          {row[2]}
                        </span>
                      </td>
                      <td className='p-4 text-center'>
                        <span
                          className={
                            row[3] === '✓' ? 'text-green-600' : 'text-gray-400'
                          }
                        >
                          {row[3]}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className='relative bg-white dark:bg-black py-20'>
        <div className='container mx-auto px-4'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl lg:text-4xl font-bold mb-4'>
              Frequently asked questions
            </h2>
            <p className='text-lg text-gray-600 dark:text-gray-300'>
              Everything you need to know about our pricing
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto'>
            {faqs.map((faq, index) => (
              <div
                key={index}
                className='bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 border border-gray-200/50 dark:border-gray-800/50'
              >
                <h4 className='font-semibold mb-3 text-lg text-blue-600 dark:text-blue-400'>
                  {faq.q}
                </h4>
                <p className='text-gray-600 dark:text-gray-300 leading-relaxed'>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='relative bg-gray-900 text-white py-20'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-3xl lg:text-4xl font-bold mb-6'>
            Ready to launch your mobile app?
          </h2>
          <p className='text-xl text-gray-300 mb-12 max-w-2xl mx-auto'>
            Join thousands of businesses that trust Apploom to power their
            mobile presence.
          </p>

          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button
              size='lg'
              radius='full'
              className='bg-white text-gray-900 hover:bg-gray-100 font-semibold px-12 py-4 text-lg transition-all duration-300'
              as={Link}
              href='/signup'
            >
              Start Free Trial
            </Button>

            <Button
              variant='bordered'
              size='lg'
              radius='full'
              className='border-2 border-gray-400 text-gray-300 hover:border-gray-300 hover:text-white font-semibold px-12 py-4 text-lg transition-all duration-300'
              as={Link}
              href='/contact'
            >
              Contact Sales
            </Button>
          </div>

          <p className='text-sm text-gray-400 mt-6'>
            14-day free trial • No credit card required • Cancel anytime
          </p>
        </div>
      </section>
    </main>
  );
};
