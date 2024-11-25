import CTA1 from '@/components/CTA1';
import { Features } from '@/components/Features';
import Footer from '@/components/Footer';
import { GridBackground } from '@/components/GridBackground';
import Hero from '@/components/Hero';
import LandingCarousel from '@/components/LandingCarousel';
import Navbar from '@/components/NavBar';

export default function Home() {
  return (
    <>
      <main className='relative w-full'>
        <GridBackground />
        <Navbar />
        <div className='flex min-h-screen flex-col items-center justify-center text-foreground'>
          <Hero />
          <LandingCarousel />
          <CTA1 />
          <Features />
        </div>
        <Footer />
      </main>
    </>
  );
}
