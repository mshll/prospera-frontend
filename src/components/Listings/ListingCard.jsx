'use client';

import { useState } from 'react';
import Image from 'next/image';
import AptOne from '@/app/assets/apt1.jpg';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Bookmark, Locate, MapPinHouseIcon, TargetIcon } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

import { MapPin } from 'lucide-react';
import { IconHeart, IconHeartFilled } from '@tabler/icons-react';
import { likeProperty, unlikeProperty } from '@/actions/properties';

const ListingCard = ({
  searchTerm,
  onSearchChange,
  title,
  price,
  sharesAvailable,
  propertyPrice,
  totalShares,
  location,
  images,
  pricePerShare,
  handleOpen,
  locationName,
  locationAddress,
  selectedProperty,
  name,
  currentValue,
  availableShares,
  numberOfShares,
  id,
  handleViewSelectedLocation,
  profile,
}) => {
  const [isLiked, setIsLiked] = useState(profile.likedProperties.includes(id));

  const handleLike = (event) => {
    isLiked ? unlikeProperty(id) : likeProperty(id);
    setIsLiked(!isLiked);
    event.stopPropagation();
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
              {/* <Image
                src={images[0]}
                width={440}
                height={440}
                alt={name}
                className='h-44 w-52 rounded-xl object-cover'
              /> */}
            </div>
          </div>
          <div className='ml-4 flex-grow space-y-2'>
            <div className='flex justify-between'>
              <h1 className='text-sm font-medium text-muted-foreground'>
                <span className='text-2xl font-semibold text-primary'>{currentValue / totalShares} KWD</span> /share
              </h1>
              {isLiked ? (
                <IconHeartFilled className='h-6 w-6 cursor-pointer text-destructive' onClick={handleLike} />
              ) : (
                <IconHeart className='h-6 w-6 cursor-pointer text-muted-foreground' onClick={handleLike} />
              )}
            </div>
            <p className='text-lg font-medium'>{locationName}</p>
            <div>
              <div className='flex justify-between'>
                <label className='mb-1 block text-xs font-medium text-muted-foreground sm:text-sm'>
                  Shares Available
                </label>
                <div className='mt-1 flex justify-between text-xs text-muted-foreground'>
                  {availableShares} / {totalShares}
                </div>
              </div>
              <Progress value={availableShares} />

              <div className='mt-4 items-center text-center sm:flex sm:justify-between'>
                <p className='text-sm font-medium text-muted-foreground'>
                  <MapPinHouseIcon className='inline h-4 w-4 text-muted-foreground' /> {locationAddress}
                </p>
                <Button variant='outline' size='sm' onClick={handleViewSelectedLocation}>
                  <Locate size={14} className='me-1' /> View On Map
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
