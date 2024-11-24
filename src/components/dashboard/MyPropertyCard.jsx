import Image from 'next/image';
import AptOne from '@/app/assets/apt1.jpg';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';

function MyPropertyCard({ investment, property }) {
  return (
    <div className='flex gap-3 rounded-md border border-border bg-secondary p-4'>
      <Image src={AptOne} alt='Luxury Apartment' className='h-24 w-24 rounded-md object-cover' />
      <div className='flex flex-1 flex-wrap items-center justify-between gap-3'>
        <div className='flex flex-col justify-center gap-2'>
          <div className='text-lg font-semibold'>
            {property.name}
            <Badge variant='outline' className='ml-2 py-[0.05rem] text-[.5rem]'>
              {property.type}
            </Badge>
          </div>
          <div className='flex flex-wrap justify-between gap-4 pe-3'>
            <div className='flex flex-col justify-between'>
              <div className='text-[.6rem] uppercase text-muted-foreground'>Value (KWD)</div>
              <div className='justify-between font-medium text-primary'>
                {(property.value / investment.sharesOwned).toFixed(2)}
              </div>
            </div>
            <div className='border-l border-border'></div>
            <div className='flex flex-col justify-between'>
              <div className='text-[.6rem] uppercase text-muted-foreground'>Shares</div>
              <div className='font-medium text-primary'>{investment.sharesOwned}</div>
            </div>
            <div className='border-l border-border'></div>
            <div className='flex flex-col justify-between'>
              <div className='text-[.6rem] uppercase text-muted-foreground'>Mo Yld (KWD)</div>
              <div className='font-medium text-primary'>
                {(property.rentalIncome / investment.sharesOwned).toFixed(2)}
              </div>
            </div>
            <div className='border-l border-border'></div>
            <div className='flex flex-col justify-between'>
              <div className='text-[.6rem] uppercase text-muted-foreground'>Date Acquired</div>
              <div className='font-medium text-primary'>{investment.investmentDate.toLocaleDateString()}</div>
            </div>
          </div>
        </div>
        <div className='flex gap-3'>
          <Button size='sm' variant='ringHover'>
            Buy Shares
          </Button>
          <Button variant='ringHoverOutline' size='sm'>
            Sell Shares
          </Button>
        </div>
      </div>
    </div>
  );
}
export default MyPropertyCard;
