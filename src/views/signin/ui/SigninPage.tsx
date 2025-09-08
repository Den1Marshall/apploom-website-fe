'use client';

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Input,
  Link,
  Divider,
  Checkbox,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from '@heroui/react';
import { useState } from 'react';

interface SigninFormData {
  email: string;
  password: string;
  rememberMe: boolean;
}

export function SigninPage() {
  const [formData, setFormData] = useState<SigninFormData>({
    email: '',
    password: '',
    rememberMe: false,
  });
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleInputChange = (
    field: keyof SigninFormData,
    value: string | boolean
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate login process
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsLoading(false);
    onOpen();
  };

  const isFormValid = formData.email && formData.password;

  return (
    <>
      <div className='min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 flex items-center justify-center p-4'>
        <div className='w-full max-w-md'>
          {/* Logo/Brand */}
          <div className='text-center mb-8'>
            <h1 className='text-3xl font-bold text-gray-900 dark:text-white mb-2'>
              Welcome Back
            </h1>
            <p className='text-gray-600 dark:text-gray-300'>
              Sign in to your Apploom account
            </p>
          </div>

          <Card className='bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm shadow-xl border border-gray-200/50 dark:border-gray-700/50'>
            <CardHeader className='pb-0 pt-8 px-8'>
              <div className='w-full text-center'>
                <h2 className='text-2xl font-semibold text-gray-900 dark:text-white'>
                  Sign In
                </h2>
                <p className='text-gray-600 dark:text-gray-300 mt-2'>
                  Enter your credentials to access your account
                </p>
              </div>
            </CardHeader>

            <CardBody className='px-8 pb-8'>
              <form onSubmit={handleSubmit} className='space-y-6'>
                {/* Email Input */}
                <Input
                  type='email'
                  label='Email Address'
                  placeholder='Enter your email'
                  value={formData.email}
                  onValueChange={(value) => handleInputChange('email', value)}
                  startContent={
                    <svg
                      className='w-4 h-4 text-gray-400'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207'
                      />
                    </svg>
                  }
                  isRequired
                  size='lg'
                  radius='md'
                  variant='bordered'
                  className='w-full'
                  classNames={{
                    input: 'text-gray-900 dark:text-white',
                    inputWrapper:
                      'bg-white/50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700 hover:border-blue-400 focus-within:!border-blue-500 backdrop-blur-sm',
                    label: 'text-gray-700 dark:text-gray-300',
                  }}
                />

                {/* Password Input */}
                <Input
                  type={isPasswordVisible ? 'text' : 'password'}
                  label='Password'
                  placeholder='Enter your password'
                  value={formData.password}
                  onValueChange={(value) =>
                    handleInputChange('password', value)
                  }
                  startContent={
                    <svg
                      className='w-4 h-4 text-gray-400'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
                      />
                    </svg>
                  }
                  endContent={
                    <button
                      className='focus:outline-none'
                      type='button'
                      onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                      aria-label='toggle password visibility'
                    >
                      {isPasswordVisible ? (
                        <svg
                          className='w-4 h-4 text-gray-400 hover:text-gray-600'
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
                      ) : (
                        <svg
                          className='w-4 h-4 text-gray-400 hover:text-gray-600'
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
                      )}
                    </button>
                  }
                  isRequired
                  size='lg'
                  radius='md'
                  variant='bordered'
                  className='w-full'
                  classNames={{
                    input: 'text-gray-900 dark:text-white',
                    inputWrapper:
                      'bg-white/50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700 hover:border-blue-400 focus-within:!border-blue-500 backdrop-blur-sm',
                    label: 'text-gray-700 dark:text-gray-300',
                  }}
                />

                {/* Remember Me & Forgot Password */}
                <div className='flex items-center justify-between'>
                  <Checkbox
                    isSelected={formData.rememberMe}
                    onValueChange={(checked) =>
                      handleInputChange('rememberMe', checked)
                    }
                    size='sm'
                  >
                    <span className='text-sm text-gray-700 dark:text-gray-300'>
                      Remember me
                    </span>
                  </Checkbox>

                  <Link
                    href='/forgot-password'
                    className='text-sm text-blue-600 hover:text-blue-700 underline'
                  >
                    Forgot password?
                  </Link>
                </div>

                {/* Sign In Button */}
                <Button
                  type='submit'
                  color='primary'
                  size='lg'
                  radius='md'
                  className='w-full bg-blue-600 hover:bg-blue-700 font-medium'
                  isDisabled={!isFormValid}
                  isLoading={isLoading}
                >
                  {isLoading ? 'Signing In...' : 'Sign In'}
                </Button>

                <Divider className='my-6' />

                {/* Alternative Sign In Options */}
                <div className='space-y-3'>
                  <Button
                    variant='bordered'
                    size='lg'
                    radius='md'
                    className='w-full border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700'
                    startContent={
                      <svg className='w-5 h-5' viewBox='0 0 24 24'>
                        <path
                          fill='#4285F4'
                          d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z'
                        />
                        <path
                          fill='#34A853'
                          d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z'
                        />
                        <path
                          fill='#FBBC05'
                          d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z'
                        />
                        <path
                          fill='#EA4335'
                          d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z'
                        />
                      </svg>
                    }
                  >
                    Continue with Google
                  </Button>

                  <Button
                    variant='bordered'
                    size='lg'
                    radius='md'
                    className='w-full border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700'
                    startContent={
                      <svg
                        className='w-5 h-5'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                      >
                        <path
                          fillRule='evenodd'
                          d='M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z'
                          clipRule='evenodd'
                        />
                      </svg>
                    }
                  >
                    Continue with GitHub
                  </Button>
                </div>

                <Divider className='my-6' />

                {/* Sign Up Link */}
                <div className='text-center'>
                  <p className='text-gray-600 dark:text-gray-300'>
                    Don&apos;t have an account?{' '}
                    <Link
                      href='/signup'
                      className='text-blue-600 hover:text-blue-700 font-medium underline'
                    >
                      Sign up for free
                    </Link>
                  </p>
                </div>
              </form>
            </CardBody>
          </Card>

          {/* Footer */}
          <div className='text-center mt-8'>
            <p className='text-sm text-gray-500 dark:text-gray-400'>
              By signing in, you agree to our{' '}
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
            </p>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      <Modal isOpen={isOpen} onClose={onClose} size='md' placement='center'>
        <ModalContent>
          <ModalHeader className='flex flex-col gap-1 text-center'>
            <svg
              className='w-16 h-16 text-green-500 mx-auto mb-4'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
            <h3 className='text-2xl font-semibold text-gray-900 dark:text-white'>
              Welcome Back!
            </h3>
          </ModalHeader>
          <ModalBody className='text-center pb-6'>
            <p className='text-gray-600 dark:text-gray-300'>
              You have successfully signed in to your account. Redirecting to
              your dashboard...
            </p>
          </ModalBody>
          <ModalFooter className='justify-center'>
            <Button
              color='primary'
              onPress={onClose}
              className='bg-green-600 hover:bg-green-700'
            >
              Continue to Dashboard
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
