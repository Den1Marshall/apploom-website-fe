import { FC } from 'react';

export type PhoneProps = {
  type: 'ios' | 'android';
  videoSrc: string;
  className?: string;
};

export const Phone: FC<PhoneProps> = ({ type, videoSrc, className = '' }) => {
  const isIos = type === 'ios';

  return (
    <div className={`relative ${className}`}>
      {/* iPhone (правый) */}
      {isIos && (
        <div className='relative mx-auto w-[280px] h-[580px] bg-[#1a1a1a] rounded-[45px] border-[3px] border-[#2a2a2a] shadow-2xl'>
          {/* Dynamic Island */}
          <div className='absolute top-[12px] left-1/2 transform -translate-x-1/2 w-[100px] h-[28px] bg-black rounded-full z-20'></div>

          {/* Screen - реалистичные отступы */}
          <div className='absolute top-[8px] left-[8px] right-[8px] bottom-[8px] bg-[#0a0a0a] rounded-[37px] overflow-hidden'>
            <video
              className='w-full h-full object-cover'
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={videoSrc} type='video/mp4' />
            </video>
          </div>

          {/* Боковые кнопки - тонкие и точные */}
          <div className='absolute left-[-3px] top-[110px] w-[3px] h-[8px] bg-[#2a2a2a] rounded-l-md'></div>
          <div className='absolute left-[-3px] top-[140px] w-[3px] h-[32px] bg-[#2a2a2a] rounded-l-md'></div>
          <div className='absolute left-[-3px] top-[180px] w-[3px] h-[32px] bg-[#2a2a2a] rounded-l-md'></div>

          {/* Power button */}
          <div className='absolute right-[-3px] top-[140px] w-[3px] h-[55px] bg-[#2a2a2a] rounded-r-md'></div>
        </div>
      )}

      {/* Android Galaxy (левый) */}
      {!isIos && (
        <div className='relative mx-auto w-[280px] h-[580px] bg-[#1a1a1a] rounded-[25px] border-[2px] border-[#333] shadow-2xl'>
          {/* Front camera hole - маленький как на эталоне */}
          <div className='absolute top-[24px] left-1/2 transform -translate-x-1/2 w-[8px] h-[8px] bg-black rounded-full z-20'></div>

          {/* Screen - реалистичные отступы */}
          <div className='absolute top-[6px] left-[6px] right-[6px] bottom-[6px] bg-[#0a0a0a] rounded-[19px] overflow-hidden'>
            <video
              className='w-full h-full object-cover'
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={videoSrc} type='video/mp4' />
            </video>
          </div>

          {/* Боковые кнопки - тонкие */}
          <div className='absolute left-[-2px] top-[120px] w-[2px] h-[40px] bg-[#333] rounded-l-sm'></div>
          <div className='absolute left-[-2px] top-[170px] w-[2px] h-[40px] bg-[#333] rounded-l-sm'></div>

          {/* Power button */}
          <div className='absolute right-[-2px] top-[140px] w-[2px] h-[50px] bg-[#333] rounded-r-sm'></div>
        </div>
      )}
    </div>
  );
};
