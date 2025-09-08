'use client';

import { FC, useState } from 'react';
import Link from 'next/link';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Input,
  Select,
  SelectItem,
  Checkbox,
  Divider,
  Chip,
  Progress,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
} from '@heroui/react';

// Icons
const EyeIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill='none'
    stroke='currentColor'
    viewBox='0 0 24 24'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
    />
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
    />
  </svg>
);

const EyeSlashIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill='none'
    stroke='currentColor'
    viewBox='0 0 24 24'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21'
    />
  </svg>
);

const CheckIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill='none'
    stroke='currentColor'
    viewBox='0 0 24 24'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M5 13l4 4L19 7'
    />
  </svg>
);

export const SignupPage: FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    company: '',
    businessType: '',
    agreeToTerms: false,
    subscribeNewsletter: true,
  });
  const [currentStep, setCurrentStep] = useState(1);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const businessTypes = [
    { key: 'restaurant', label: 'Restaurant & Food' },
    { key: 'retail', label: 'Retail & E-commerce' },
    { key: 'healthcare', label: 'Healthcare' },
    { key: 'fitness', label: 'Fitness & Wellness' },
    { key: 'education', label: 'Education' },
    { key: 'real-estate', label: 'Real Estate' },
    { key: 'professional', label: 'Professional Services' },
    { key: 'other', label: 'Other' },
  ];

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
      ],
      popular: false,
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
        'Priority support',
      ],
      popular: true,
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
        '24/7 phone support',
      ],
      popular: false,
    },
  ];

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const getPasswordStrength = (password: string) => {
    let strength = 0;
    if (password.length >= 8) strength += 25;
    if (/[a-z]/.test(password)) strength += 25;
    if (/[A-Z]/.test(password)) strength += 25;
    if (/[0-9]/.test(password)) strength += 25;
    return strength;
  };

  const passwordStrength = getPasswordStrength(formData.password);

  const renderStep1 = () => (
    <div className='space-y-6'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <Input
          label='First Name'
          placeholder='Enter your first name'
          value={formData.firstName}
          onValueChange={(value) => handleInputChange('firstName', value)}
          isRequired
          variant='bordered'
          size='lg'
          radius='md'
          classNames={{
            input: 'text-gray-900 dark:text-white',
            inputWrapper:
              'bg-white/50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700 hover:border-blue-400 focus-within:!border-blue-500 backdrop-blur-sm',
            label: 'text-gray-700 dark:text-gray-300',
          }}
        />
        <Input
          label='Last Name'
          placeholder='Enter your last name'
          value={formData.lastName}
          onValueChange={(value) => handleInputChange('lastName', value)}
          isRequired
          variant='bordered'
          size='lg'
          radius='md'
          classNames={{
            input: 'text-gray-900 dark:text-white',
            inputWrapper:
              'bg-white/50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700 hover:border-blue-400 focus-within:!border-blue-500 backdrop-blur-sm',
            label: 'text-gray-700 dark:text-gray-300',
          }}
        />
      </div>

      <Input
        label='Email Address'
        placeholder='Enter your email address'
        type='email'
        value={formData.email}
        onValueChange={(value) => handleInputChange('email', value)}
        isRequired
        variant='bordered'
        size='lg'
        radius='md'
        classNames={{
          input: 'text-gray-900 dark:text-white',
          inputWrapper:
            'bg-white/50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700 hover:border-blue-400 focus-within:!border-blue-500 backdrop-blur-sm',
          label: 'text-gray-700 dark:text-gray-300',
        }}
      />

      <div className='space-y-3'>
        <Input
          label='Password'
          placeholder='Create a strong password'
          type={isVisible ? 'text' : 'password'}
          value={formData.password}
          onValueChange={(value) => handleInputChange('password', value)}
          isRequired
          variant='bordered'
          size='lg'
          radius='md'
          classNames={{
            input: 'text-gray-900 dark:text-white',
            inputWrapper:
              'bg-white/50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700 hover:border-blue-400 focus-within:!border-blue-500 backdrop-blur-sm',
            label: 'text-gray-700 dark:text-gray-300',
          }}
          endContent={
            <button
              onClick={toggleVisibility}
              type='button'
              className='focus:outline-none'
            >
              {isVisible ? (
                <EyeSlashIcon className='w-5 h-5 text-gray-400 hover:text-gray-600' />
              ) : (
                <EyeIcon className='w-5 h-5 text-gray-400 hover:text-gray-600' />
              )}
            </button>
          }
        />
        {formData.password && (
          <div className='space-y-2'>
            <Progress
              value={passwordStrength}
              color={
                passwordStrength < 50
                  ? 'danger'
                  : passwordStrength < 75
                  ? 'warning'
                  : 'success'
              }
              size='sm'
              radius='sm'
            />
            <p className='text-xs text-gray-500'>
              Password strength:{' '}
              {passwordStrength < 50
                ? 'Weak'
                : passwordStrength < 75
                ? 'Medium'
                : 'Strong'}
            </p>
          </div>
        )}
      </div>

      <Input
        label='Confirm Password'
        placeholder='Confirm your password'
        type={isVisible ? 'text' : 'password'}
        value={formData.confirmPassword}
        onValueChange={(value) => handleInputChange('confirmPassword', value)}
        isRequired
        variant='bordered'
        size='lg'
        radius='md'
        classNames={{
          input: 'text-gray-900 dark:text-white',
          inputWrapper:
            'bg-white/50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700 hover:border-blue-400 focus-within:!border-blue-500 backdrop-blur-sm',
          label: 'text-gray-700 dark:text-gray-300',
        }}
        color={
          formData.confirmPassword &&
          formData.password !== formData.confirmPassword
            ? 'danger'
            : 'default'
        }
        errorMessage={
          formData.confirmPassword &&
          formData.password !== formData.confirmPassword
            ? 'Passwords do not match'
            : ''
        }
      />
    </div>
  );

  const renderStep2 = () => (
    <div className='space-y-6'>
      <Input
        label='Company Name'
        placeholder='Enter your company name'
        value={formData.company}
        onValueChange={(value) => handleInputChange('company', value)}
        isRequired
        variant='bordered'
        size='lg'
        radius='md'
        classNames={{
          input: 'text-gray-900 dark:text-white',
          inputWrapper:
            'bg-white/50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700 hover:border-blue-400 focus-within:!border-blue-500 backdrop-blur-sm',
          label: 'text-gray-700 dark:text-gray-300',
        }}
      />

      <Select
        label='Business Type'
        placeholder='Select your business type'
        selectedKeys={formData.businessType ? [formData.businessType] : []}
        onSelectionChange={(keys) => {
          const selectedKey = Array.from(keys)[0] as string;
          handleInputChange('businessType', selectedKey);
        }}
        isRequired
        variant='bordered'
        size='lg'
        radius='md'
        classNames={{
          trigger:
            'bg-white/50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700 hover:border-blue-400 focus-within:!border-blue-500 backdrop-blur-sm',
          label: 'text-gray-700 dark:text-gray-300',
          value: 'text-gray-900 dark:text-white',
        }}
      >
        {businessTypes.map((type) => (
          <SelectItem key={type.key}>{type.label}</SelectItem>
        ))}
      </Select>

      <div className='space-y-6 pt-4'>
        <Checkbox
          isSelected={formData.agreeToTerms}
          onValueChange={(checked) =>
            handleInputChange('agreeToTerms', checked)
          }
          isRequired
          size='md'
          className='mb-4'
        >
          <span className='text-sm text-gray-700 dark:text-gray-300'>
            I agree to the{' '}
            <Link
              href='/terms'
              className='text-blue-600 hover:text-blue-700 underline'
            >
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link
              href='/privacy'
              className='text-blue-600 hover:text-blue-700 underline'
            >
              Privacy Policy
            </Link>
          </span>
        </Checkbox>

        <Checkbox
          isSelected={formData.subscribeNewsletter}
          onValueChange={(checked) =>
            handleInputChange('subscribeNewsletter', checked)
          }
          size='md'
        >
          <span className='text-sm text-gray-700 dark:text-gray-300'>
            Subscribe to our newsletter for product updates and tips
          </span>
        </Checkbox>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className='space-y-6'>
      <div className='text-center mb-8'>
        <p className='text-gray-600 dark:text-gray-300'>
          Start with a 14-day free trial. No credit card required.
        </p>
      </div>

      <div className='space-y-4'>
        {plans.map((plan, index) => (
          <Card
            key={index}
            isPressable
            className={`relative border-2 transition-all duration-200 hover:shadow-lg backdrop-blur-sm ${
              plan.popular
                ? 'border-blue-500 shadow-md bg-blue-50/50 dark:bg-blue-950/30 hover:bg-blue-50/70 dark:hover:bg-blue-950/40'
                : 'border-gray-200/50 dark:border-gray-700/50 bg-white/50 dark:bg-gray-800/50 hover:border-gray-300/70 dark:hover:border-gray-600/70 hover:bg-white/70 dark:hover:bg-gray-800/70'
            }`}
            radius='lg'
          >
            {plan.popular && (
              <Chip
                color='primary'
                size='sm'
                className='absolute -top-3 left-4 z-10 bg-blue-600 text-white font-medium'
                radius='md'
              >
                Most Popular
              </Chip>
            )}
            <CardBody className='p-6'>
              <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4'>
                <div className='flex-1'>
                  <div className='flex items-center gap-3 mb-2'>
                    <h4 className='text-xl font-semibold text-gray-900 dark:text-white'>
                      {plan.name}
                    </h4>
                    <div className='flex items-baseline gap-1'>
                      <span className='text-2xl font-bold text-gray-900 dark:text-white'>
                        {plan.price}
                      </span>
                      {plan.period && (
                        <span className='text-gray-500 dark:text-gray-400'>
                          {plan.period}
                        </span>
                      )}
                    </div>
                  </div>
                  <p className='text-gray-600 dark:text-gray-300 mb-4'>
                    {plan.description}
                  </p>
                </div>
                <div className='lg:w-80'>
                  <ul className='space-y-2'>
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className='flex items-start gap-2'>
                        <CheckIcon className='w-4 h-4 text-green-500 mt-0.5 flex-shrink-0' />
                        <span className='text-sm text-gray-700 dark:text-gray-300'>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );

  return (
    <main className='min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 py-8 lg:py-12'>
      <div className='container mx-auto px-4 max-w-4xl'>
        {/* Header */}
        <div className='text-center mb-8 lg:mb-12'>
          <div className='inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6'>
            <div className='w-2 h-2 bg-blue-500 rounded-full animate-pulse'></div>
            Join thousands of successful businesses
          </div>

          <h1 className='text-3xl lg:text-4xl font-bold mb-4 text-gray-900 dark:text-white'>
            Create Your Account
          </h1>
          <p className='text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto'>
            Transform your business with a custom mobile app. No coding
            required.
          </p>
        </div>

        {/* Progress Steps */}
        <div className='mb-8 lg:mb-12'>
          <div className='flex items-center justify-center'>
            {[1, 2, 3].map((step) => (
              <div key={step} className='flex items-center'>
                <div className='flex flex-col items-center'>
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-200 ${
                      currentStep >= step
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 text-gray-500'
                    }`}
                  >
                    {currentStep > step ? (
                      <CheckIcon className='w-5 h-5' />
                    ) : (
                      step
                    )}
                  </div>
                  <span
                    className={`text-xs mt-2 font-medium ${
                      currentStep >= step
                        ? 'text-blue-600 dark:text-blue-400'
                        : 'text-gray-500'
                    }`}
                  >
                    {step === 1 && 'Personal'}
                    {step === 2 && 'Business'}
                    {step === 3 && 'Plan'}
                  </span>
                </div>
                {step < 3 && (
                  <div
                    className={`w-16 lg:w-24 h-1 mx-4 rounded-full transition-all duration-200 ${
                      currentStep > step
                        ? 'bg-blue-600'
                        : 'bg-gray-200 dark:bg-gray-700'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Main Form Card */}
        <Card
          className='w-full bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm shadow-xl border border-gray-200/50 dark:border-gray-700/50'
          radius='lg'
        >
          <CardHeader className='pb-4 pt-8 px-8'>
            <div className='w-full text-center'>
              <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-2'>
                {currentStep === 1 && 'Personal Information'}
                {currentStep === 2 && 'Business Details'}
                {currentStep === 3 && 'Select Your Plan'}
              </h2>
              <p className='text-gray-600 dark:text-gray-300'>
                {currentStep === 1 && 'Tell us about yourself to get started'}
                {currentStep === 2 && 'Help us understand your business needs'}
                {currentStep === 3 &&
                  'Choose the perfect plan for your success'}
              </p>
            </div>
          </CardHeader>

          <CardBody className='px-8 pb-8'>
            {currentStep === 1 && renderStep1()}
            {currentStep === 2 && renderStep2()}
            {currentStep === 3 && renderStep3()}

            <Divider className='my-8' />

            {/* Navigation Buttons */}
            <div className='flex flex-col sm:flex-row gap-4 justify-between'>
              <Button
                variant='bordered'
                onPress={() => setCurrentStep(Math.max(1, currentStep - 1))}
                isDisabled={currentStep === 1}
                size='lg'
                radius='md'
                className='order-2 sm:order-1 border-gray-300 dark:border-gray-600'
              >
                Previous
              </Button>

              {currentStep < 3 ? (
                <Button
                  color='primary'
                  onPress={() => setCurrentStep(Math.min(3, currentStep + 1))}
                  size='lg'
                  radius='md'
                  className='order-1 sm:order-2 bg-blue-600 hover:bg-blue-700'
                >
                  Continue
                </Button>
              ) : (
                <Button
                  color='primary'
                  size='lg'
                  radius='md'
                  onPress={onOpen}
                  className='order-1 sm:order-2 bg-green-600 hover:bg-green-700'
                >
                  Start Free Trial
                </Button>
              )}
            </div>
          </CardBody>
        </Card>

        {/* Social Login Alternative */}
        <div className='mt-8'>
          <div className='relative'>
            <Divider />
            <div className='absolute inset-0 flex items-center justify-center'>
              <span className='bg-gray-50 dark:bg-gray-900 px-4 text-sm text-gray-500'>
                Or sign up with
              </span>
            </div>
          </div>

          <div className='mt-6 flex flex-col sm:flex-row gap-3 max-w-md mx-auto'>
            <Button
              variant='bordered'
              size='lg'
              radius='md'
              className='flex-1 hover:bg-gray-50 dark:hover:bg-gray-800 border-gray-300 dark:border-gray-600'
              startContent={
                <svg className='w-5 h-5' viewBox='0 0 24 24'>
                  <path
                    fill='currentColor'
                    d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z'
                  />
                  <path
                    fill='currentColor'
                    d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z'
                  />
                  <path
                    fill='currentColor'
                    d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z'
                  />
                  <path
                    fill='currentColor'
                    d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z'
                  />
                </svg>
              }
            >
              Google
            </Button>

            <Button
              variant='bordered'
              size='lg'
              radius='md'
              className='flex-1 hover:bg-gray-50 dark:hover:bg-gray-800 border-gray-300 dark:border-gray-600'
              startContent={
                <svg
                  className='w-5 h-5'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' />
                </svg>
              }
            >
              Facebook
            </Button>
          </div>
        </div>

        {/* Login Link */}
        <div className='text-center mt-8'>
          <p className='text-gray-600 dark:text-gray-300'>
            Already have an account?{' '}
            <Link
              href='/signin'
              className='text-blue-600 hover:text-blue-700 font-semibold'
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>

      {/* Success Modal */}
      <Modal isOpen={isOpen} onClose={onClose} size='lg' backdrop='blur'>
        <ModalContent>
          <ModalHeader className='flex flex-col gap-1 text-center pb-2'>
            <div className='w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4'>
              <CheckIcon className='w-8 h-8 text-green-600 dark:text-green-400' />
            </div>
            <h3 className='text-2xl font-bold text-gray-900 dark:text-white'>
              Welcome to Apploom!
            </h3>
          </ModalHeader>
          <ModalBody className='text-center pb-8'>
            <p className='text-gray-600 dark:text-gray-300 mb-6 text-lg'>
              Your account has been created successfully. We&apos;ve sent a
              verification email to{' '}
              <strong className='text-blue-600 dark:text-blue-400'>
                {formData.email}
              </strong>
              .
            </p>
            <div className='space-y-3'>
              <Button
                color='primary'
                size='lg'
                radius='md'
                className='w-full bg-blue-600 hover:bg-blue-700'
                onPress={onClose}
              >
                Get Started
              </Button>
              <p className='text-sm text-gray-500'>
                Check your email to verify your account and complete setup
              </p>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </main>
  );
};
