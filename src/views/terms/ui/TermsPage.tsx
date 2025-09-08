'use client';

import { Card, CardBody } from '@heroui/react';
import Link from 'next/link';

export function TermsPage() {
  const lastUpdated = 'December 8, 2025';

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 py-12'>
      <div className='container mx-auto px-4 max-w-4xl'>
        {/* Header */}
        <div className='text-center mb-12'>
          <h1 className='text-4xl font-bold text-gray-900 dark:text-white mb-4'>
            Terms of Service
          </h1>
          <p className='text-gray-600 dark:text-gray-300 text-lg'>
            Last updated: {lastUpdated}
          </p>
        </div>

        {/* Content Card */}
        <Card className='bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm shadow-xl border border-gray-200/50 dark:border-gray-700/50'>
          <CardBody className='p-8 lg:p-12'>
            <div className='prose prose-gray dark:prose-invert max-w-none'>
              <section className='mb-8'>
                <h2 className='text-2xl font-semibold mb-4 text-gray-900 dark:text-white'>
                  1. Acceptance of Terms
                </h2>
                <p className='text-gray-700 dark:text-gray-300 leading-relaxed mb-4'>
                  By accessing and using Apploom&apos;s services, you accept and
                  agree to be bound by the terms and provision of this
                  agreement. If you do not agree to abide by the above, please
                  do not use this service.
                </p>
                <p className='text-gray-700 dark:text-gray-300 leading-relaxed'>
                  These Terms of Service (&quot;Terms&quot;) govern your use of
                  our website and services provided by Apploom (&quot;we&quot;,
                  &quot;us&quot;, or &quot;our&quot;) for creating and managing
                  white-label mobile applications.
                </p>
              </section>

              <section className='mb-8'>
                <h2 className='text-2xl font-semibold mb-4 text-gray-900 dark:text-white'>
                  2. Service Description
                </h2>
                <p className='text-gray-700 dark:text-gray-300 leading-relaxed mb-4'>
                  Apploom provides a platform for creating custom mobile
                  applications for businesses. Our services include:
                </p>
                <ul className='list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4'>
                  <li>White-label mobile app development and customization</li>
                  <li>Content management systems for app updates</li>
                  <li>Analytics and reporting tools</li>
                  <li>Technical support and maintenance</li>
                  <li>App store deployment assistance</li>
                </ul>
              </section>

              <section className='mb-8'>
                <h2 className='text-2xl font-semibold mb-4 text-gray-900 dark:text-white'>
                  3. User Accounts and Registration
                </h2>
                <p className='text-gray-700 dark:text-gray-300 leading-relaxed mb-4'>
                  To access our services, you must create an account. You agree
                  to:
                </p>
                <ul className='list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4'>
                  <li>
                    Provide accurate, current, and complete information during
                    registration
                  </li>
                  <li>Maintain and promptly update your account information</li>
                  <li>Maintain the security of your password and account</li>
                  <li>
                    Accept responsibility for all activities under your account
                  </li>
                  <li>
                    Notify us immediately of any unauthorized use of your
                    account
                  </li>
                </ul>
              </section>

              <section className='mb-8'>
                <h2 className='text-2xl font-semibold mb-4 text-gray-900 dark:text-white'>
                  4. Payment Terms
                </h2>
                <p className='text-gray-700 dark:text-gray-300 leading-relaxed mb-4'>
                  Our pricing plans are clearly outlined on our pricing page. By
                  subscribing to our services:
                </p>
                <ul className='list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4 mb-4'>
                  <li>
                    You agree to pay all fees associated with your chosen plan
                  </li>
                  <li>
                    Payments are processed monthly or annually as selected
                  </li>
                  <li>All fees are non-refundable except as required by law</li>
                  <li>
                    We reserve the right to change pricing with 30 days notice
                  </li>
                  <li>
                    Failure to pay may result in service suspension or
                    termination
                  </li>
                </ul>
                <p className='text-gray-700 dark:text-gray-300 leading-relaxed'>
                  We offer a 14-day free trial for new customers. No credit card
                  is required for the trial period.
                </p>
              </section>

              <section className='mb-8'>
                <h2 className='text-2xl font-semibold mb-4 text-gray-900 dark:text-white'>
                  5. Acceptable Use Policy
                </h2>
                <p className='text-gray-700 dark:text-gray-300 leading-relaxed mb-4'>
                  You agree not to use our services for any unlawful purposes or
                  to conduct any unlawful activity, including but not limited
                  to:
                </p>
                <ul className='list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4'>
                  <li>Violating any applicable laws or regulations</li>
                  <li>Infringing on intellectual property rights</li>
                  <li>Distributing malware, viruses, or harmful code</li>
                  <li>Engaging in fraudulent or deceptive practices</li>
                  <li>Harassing, threatening, or abusing others</li>
                  <li>Attempting to gain unauthorized access to our systems</li>
                </ul>
              </section>

              <section className='mb-8'>
                <h2 className='text-2xl font-semibold mb-4 text-gray-900 dark:text-white'>
                  6. Intellectual Property
                </h2>
                <p className='text-gray-700 dark:text-gray-300 leading-relaxed mb-4'>
                  The Apploom platform, including all content, features, and
                  functionality, is owned by us and is protected by copyright,
                  trademark, and other intellectual property laws.
                </p>
                <p className='text-gray-700 dark:text-gray-300 leading-relaxed'>
                  You retain ownership of your content and branding. We grant
                  you a license to use our platform to create and distribute
                  your mobile application.
                </p>
              </section>

              <section className='mb-8'>
                <h2 className='text-2xl font-semibold mb-4 text-gray-900 dark:text-white'>
                  7. Service Availability
                </h2>
                <p className='text-gray-700 dark:text-gray-300 leading-relaxed mb-4'>
                  We strive to maintain high service availability but cannot
                  guarantee uninterrupted service. We reserve the right to:
                </p>
                <ul className='list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4'>
                  <li>Perform scheduled maintenance with reasonable notice</li>
                  <li>Make emergency repairs when necessary</li>
                  <li>Temporarily suspend service for security reasons</li>
                  <li>Update or modify our platform and services</li>
                </ul>
              </section>

              <section className='mb-8'>
                <h2 className='text-2xl font-semibold mb-4 text-gray-900 dark:text-white'>
                  8. Limitation of Liability
                </h2>
                <p className='text-gray-700 dark:text-gray-300 leading-relaxed mb-4'>
                  To the maximum extent permitted by applicable law, Apploom
                  shall not be liable for any indirect, incidental, special,
                  consequential, or punitive damages, including without
                  limitation, loss of profits, data, use, goodwill, or other
                  intangible losses.
                </p>
                <p className='text-gray-700 dark:text-gray-300 leading-relaxed'>
                  Our total liability to you for any claim arising out of or
                  relating to these Terms or our services shall not exceed the
                  amount paid by you to us in the twelve (12) months preceding
                  the claim.
                </p>
              </section>

              <section className='mb-8'>
                <h2 className='text-2xl font-semibold mb-4 text-gray-900 dark:text-white'>
                  9. Termination
                </h2>
                <p className='text-gray-700 dark:text-gray-300 leading-relaxed mb-4'>
                  Either party may terminate this agreement at any time:
                </p>
                <ul className='list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4 mb-4'>
                  <li>
                    You may cancel your subscription at any time from your
                    account settings
                  </li>
                  <li>
                    We may terminate your account for violation of these Terms
                  </li>
                  <li>
                    We may discontinue our services with 30 days written notice
                  </li>
                </ul>
                <p className='text-gray-700 dark:text-gray-300 leading-relaxed'>
                  Upon termination, your access to the services will cease, and
                  we may delete your account and data after a reasonable period.
                </p>
              </section>

              <section className='mb-8'>
                <h2 className='text-2xl font-semibold mb-4 text-gray-900 dark:text-white'>
                  10. Changes to Terms
                </h2>
                <p className='text-gray-700 dark:text-gray-300 leading-relaxed'>
                  We reserve the right to modify these Terms at any time. We
                  will notify users of significant changes via email or through
                  our platform. Continued use of our services after changes
                  constitutes acceptance of the modified Terms.
                </p>
              </section>

              <section className='mb-8'>
                <h2 className='text-2xl font-semibold mb-4 text-gray-900 dark:text-white'>
                  11. Contact Information
                </h2>
                <p className='text-gray-700 dark:text-gray-300 leading-relaxed mb-4'>
                  If you have any questions about these Terms of Service, please
                  contact us:
                </p>
                <div className='bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4 text-gray-700 dark:text-gray-300'>
                  <p>
                    <strong>Email:</strong> legal@apploom.com
                  </p>
                  <p>
                    <strong>Address:</strong> 123 Innovation Drive, Tech Valley,
                    CA 94000
                  </p>
                  <p>
                    <strong>Phone:</strong> +1 (555) 123-4567
                  </p>
                </div>
              </section>
            </div>
          </CardBody>
        </Card>

        {/* Navigation */}
        <div className='text-center mt-8'>
          <Link
            href='/'
            className='inline-flex items-center text-blue-600 hover:text-blue-700 font-medium'
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
