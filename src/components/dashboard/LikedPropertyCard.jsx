import Image from 'next/image';
import AptOne from '@/app/assets/apt1.jpg';
import { formatCurrency } from '@/lib/utils';

function LikedPropertyCard({ property }) {
  if (!property) {
    return null;
  }

  return (
    <div className='flex gap-3 rounded-md border border-border bg-card p-4'>
      <Image src={AptOne} alt='Luxury Apartment' className='h-24 w-24 rounded-md object-cover' />
      <div className='flex w-full flex-col flex-wrap justify-center gap-2'>
        <div className='text-lg font-semibold'>{property.locationName}</div>
        <div className='flex w-full flex-wrap justify-between gap-1 pe-3'>
          <div className='flex flex-col justify-between'>
            <div className='text-[.6rem] uppercase text-muted-foreground'>Value (KWD)</div>
            <div className='justify-between font-semibold text-primary'>a</div>
          </div>
          <div className='border-l border-border'></div>
          <div className='flex flex-col justify-between'>
            <div className='text-[.6rem] uppercase text-muted-foreground'>Shares</div>
            <div className='font-semibold text-primary'>b</div>
          </div>
          <div className='border-l border-border'></div>
          <div className='flex flex-col justify-between'>
            <div className='text-[.6rem] uppercase text-muted-foreground'>Monthly Yield (%)</div>
            <div className='font-semibold text-primary'>t</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LikedPropertyCard;
