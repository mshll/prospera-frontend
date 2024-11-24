'use client';

import { useState } from 'react';
import Image from 'next/image';
import AptOne from '@/app/assets/apt1.jpg';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Bookmark, Heart, Locate, MapPinHouseIcon, TargetIcon } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

import { MapPin } from 'lucide-react';

const ListingCard = ({
  title,
  price,
  sharesAvailable,
  totalShares,
  location,
  images,
  isNew,
  pricePerShare,
  handleClose,
  handleOpen,
  handleViewSelectedLocation,
}) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = (event) => {
    event.stopPropagation();

    setIsLiked(!isLiked);
  };

  return (
    <>
      <Card className='my-4 cursor-pointer bg-primary-foreground hover:border-primary' onClick={handleOpen}>
        <div className='flex p-4'>
          <div className='flex-shrink-0'>
            <div>
              <Image
                src={images[0]}
                width={440}
                height={440}
                alt={title}
                className='h-44 w-52 rounded-xl object-cover'
              />
            </div>
          </div>
          <div className='ml-4 flex-grow space-y-2'>
            <div className='flex justify-between'>
              <h1 className='text-sm font-medium text-muted-foreground'>
                <span className='text-2xl font-semibold text-primary'>{pricePerShare} KWD</span> /share
              </h1>
              <Heart
                className={`h-6 w-6 cursor-pointer ${isLiked ? 'text-destructive' : 'text-muted-foreground'}`}
                onClick={handleLike}
              />
            </div>
            <p className='text-lg font-semibold'>{title}</p>
            <div>
              <label className='mb-1 block text-xs font-medium text-muted-foreground sm:text-sm'>
                Shares Available
              </label>
              <Progress value={sharesAvailable} />
              <div className='mt-1 flex justify-between text-xs text-muted-foreground'>
                <span>{sharesAvailable}</span>
                <span>{totalShares}</span>
              </div>
              <div className='mt-4 text-center sm:flex sm:justify-between'>
                <p className='text-sm font-medium text-muted-foreground'>
                  <MapPinHouseIcon className='inline h-4 w-4 text-secondary-foreground' /> {location}
                </p>
                <Button variant='outline' size='sm' onClick={handleViewSelectedLocation}>
                  <Locate /> View On Map
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Card>
      {/* <Card className='flex h-auto max-w-sm flex-col rounded-lg border shadow-md'>
        <CardHeader className='relative p-0'>
          <Image
            src={AptOne}
            alt='Modern Villa in Salmiya'
            className='h-36 w-full rounded-t-lg object-cover' 
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
        </CardContent>

        <CardFooter className='p-3 pt-0'>
   
          <div className='flex w-full flex-col items-start justify-between sm:flex-row sm:items-center'>
            <div className='mb-2 flex items-center gap-1 sm:mb-0'>
              <MapPin className='h-4 w-4' />
              <span className='text-xs text-muted-foreground sm:text-sm'>{location}</span>
            </div>
            <div>
              <Button onClick={handleOpen} size='sm' variant='outline' className='w-full sm:w-auto'>
                View Details
              </Button>
            </div>
          </div>
        </CardFooter>
      </Card> */}
    </>
  );
};

export default ListingCard;
