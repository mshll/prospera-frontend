'use client';
import { Badge } from '@/components/ui/badge';
import { ContainerScroll } from '@/components/ui/container-scroll-animation';
import { FlipWords } from '@/components/ui/flip-words';
import DashboardImg from '@/images/hero.png';
import DashboardImgLight from '@/images/hero-light.png';
import { ChevronRightIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

function Hero() {
  const words = ['wealth', 'future', 'portfolio'];

  return (
    <div className='flex flex-col overflow-hidden'>
      <ContainerScroll
        titleComponent={
          <>
            <Link href='/signup' className='flex items-center justify-center'>
              <Badge
                className='group mb-2 rounded-full bg-primary px-5 text-xs tracking-wider text-primary-foreground'
                variant={'outline'}
              >
                Start investing today
                <ChevronRightIcon className='ml-2 inline-block size-3 transition-all duration-200 group-hover:ml-3' />
              </Badge>
            </Link>
            <h1 className='text-xl font-medium md:mb-1 md:text-5xl'>
              Build your
              <FlipWords words={words} className={'text-primary'} />
              <br />
              <span className='mt-1 text-4xl font-bold leading-none md:text-[6rem]'>with Prospera</span>
            </h1>
          </>
        }
      >
        <Image
          src={DashboardImgLight}
          alt='hero'
          height={720}
          width={1400}
          className='mx-auto hidden h-full rounded-2xl object-cover object-left-top dark:block'
          draggable={false}
        />
        <Image
          src={DashboardImg}
          alt='hero'
          height={720}
          width={1400}
          className='mx-auto h-full rounded-2xl object-cover object-left-top dark:hidden'
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
export default Hero;
