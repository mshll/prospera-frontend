import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

const LogoCarousel = ({ items, animate = true, shadows = false, length = 5, className }) => {
  return (
    <div className={clsx('relative w-full overflow-hidden py-10', className)}>
      <div className='pointer-events-none absolute bottom-0 left-0 z-10 h-full w-1/4 bg-gradient-to-l from-transparent to-background'></div>
      <div className='pointer-events-none absolute bottom-0 right-0 z-10 h-full w-1/4 bg-gradient-to-r from-transparent to-background'></div>
      <div
        className='flex items-center justify-center overflow-hidden'
        style={{
          maskImage: shadows
            ? 'linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 95%)'
            : undefined,
        }}
      >
        {Array.from({ length: length }).map((_, index) => (
          <div key={index} className={`flex shrink-0 items-center justify-center ${animate ? 'animate-carousel' : ''}`}>
            {items.map(({ text, className, image }) => (
              <p
                key={text}
                className={clsx(`ml-10 px-[0.8rem] text-4xl font-bold leading-[5rem] tracking-tight`, className)}
              >
                {image ? <Image src={image} alt={text} width={120} className='h-16 object-contain' /> : text}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoCarousel;
