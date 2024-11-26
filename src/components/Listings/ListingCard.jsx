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
  searchTerm,
  onSearchChange,
  title,
  price,
  sharesAvailable,
  totalShares,
  location,
  images,
  pricePerShare,
  handleOpen,
  selectedProperty,
  id,
  handleViewSelectedLocation,
}) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = (event) => {
    event.stopPropagation();

    setIsLiked(!isLiked);
  };

  const isSelected = selectedProperty?.id === id;

  const cardStyle = `my-4 cursor-pointer bg-card ${
    isSelected ? 'border-2 border-primary' : 'hover:border-primary border-2'
  }`;
  return (
    <>
      <Card className={cardStyle} onClick={handleOpen}>
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
            <p className='text-lg font-medium'>{title}</p>
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
    </>
  );
};

export default ListingCard;
