import { Button } from '../ui/button';
import AmountCard from './AmountCard';
import { PropertyChart } from './PropertyChart';
import { getGreeting } from '@/lib/utils';

function InfoSection() {
  return (
    <>
      <div className='col-span-full row-span-1'>
        <div className='box'>
          <div className='flex size-full items-start justify-between gap-3 max-md:flex-col md:items-center'>
            <div className='flex flex-col'>
              <div className='text-2xl font-bold text-primary'>
                <span className='font-medium text-foreground'>{getGreeting()},</span> Meshal
              </div>
              <div className=''>
                <p className='text-sm text-muted-foreground'>
                  Here is what&apos;s happening with your investments today.
                </p>
              </div>
            </div>
            <div className='flex gap-3 md:px-4'>
              <Button size='sm' variant='ringHoverOutline'>
                Withdraw Funds
              </Button>
              <Button size='sm' variant='ringHover'>
                Add Funds
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className='col-span-3 row-span-2 max-md:col-span-full'>
        <AmountCard title='Portfolio Value' value='105,569' currency='KWD' change='1k' type='down' />
      </div>
      <div className='col-span-3 row-span-2 max-md:col-span-full'>
        <AmountCard title='Cash Balance' value='44,444' currency='KWD' change='1k' type='down' />
      </div>
      <div className='col-span-3 row-span-2 max-md:col-span-full'>
        <AmountCard title='Monthly Yield' value='2,098' currency='KWD' change='500' type='up' />
      </div>

      <div className='col-span-3 row-span-2 max-md:order-1 max-md:col-span-full'>
        <div className='box'>
          <div className='size-full overflow-visible'>
            <PropertyChart />
          </div>
        </div>
      </div>
    </>
  );
}
export default InfoSection;