import Image from 'next/image';
import { formatCurrency } from '@/lib/utils';

function PropertyCard({ investment }) {
  const property = investment.property;

  if (!property) {
    return null;
  }

  return (
    <div className='flex gap-3 rounded-md border border-border bg-card p-4'>
      <Image
        src={property.imagesUrls[0]}
        alt='property'
        width={500}
        height={500}
        className='aspect-square h-24 w-24 rounded-lg object-cover'
      />
      <div className='flex w-full flex-col flex-wrap justify-center gap-2'>
        <div className='text-lg font-semibold'>{property.locationName}</div>
        <div className='flex w-full flex-wrap justify-between gap-1 pe-3'>
          <div className='flex flex-col justify-between'>
            <div className='text-[.6rem] uppercase text-muted-foreground'>Value (KWD)</div>
            <div className='justify-between font-semibold text-primary'>
              {formatCurrency((investment.sharesOwned / property.totalShares) * property.currentValue)}
            </div>
          </div>
          <div className='border-l border-border'></div>
          <div className='flex flex-col justify-between'>
            <div className='text-[.6rem] uppercase text-muted-foreground'>Shares</div>
            <div className='font-semibold text-primary'>{investment.sharesOwned}</div>
          </div>
          <div className='border-l border-border'></div>
          <div className='flex flex-col justify-between'>
            <div className='text-[.6rem] uppercase text-muted-foreground'>Monthly Yield (%)</div>
            <div className='font-semibold text-primary'>
              {(
                ((property.rentalIncome * (investment.sharesOwned / property.totalShares)) /
                  (property.currentValue * (investment.sharesOwned / property.totalShares))) *
                100
              ).toFixed(2)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PropertyCard;
