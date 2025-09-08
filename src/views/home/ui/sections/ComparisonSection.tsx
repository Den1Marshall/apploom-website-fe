import { FC } from 'react';

export const ComparisonSection: FC = () => {
  const comparisonData = [
    ['Launch Time', '24 hours', '6-12 months', '2-4 weeks'],
    ['Cost', '$199/mo', '$150k+', '$500-2k/mo'],
    ['White Label', '✅ 100%', '✅ Custom', '❌ Limited'],
    ['App Store Ready', '✅ Instant', '✅ Manual', '⚠️ Basic'],
    ['Real-time Updates', '✅ Live', '❌ App Store', '⚠️ Limited'],
    ['Custom Features', '✅ Unlimited', '✅ Full Custom', '❌ Template Only'],
    ['Support', '24/7 Expert', 'Project Based', 'Email Only'],
  ];

  return (
    <section className='relative bg-white dark:bg-black z-20 py-32'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-20'>
          <div className='inline-block px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-full text-sm font-medium mb-6'>
            Apploom vs Competition
          </div>
          <h2 className='text-4xl lg:text-6xl font-bold mb-6 tracking-tight'>
            Why choose
            <span className='block bg-gradient-to-r from-orange-600 via-blue-600 to-purple-600 bg-clip-text text-transparent'>
              Apploom?
            </span>
          </h2>
        </div>

        <div className='overflow-x-auto max-w-6xl mx-auto'>
          <div className='bg-gray-50 dark:bg-gray-900 rounded-3xl overflow-hidden border border-gray-200/50 dark:border-gray-800/50'>
            <table className='w-full'>
              <thead className='bg-blue-600 text-white'>
                <tr>
                  <th className='p-6 text-left font-semibold'>Feature</th>
                  <th className='p-6 text-center font-semibold'>Apploom</th>
                  <th className='p-6 text-center font-semibold'>
                    Traditional Dev
                  </th>
                  <th className='p-6 text-center font-semibold'>
                    Other Platforms
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr
                    key={index}
                    className={
                      index % 2 === 0
                        ? 'bg-white dark:bg-gray-800'
                        : 'bg-gray-50 dark:bg-gray-900'
                    }
                  >
                    <td className='p-6 font-semibold text-gray-900 dark:text-gray-100'>
                      {row[0]}
                    </td>
                    <td className='p-6 text-center'>
                      <span className='text-green-600 dark:text-green-400 font-semibold'>
                        {row[1]}
                      </span>
                    </td>
                    <td className='p-6 text-center text-gray-600 dark:text-gray-400'>
                      {row[2]}
                    </td>
                    <td className='p-6 text-center text-gray-600 dark:text-gray-400'>
                      {row[3]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
