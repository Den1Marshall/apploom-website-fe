'use client';

import { Card, CardBody } from '@heroui/react';
import Link from 'next/link';

export function PrivacyPage() {
  const lastUpdated = 'December 8, 2025';

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 py-12'>
      <div className='container mx-auto px-4 max-w-4xl'>
        {/* Header */}
        <div className='text-center mb-12'>
          <h1 className='text-4xl font-bold text-gray-900 dark:text-white mb-4'>
            Privacy Policy
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
                  1. Introduction
                </h2>
                <p className='text-gray-700 dark:text-gray-300 leading-relaxed mb-4'>
                  At Apploom, we are committed to protecting your privacy and
                  ensuring the security of your personal information. This
                  Privacy Policy explains how we collect, use, disclose, and
                  safeguard your information when you use our website and
                  services.
                </p>
                <p className='text-gray-700 dark:text-gray-300 leading-relaxed'>
                  By using our services, you consent to the data practices
                  described in this policy. If you do not agree with this
                  policy, please do not use our services.
                </p>
              </section>

              <section className='mb-8'>
                <h2 className='text-2xl font-semibold mb-4 text-gray-900 dark:text-white'>
                  2. Information We Collect
                </h2>

                <h3 className='text-xl font-medium mb-3 text-gray-900 dark:text-white'>
                  2.1 Personal Information
                </h3>
                <p className='text-gray-700 dark:text-gray-300 leading-relaxed mb-4'>
                  We may collect personal information that you voluntarily
                  provide to us, including:
                </p>
                <ul className='list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4 mb-6'>
                  <li>Name and contact information (email, phone number)</li>
                  <li>Company name and business information</li>
                  <li>Billing and payment information</li>
                  <li>Account credentials (username, password)</li>
                  <li>Communication preferences</li>
                  <li>Profile information and preferences</li>
                </ul>

                <h3 className='text-xl font-medium mb-3 text-gray-900 dark:text-white'>
                  2.2 Technical Information
                </h3>
                <p className='text-gray-700 dark:text-gray-300 leading-relaxed mb-4'>
                  We automatically collect certain technical information when
                  you use our services:
                </p>
                <ul className='list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4 mb-6'>
                  <li>IP addresses and device identifiers</li>
                  <li>Browser type and version</li>
                  <li>Operating system information</li>
                  <li>Usage patterns and analytics data</li>
                  <li>Cookies and tracking technologies</li>
                  <li>Log files and performance metrics</li>
                </ul>

                <h3 className='text-xl font-medium mb-3 text-gray-900 dark:text-white'>
                  2.3 App Content and Data
                </h3>
                <p className='text-gray-700 dark:text-gray-300 leading-relaxed'>
                  When you create apps using our platform, we may store and
                  process the content, images, and data you upload to customize
                  your applications.
                </p>
              </section>

              <section className='mb-8'>
                <h2 className='text-2xl font-semibold mb-4 text-gray-900 dark:text-white'>
                  3. How We Use Your Information
                </h2>
                <p className='text-gray-700 dark:text-gray-300 leading-relaxed mb-4'>
                  We use the information we collect for the following purposes:
                </p>
                <ul className='list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4'>
                  <li>Providing and maintaining our services</li>
                  <li>Processing payments and managing subscriptions</li>
                  <li>Creating and customizing your mobile applications</li>
                  <li>Providing customer support and technical assistance</li>
                  <li>Sending important service notifications and updates</li>
                  <li>Improving our services and developing new features</li>
                  <li>Analyzing usage patterns and performance metrics</li>
                  <li>Preventing fraud and ensuring security</li>
                  <li>Complying with legal obligations</li>
                </ul>
              </section>

              <section className='mb-8'>
                <h2 className='text-2xl font-semibold mb-4 text-gray-900 dark:text-white'>
                  4. Information Sharing and Disclosure
                </h2>
                <p className='text-gray-700 dark:text-gray-300 leading-relaxed mb-4'>
                  We do not sell, trade, or rent your personal information to
                  third parties. We may share your information in the following
                  circumstances:
                </p>

                <h3 className='text-xl font-medium mb-3 text-gray-900 dark:text-white'>
                  4.1 Service Providers
                </h3>
                <p className='text-gray-700 dark:text-gray-300 leading-relaxed mb-4'>
                  We may share information with trusted third-party service
                  providers who assist us in:
                </p>
                <ul className='list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4 mb-6'>
                  <li>Payment processing and billing</li>
                  <li>Cloud hosting and data storage</li>
                  <li>Email delivery and communication</li>
                  <li>Analytics and performance monitoring</li>
                  <li>Customer support services</li>
                </ul>

                <h3 className='text-xl font-medium mb-3 text-gray-900 dark:text-white'>
                  4.2 Legal Requirements
                </h3>
                <p className='text-gray-700 dark:text-gray-300 leading-relaxed mb-6'>
                  We may disclose your information if required by law, legal
                  process, or government request, or to protect our rights,
                  property, or safety.
                </p>

                <h3 className='text-xl font-medium mb-3 text-gray-900 dark:text-white'>
                  4.3 Business Transfers
                </h3>
                <p className='text-gray-700 dark:text-gray-300 leading-relaxed'>
                  In the event of a merger, acquisition, or sale of assets, your
                  information may be transferred as part of the business
                  transaction.
                </p>
              </section>

              <section className='mb-8'>
                <h2 className='text-2xl font-semibold mb-4 text-gray-900 dark:text-white'>
                  5. Data Security
                </h2>
                <p className='text-gray-700 dark:text-gray-300 leading-relaxed mb-4'>
                  We implement appropriate technical and organizational security
                  measures to protect your information:
                </p>
                <ul className='list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4 mb-4'>
                  <li>Encryption of data in transit and at rest</li>
                  <li>Regular security audits and assessments</li>
                  <li>Access controls and authentication systems</li>
                  <li>Employee training on data protection</li>
                  <li>Incident response and monitoring procedures</li>
                </ul>
                <p className='text-gray-700 dark:text-gray-300 leading-relaxed'>
                  While we strive to protect your information, no method of
                  transmission over the internet or electronic storage is 100%
                  secure. We cannot guarantee absolute security.
                </p>
              </section>

              <section className='mb-8'>
                <h2 className='text-2xl font-semibold mb-4 text-gray-900 dark:text-white'>
                  6. Data Retention
                </h2>
                <p className='text-gray-700 dark:text-gray-300 leading-relaxed mb-4'>
                  We retain your information for as long as necessary to provide
                  our services and fulfill the purposes outlined in this policy:
                </p>
                <ul className='list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4 mb-4'>
                  <li>
                    Account information: For the duration of your account plus
                    30 days
                  </li>
                  <li>Billing records: 7 years for tax and legal compliance</li>
                  <li>
                    App content: Until you delete it or terminate your account
                  </li>
                  <li>Analytics data: 2 years for service improvement</li>
                  <li>Support communications: 3 years for reference</li>
                </ul>
                <p className='text-gray-700 dark:text-gray-300 leading-relaxed'>
                  You can request deletion of your personal information at any
                  time, subject to our legal obligations.
                </p>
              </section>

              <section className='mb-8'>
                <h2 className='text-2xl font-semibold mb-4 text-gray-900 dark:text-white'>
                  7. Your Rights and Choices
                </h2>
                <p className='text-gray-700 dark:text-gray-300 leading-relaxed mb-4'>
                  Depending on your location, you may have the following rights
                  regarding your personal information:
                </p>
                <ul className='list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4 mb-4'>
                  <li>
                    <strong>Access:</strong> Request a copy of your personal
                    information
                  </li>
                  <li>
                    <strong>Correction:</strong> Update or correct inaccurate
                    information
                  </li>
                  <li>
                    <strong>Deletion:</strong> Request deletion of your personal
                    information
                  </li>
                  <li>
                    <strong>Portability:</strong> Receive your data in a
                    portable format
                  </li>
                  <li>
                    <strong>Restriction:</strong> Limit how we process your
                    information
                  </li>
                  <li>
                    <strong>Objection:</strong> Object to certain types of
                    processing
                  </li>
                </ul>
                <p className='text-gray-700 dark:text-gray-300 leading-relaxed'>
                  To exercise these rights, please contact us using the
                  information provided below.
                </p>
              </section>

              <section className='mb-8'>
                <h2 className='text-2xl font-semibold mb-4 text-gray-900 dark:text-white'>
                  8. Cookies and Tracking Technologies
                </h2>
                <p className='text-gray-700 dark:text-gray-300 leading-relaxed mb-4'>
                  We use cookies and similar tracking technologies to enhance
                  your experience:
                </p>
                <ul className='list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4 mb-4'>
                  <li>
                    <strong>Essential cookies:</strong> Required for basic
                    website functionality
                  </li>
                  <li>
                    <strong>Analytics cookies:</strong> Help us understand how
                    you use our services
                  </li>
                  <li>
                    <strong>Performance cookies:</strong> Improve website speed
                    and performance
                  </li>
                  <li>
                    <strong>Functional cookies:</strong> Remember your
                    preferences and settings
                  </li>
                </ul>
                <p className='text-gray-700 dark:text-gray-300 leading-relaxed'>
                  You can control cookies through your browser settings, but
                  disabling certain cookies may affect functionality.
                </p>
              </section>

              <section className='mb-8'>
                <h2 className='text-2xl font-semibold mb-4 text-gray-900 dark:text-white'>
                  9. International Data Transfers
                </h2>
                <p className='text-gray-700 dark:text-gray-300 leading-relaxed mb-4'>
                  Your information may be transferred to and processed in
                  countries other than your country of residence. We ensure that
                  such transfers comply with applicable data protection laws and
                  implement appropriate safeguards.
                </p>
                <p className='text-gray-700 dark:text-gray-300 leading-relaxed'>
                  We use standard contractual clauses and other approved
                  transfer mechanisms to protect your information during
                  international transfers.
                </p>
              </section>

              <section className='mb-8'>
                <h2 className='text-2xl font-semibold mb-4 text-gray-900 dark:text-white'>
                  10. Children&apos;s Privacy
                </h2>
                <p className='text-gray-700 dark:text-gray-300 leading-relaxed mb-4'>
                  Our services are not intended for children under the age of
                  13. We do not knowingly collect personal information from
                  children under 13. If we become aware that we have collected
                  personal information from a child under 13, we will take steps
                  to delete such information.
                </p>
                <p className='text-gray-700 dark:text-gray-300 leading-relaxed'>
                  If you are a parent or guardian and believe your child has
                  provided us with personal information, please contact us
                  immediately.
                </p>
              </section>

              <section className='mb-8'>
                <h2 className='text-2xl font-semibold mb-4 text-gray-900 dark:text-white'>
                  11. Changes to This Privacy Policy
                </h2>
                <p className='text-gray-700 dark:text-gray-300 leading-relaxed mb-4'>
                  We may update this Privacy Policy from time to time to reflect
                  changes in our practices or applicable laws. We will notify
                  you of any material changes by:
                </p>
                <ul className='list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4 mb-4'>
                  <li>Posting the updated policy on our website</li>
                  <li>Sending an email notification to registered users</li>
                  <li>Displaying a prominent notice on our platform</li>
                </ul>
                <p className='text-gray-700 dark:text-gray-300 leading-relaxed'>
                  Your continued use of our services after any changes
                  constitutes acceptance of the updated Privacy Policy.
                </p>
              </section>

              <section className='mb-8'>
                <h2 className='text-2xl font-semibold mb-4 text-gray-900 dark:text-white'>
                  12. Contact Us
                </h2>
                <p className='text-gray-700 dark:text-gray-300 leading-relaxed mb-4'>
                  If you have any questions, concerns, or requests regarding
                  this Privacy Policy or our privacy practices, please contact
                  us:
                </p>
                <div className='bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4 text-gray-700 dark:text-gray-300'>
                  <p>
                    <strong>Privacy Officer</strong>
                  </p>
                  <p>
                    <strong>Email:</strong> privacy@apploom.com
                  </p>
                  <p>
                    <strong>Address:</strong> 123 Innovation Drive, Tech Valley,
                    CA 94000
                  </p>
                  <p>
                    <strong>Phone:</strong> +1 (555) 123-4567
                  </p>
                </div>
                <p className='text-gray-700 dark:text-gray-300 leading-relaxed mt-4'>
                  We will respond to your inquiries within 30 days or as
                  required by applicable law.
                </p>
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
