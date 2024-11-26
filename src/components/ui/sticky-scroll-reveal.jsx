'use client';
import React, { useEffect, useRef, useState } from 'react';
import { useMotionValueEvent, useScroll } from 'framer-motion';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export const StickyScroll = ({ content, contentClassName }) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 30%', 'end 30%'],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce((acc, breakpoint, index) => {
      const distance = Math.abs(latest - breakpoint);
      if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
        return index;
      }
      return acc;
    }, 0);
    setActiveCard(closestBreakpointIndex);
  });

  return (
    <motion.div
      animate={
        {
          // backgroundColor: backgroundColors[activeCard % backgroundColors.length],
        }
      }
      className='relative flex justify-center gap-x-10 rounded-md p-10'
      ref={ref}
    >
      <div
        className={cn(
          'sticky top-[30%] hidden h-[30rem] w-[25rem] overflow-visible rounded-xl bg-background lg:block',
          contentClassName,
        )}
      >
        {content[activeCard].content ?? null}
      </div>

      <div className='div relative flex items-start px-4'>
        <div className='max-w-2xl'>
          {content.map((item, index) => (
            <div key={item.title + index} className='my-20 md:my-32'>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.1,
                }}
                className='mb-4 text-xl font-medium text-primary'
              >
                {item.subtitle}
              </motion.p>
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.1,
                }}
                className='text-2xl font-semibold text-foreground'
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.1,
                }}
                className='mt-6 max-w-md text-lg text-muted-foreground'
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          {/* <div className='h-40' /> */}
        </div>
      </div>
    </motion.div>
  );
};
