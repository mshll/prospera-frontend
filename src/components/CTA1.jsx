import { Button } from '@/components/ui/button';

function CTA1() {
  return (
    <section className='w-full py-20'>
      <div className='container'>
        <div className='flex w-full flex-col gap-16 overflow-hidden rounded-xl border border-border bg-background p-8 md:rounded-2xl lg:flex-row lg:items-center lg:p-16'>
          <div className='flex-1'>
            <h3 className='mb-3 text-3xl font-semibold md:mb-4 md:text-5xl lg:mb-6'>Build the wealth you deserve</h3>
            <p className='text-muted-foreground lg:text-lg'>
              {/* Find investment opportunities tailored to your unique needs and goals. */}
              Start investing in less than 5 minutes and with as little as 10KWD
            </p>
          </div>
          <div className='flex shrink-0 flex-col gap-2 sm:flex-row'>
            <Button size='lg' variant='outline'>
              Learn More
            </Button>
            <Button size='lg'>Get Started</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
export default CTA1;
