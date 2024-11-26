'use client';
import React from 'react';
import Image from 'next/image';
import { StickyScroll } from './ui/sticky-scroll-reveal';

import Feature1Img from '@/images/how/how1.jpg';
import Feature2Img from '@/images/how/how2.jpg';
import Feature3Img from '@/images/how/how3.jpg';
import Feature4Img from '@/images/how/how4.jpg';

const contentDiv = ({ num, image }) => {
  return (
    <div className='relative flex h-full w-full items-center justify-center overflow-visible'>
      <span className='font-outline absolute left-0 top-0 -translate-x-1/3 -translate-y-1/3 text-7xl font-bold text-primary'>
        {num}
      </span>
      <div className='size-full overflow-hidden rounded-lg'>
        <Image src={image} className='h-full w-full object-cover' alt={`feature ${num}`} />
      </div>
    </div>
  );
};

const content = [
  {
    subtitle: 'Buy',
    title: 'Start investing with shares starting at 10 KWD',
    description:
      'Start investing in curated properties with shares starting at 10 KWD: All of our properties will first be accessible to our investors via initial offerings, the majority of which will have 50KWD investment minimums.',
    content: <>{contentDiv({ num: 1, image: Feature1Img })}</>,
  },
  {
    subtitle: 'Earn',
    title: 'Get paid without being a landlord',
    description:
      "You earn passive income without ever having to lift a finger. We'll send you monthly dividend payments for any property you own based on its rental income.",
    content: <>{contentDiv({ num: 2, image: Feature2Img })}</>,
  },
  {
    subtitle: 'Sell',
    title: 'Explore opportunities to sell your shares',
    description:
      'Prospera enhances liquidity for real estate assets. Similar to the stock market, you may have the opportunity to sell your shares on our secondary marketplace.',
    content: <>{contentDiv({ num: 3, image: Feature3Img })}</>,
  },
  {
    subtitle: 'Diversify',
    title: 'Change the way you invest',
    description:
      'Diversify your investment strategy like never before. Anchor your portfolio with the wealth-preserving stability of hard real estate assets like vacation, single family, and multifamily rentals.',
    content: <>{contentDiv({ num: 4, image: Feature4Img })}</>,
  },
];

export function HowItWorks() {
  return (
    <div className='relative flex w-full flex-col items-center justify-center gap-6 py-20 md:py-32'>
      <h2 className='text-center text-4xl font-semibold max-sm:px-6 md:mb-20'>How Prospera Works</h2>
      <StickyScroll content={content} />
      <div className='h-40' />
    </div>
  );
}
