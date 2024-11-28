import Image from 'next/image';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { calculateMonthlyIncome, formatCurrency } from '@/lib/utils';
import SellSharesModal from '../property/SellSharesModal';
import BuySharesModal from '../property/BuySharesModal';

function MyPropertyCard({ investment, property, profile }) {
  if (!property) {
    return null;
  }
  return (
    <div className='flex gap-3 rounded-md border border-border bg-card p-4'>
      <Image src={property.imagesUrls[0]} alt='property' className='h-24 w-24 rounded-md object-cover' />
      <div className='flex flex-1 flex-wrap items-center justify-between gap-3'>
        <div className='flex flex-col justify-center gap-2'>
          <div className='flex items-center gap-3 font-semibold'>
            <div className='text-lg'>{property.locationName}</div>
            <Badge
              className='h-4 rounded-full bg-border py-1 text-[.5rem] tracking-wider text-primary'
              variant={'outline'}
            >
              {property.typeOfProperty}
            </Badge>
          </div>
          <div className='flex flex-wrap justify-between gap-4 pe-3'>
            <div className='flex flex-col justify-between'>
              <div className='text-[.6rem] uppercase text-muted-foreground'>Value (KWD)</div>
              <div className='justify-between font-medium text-primary'>
                {formatCurrency((investment.sharesOwned / property.totalShares) * property.currentValue)}
              </div>
            </div>
            <div className='border-l border-border'></div>
            <div className='flex flex-col justify-between'>
              <div className='text-[.6rem] uppercase text-muted-foreground'>Shares</div>
              <div className='font-medium text-primary'>{investment.sharesOwned}</div>
            </div>
            <div className='border-l border-border'></div>
            <div className='flex flex-col justify-between'>
              <div className='text-[.6rem] uppercase text-muted-foreground'>Monthly Yield (%)</div>
              <div className='font-medium text-primary'>
                {calculateMonthlyIncome({
                  rentalIncome: property.rentalIncome,
                  sharesOwned: investment.sharesOwned,
                  totalShares: property.totalShares,
                  currentValue: property.currentValue,
                })}
              </div>
            </div>
            {/* <div className='border-l border-border'></div> */}
            {/* <div className='flex flex-col justify-between'>
              <div className='text-[.6rem] uppercase text-muted-foreground'>Date Acquired</div>
              <div className='font-medium text-primary'>{investment.date.toLocaleDateString()}</div>
            </div> */}
          </div>
        </div>
        <div className='flex gap-3'>
          <BuySharesModal property={property} userBalance={profile.balance}>
            <Button size='sm' variant='ringHover'>
              Buy Shares
            </Button>
          </BuySharesModal>
          <SellSharesModal property={property} userBalance={profile.balance} sharesOwned={investment.sharesOwned}>
            <Button variant='ringHoverOutline' size='sm'>
              Sell Shares
            </Button>
          </SellSharesModal>
        </div>
      </div>
    </div>
  );
}
export default MyPropertyCard;
