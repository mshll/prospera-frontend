import Image from 'next/image';
import { formatCurrency } from '@/lib/utils';

function LikedPropertyCard({ property }) {
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
          <div className='ml-[-5px] text-xs font-medium text-muted-foreground'>
            <span className='text-lg font-semibold text-primary'>
              {formatCurrency(property.currentValue / property.totalShares, { isCompact: false })} KWD{' '}
            </span>
            per share
          </div>
        </div>
      </div>
    </div>
  );
}
export default LikedPropertyCard;
