import { Card, CardContent, CardDescription, CardFooter, CardTitle } from '@/components/ui/card';
import { Bath, BedSingle, Maximize2 } from 'lucide-react';
import Image from 'next/image';

const ListingCard = ({ image, title, location, price, beds, baths, area }) => (
  <Card className='w-[350px] rounded-lg shadow-md'>
    <Image src={image} alt={title} className='h-48 w-full rounded-t-lg object-cover' />
    <CardContent>
      <CardTitle className='mt-2 text-lg font-bold'>{title}</CardTitle>
      <CardDescription>
        <p className='text-sm text-muted-foreground'>{location}</p>
        <div className='mt-2 flex items-center justify-between'>
          <p className='text-2xl font-bold text-foreground'>
            {price} <span className='text-sm text-muted-foreground'>/month</span>
          </p>
        </div>
      </CardDescription>
    </CardContent>
    <CardFooter className='mt-2'>
      <div className='flex space-x-7 text-sm'>
        <div className='flex items-center'>
          <BedSingle className='h-5 w-5' />
          <p className='ml-2 text-muted-foreground'>{beds} Beds</p>
        </div>
        <div className='flex items-center'>
          <Bath className='h-5 w-5' />
          <p className='ml-2 text-muted-foreground'>{baths} Baths</p>
        </div>
        <div className='flex items-center'>
          <Maximize2 className='h-5 w-5' />
          <p className='ml-2 text-muted-foreground'>{area} sqft</p>
        </div>
      </div>
    </CardFooter>
  </Card>
);

export default ListingCard;
