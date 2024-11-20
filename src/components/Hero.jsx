'use client';
import { Badge } from '@/components/ui/badge';
import { ContainerScroll } from '@/components/ui/container-scroll-animation';
import { FlipWords } from '@/components/ui/flip-words';
import DashboardImg from '@/images/hero-dashboard.png';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

function Hero() {
  const words = ['wealth', 'future', 'portfolio'];

  return (
    <div className='flex flex-col overflow-hidden'>
      <ContainerScroll
        titleComponent={
          <>
            <Link href='/signup'>
              <Badge className='group mb-2 rounded-full bg-primary text-xs text-primary-foreground' variant={'outline'}>
                Start investing today
                <ArrowUpRight className='ml-1 inline-block size-4 duration-200 group-hover:rotate-45' />
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
          src={DashboardImg}
          alt='hero'
          height={720}
          width={1400}
          className='mx-auto h-full rounded-2xl object-cover object-left-top'
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
export default Hero;
