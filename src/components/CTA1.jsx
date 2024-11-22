import { Button } from '@/components/ui/button';
import { ChevronRightIcon } from 'lucide-react';

function CTA1() {
  return (
    <section className='w-full pb-32'>
      <div className='container'>
        <div className='flex w-full flex-col gap-16 overflow-hidden rounded-lg border border-border bg-primary p-8 md:rounded-2xl lg:flex-row lg:items-center lg:p-16'>
          <div className='flex-1 text-background'>
            <h3 className='mb-3 text-3xl font-semibold md:mb-4 md:text-5xl lg:mb-6'>Build the wealth you deserve</h3>
            <p className='lg:text-lg'>
              Find investment opportunities tailored to your unique needs and goals.
              {/* Start investing in less than 5 minutes and with as little as 10KWD */}
            </p>
          </div>
          <div className='flex shrink-0 flex-col gap-2 sm:flex-row'>
            <Button size='lg' variant='outline' className='px-20 py-6'>
              Start Investing
              <ChevronRightIcon />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
export default CTA1;
