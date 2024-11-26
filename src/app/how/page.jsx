import CTA1 from '@/components/CTA1';
import { HowItWorks } from '@/components/HowItWorks';
import Footer from '@/components/Footer';
import { GridBackground } from '@/components/GridBackground';
import Hero from '@/components/Hero';
import LandingCarousel from '@/components/LandingCarousel';
import Navbar from '@/components/NavBar';

export default function HowPage() {
  return (
    <>
      <main className='relative w-full'>
        <GridBackground />
        <Navbar />
        <div className='flex min-h-screen flex-col items-center justify-center pt-32 text-foreground'>
          <HowItWorks />
        </div>
        <Footer />
      </main>
    </>
  );
}
