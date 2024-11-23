'use client';

import { useState } from 'react';
import Image from 'next/image';
import AptOne from '@/app/assets/apt1.jpg';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Bookmark, Heart } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

import { MapPin } from 'lucide-react';

const ListingCard = ({ title, price, sharesAvailable, totalShares, location, imageSrc, isNew, pricePerShare }) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <Card className='flex h-auto max-w-sm flex-col rounded-lg border shadow-md'>
      <CardHeader className='relative p-0'>
        <Image
          src={AptOne}
          alt='Modern Villa in Salmiya'
          className='h-36 w-full rounded-t-lg object-cover' // Reduced height
        />
        {isNew && (
          <Badge variant='cardBadge' className='absolute left-2 top-2 cursor-default bg-green-100 text-green-700'>
            new
          </Badge>
        )}

        <Heart
          className={`absolute right-2 top-2 cursor-pointer ${isLiked ? 'text-destructive' : 'text-primary-foreground'}`}
          size={24}
          stroke='currentColor'
          fill={isLiked ? 'currentColor' : 'none'}
          onClick={handleLike}
        />
      </CardHeader>

      <CardContent className='flex-grow space-y-2 p-3'>
        <div>
          <h3 className='text-lg font-medium text-secondary-foreground sm:text-lg'>{title}</h3>
        </div>
        <div className='mt-1'>
          <h4 className='text-lg font-semibold text-primary'>{price}</h4>
          <p className='text-sm text-muted-foreground'>Price per share: {pricePerShare} KWD</p>
        </div>
        <div>
          <label className='mb-1 block text-xs font-medium text-muted-foreground sm:text-sm'>Shares Available</label>
          <Progress value={sharesAvailable} />
          <div className='mt-1 flex justify-between text-xs text-muted-foreground'>
            <span>{sharesAvailable}</span>
            <span>{totalShares}</span>
          </div>
        </div>
        {/* Property Features */}
      </CardContent>

      <CardFooter className='p-3 pt-0'>
        {' '}
        {/* Reduced padding */}
        <div className='flex w-full flex-col items-start justify-between sm:flex-row sm:items-center'>
          <div className='mb-2 flex items-center gap-1 sm:mb-0'>
            <MapPin className='h-4 w-4' />
            <span className='text-xs text-muted-foreground sm:text-sm'>{location}</span>
          </div>
          <div>
            <Button size='sm' variant='outline' className='w-full sm:w-auto'>
              View Details
            </Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ListingCard;
