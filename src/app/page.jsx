import Hero from '@/components/Hero';

export default function Home() {
  return (
    <main className='w-full'>
      <div className='flex min-h-screen items-center justify-center text-foreground'>
        <Hero />
      </div>
    </main>
  );
}
