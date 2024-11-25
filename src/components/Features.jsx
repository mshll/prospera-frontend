'use client';
import React from 'react';
import Image from 'next/image';
import { StickyScroll } from './ui/sticky-scroll-reveal';

const content = [
  {
    subtitle: 'Buy',
    title: 'Start investing with shares starting at 10 KWD',
    description:
      'Start investing in curated properties with shares starting at 10 KWD: All of our properties will first be accessible to our investors via initial offerings, the majority of which will have 50KWD investment minimums.',
    content: (
      <div className='flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white'>
        Collaborative Editing
      </div>
    ),
  },
  {
    subtitle: 'Earn',
    title: 'Get paid without being a landlord',
    description:
      "You earn passive income without ever having to lift a finger. We'll send you monthly dividend payments for any property you own based on its rental income.",
    content: (
      <div className='flex h-full w-full items-center justify-center text-white'>
        <Image
          src='/linear.webp'
          width={300}
          height={300}
          className='h-full w-full object-cover'
          alt='linear board demo'
        />
      </div>
    ),
  },
  {
    subtitle: 'Sell',
    title: 'Explore opportunities to sell your shares',
    description:
      'Prospera enhances liquidity for real estate assets. Similar to the stock market, you may have the opportunity to sell your shares on our secondary marketplace.',
    content: (
      <div className='flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white'>
        Version control
      </div>
    ),
  },
  {
    subtitle: 'Diversify',
    title: 'Change the way you invest',
    description:
      'Diversify your investment strategy like never before. Anchor your portfolio with the wealth-preserving stability of hard real estate assets like vacation, single family, and multifamily rentals.',
    content: (
      <div className='flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white'>
        Running out of content
      </div>
    ),
  },
];

export function Features() {
  return (
    <div className='relative flex w-full flex-col items-center justify-center gap-6 py-20 md:py-32'>
      <h2 className='text-center text-4xl font-semibold max-sm:px-6 md:mb-20'>How Prospera Works</h2>
      <StickyScroll content={content} />
      <div className='h-40' />
    </div>
  );
}
