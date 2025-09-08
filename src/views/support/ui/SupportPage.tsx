'use client';

import { Button, Card, CardBody, Input, Textarea, Link } from '@heroui/react';
import { FC, useState } from 'react';

// Icon components
const EnvelopeIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill='none'
    viewBox='0 0 24 24'
    strokeWidth={1.5}
    stroke='currentColor'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75'
    />
  </svg>
);

const PhoneIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill='none'
    viewBox='0 0 24 24'
    strokeWidth={1.5}
    stroke='currentColor'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z'
    />
  </svg>
);

const MapPinIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill='none'
    viewBox='0 0 24 24'
    strokeWidth={1.5}
    stroke='currentColor'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M15 10.5a3 3 0 11-6 0 3 3 0 016 0z'
    />
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z'
    />
  </svg>
);

const ChatBubbleLeftRightIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill='none'
    viewBox='0 0 24 24'
    strokeWidth={1.5}
    stroke='currentColor'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155'
    />
  </svg>
);

const ClockIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill='none'
    viewBox='0 0 24 24'
    strokeWidth={1.5}
    stroke='currentColor'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z'
    />
  </svg>
);

const QuestionMarkCircleIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill='none'
    viewBox='0 0 24 24'
    strokeWidth={1.5}
    stroke='currentColor'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M9.879 7.519c0-1.297 1.066-2.347 2.382-2.347s2.382 1.05 2.382 2.347c0 .901-.467 1.693-1.17 2.14-.329.209-.63.453-.894.717l-.257.257c-.204.204-.408.408-.577.645a1.5 1.5 0 00-.246.607V12.75a.75.75 0 101.5 0v-.607c0-.05.02-.099.055-.134l.257-.257c.264-.264.565-.507.894-.717.703-.447 1.17-1.239 1.17-2.14 0-1.297-1.066-2.347-2.382-2.347S9.879 6.222 9.879 7.519zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5z'
    />
  </svg>
);

export const SupportPage: FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        {/* Header */}
        <div className='text-center mb-16'>
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6'>
            Support & Contact
          </h1>
          <p className='text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto'>
            We&apos;re here to help. Reach out to us through any of the methods
            below and we&apos;ll get back to you as soon as possible.
          </p>
        </div>

        <div className='grid lg:grid-cols-3 gap-8 mb-16'>
          {/* Contact Form */}
          <div className='lg:col-span-2'>
            <Card className='bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-white/20 dark:border-gray-700/50'>
              <CardBody className='p-8'>
                <div className='flex items-center gap-3 mb-6'>
                  <ChatBubbleLeftRightIcon className='w-6 h-6 text-blue-600' />
                  <h2 className='text-2xl font-bold text-gray-900 dark:text-white'>
                    Send us a message
                  </h2>
                </div>

                <form onSubmit={handleSubmit} className='space-y-6'>
                  <div className='grid md:grid-cols-2 gap-4'>
                    <Input
                      type='text'
                      label='Your Name'
                      placeholder='Enter your full name'
                      value={formData.name}
                      onValueChange={(value) =>
                        handleInputChange('name', value)
                      }
                      classNames={{
                        inputWrapper:
                          'bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-white/20 dark:border-gray-700/50',
                        input:
                          'text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400',
                      }}
                      required
                    />
                    <Input
                      type='email'
                      label='Email Address'
                      placeholder='Enter your email'
                      value={formData.email}
                      onValueChange={(value) =>
                        handleInputChange('email', value)
                      }
                      classNames={{
                        inputWrapper:
                          'bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-white/20 dark:border-gray-700/50',
                        input:
                          'text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400',
                      }}
                      required
                    />
                  </div>

                  <Input
                    type='text'
                    label='Subject'
                    placeholder="What's this about?"
                    value={formData.subject}
                    onValueChange={(value) =>
                      handleInputChange('subject', value)
                    }
                    classNames={{
                      inputWrapper:
                        'bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-white/20 dark:border-gray-700/50',
                      input:
                        'text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400',
                    }}
                    required
                  />

                  <Textarea
                    label='Message'
                    placeholder='Tell us how we can help you...'
                    value={formData.message}
                    onValueChange={(value) =>
                      handleInputChange('message', value)
                    }
                    minRows={6}
                    classNames={{
                      inputWrapper:
                        'bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-white/20 dark:border-gray-700/50',
                      input:
                        'text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400',
                    }}
                    required
                  />

                  <Button
                    type='submit'
                    size='lg'
                    className='w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold'
                  >
                    Send Message
                  </Button>
                </form>
              </CardBody>
            </Card>
          </div>

          {/* Contact Information */}
          <div className='space-y-6'>
            {/* Contact Details */}
            <Card className='bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-white/20 dark:border-gray-700/50'>
              <CardBody className='p-6'>
                <h3 className='text-xl font-bold text-gray-900 dark:text-white mb-6'>
                  Get in touch
                </h3>

                <div className='space-y-4'>
                  <div className='flex items-start gap-3'>
                    <EnvelopeIcon className='w-5 h-5 text-blue-600 mt-1 flex-shrink-0' />
                    <div>
                      <p className='font-medium text-gray-900 dark:text-white'>
                        Email
                      </p>
                      <Link
                        href='mailto:support@apploom.io'
                        className='text-blue-600 hover:text-blue-700'
                      >
                        support@apploom.io
                      </Link>
                    </div>
                  </div>

                  <div className='flex items-start gap-3'>
                    <PhoneIcon className='w-5 h-5 text-blue-600 mt-1 flex-shrink-0' />
                    <div>
                      <p className='font-medium text-gray-900 dark:text-white'>
                        Phone
                      </p>
                      <Link
                        href='tel:+1-555-0123'
                        className='text-blue-600 hover:text-blue-700'
                      >
                        +1 (555) 012-3456
                      </Link>
                    </div>
                  </div>

                  <div className='flex items-start gap-3'>
                    <MapPinIcon className='w-5 h-5 text-blue-600 mt-1 flex-shrink-0' />
                    <div>
                      <p className='font-medium text-gray-900 dark:text-white'>
                        Address
                      </p>
                      <p className='text-gray-600 dark:text-gray-300'>
                        123 Tech Street
                        <br />
                        San Francisco, CA 94105
                        <br />
                        United States
                      </p>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>

            {/* Business Hours */}
            <Card className='bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-white/20 dark:border-gray-700/50'>
              <CardBody className='p-6'>
                <div className='flex items-center gap-3 mb-4'>
                  <ClockIcon className='w-5 h-5 text-blue-600' />
                  <h3 className='text-xl font-bold text-gray-900 dark:text-white'>
                    Business Hours
                  </h3>
                </div>

                <div className='space-y-2 text-sm'>
                  <div className='flex justify-between'>
                    <span className='text-gray-600 dark:text-gray-300'>
                      Monday - Friday
                    </span>
                    <span className='text-gray-900 dark:text-white font-medium'>
                      9:00 AM - 6:00 PM PST
                    </span>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-gray-600 dark:text-gray-300'>
                      Saturday
                    </span>
                    <span className='text-gray-900 dark:text-white font-medium'>
                      10:00 AM - 4:00 PM PST
                    </span>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-gray-600 dark:text-gray-300'>
                      Sunday
                    </span>
                    <span className='text-gray-900 dark:text-white font-medium'>
                      Closed
                    </span>
                  </div>
                </div>
              </CardBody>
            </Card>

            {/* FAQ Link */}
            <Card className='bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-white/20 dark:border-gray-700/50'>
              <CardBody className='p-6'>
                <div className='flex items-center gap-3 mb-4'>
                  <QuestionMarkCircleIcon className='w-5 h-5 text-blue-600' />
                  <h3 className='text-xl font-bold text-gray-900 dark:text-white'>
                    Quick Help
                  </h3>
                </div>

                <p className='text-gray-600 dark:text-gray-300 text-sm mb-4'>
                  Looking for quick answers? Check out our frequently asked
                  questions.
                </p>

                <Button
                  as={Link}
                  href='/faq'
                  variant='bordered'
                  className='w-full border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20'
                >
                  View FAQ
                </Button>
              </CardBody>
            </Card>
          </div>
        </div>

        {/* Response Time Notice */}
        <Card className='bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-800'>
          <CardBody className='p-6 text-center'>
            <p className='text-gray-700 dark:text-gray-300'>
              <span className='font-semibold'>Response Time:</span> We typically
              respond to all inquiries within 24 hours during business days. For
              urgent matters, please call us directly.
            </p>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};
