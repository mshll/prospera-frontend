'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Bookmark, Locate, MapPinHouseIcon, TargetIcon } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

import { MapPin } from 'lucide-react';
import { IconHeart, IconHeartFilled } from '@tabler/icons-react';
import { likeProperty, unlikeProperty } from '@/actions/properties';
import { toast } from 'sonner';
import { formatCurrency } from '@/lib/utils';

const ListingCard = ({
  searchTerm,
  onSearchChange,
  title,
  price,
  sharesAvailable,
  propertyPrice,
  handleHoverProperty,
  totalShares,
  location,
  pricePerShare,
  handleOpen,
  locationName,
  locationAddress,
  selectedProperty,
  name,
  imagesUrls,
  currentValue,
  availableShares,
  numberOfShares,
  id,
  property,
  handleViewSelectedLocation,
  profile,
}) => {
  const [isLiked, setIsLiked] = useState(profile.likedProperties.includes(id));

  const handleLike = (event) => {
    event.stopPropagation();
    const promise = isLiked ? unlikeProperty(id) : likeProperty(id);
    toast.promise(promise, {
      loading: 'Processing...',
      success: isLiked ? 'Property unliked.' : 'Property liked.',
      error: isLiked ? 'Failed to unlike property.' : 'Failed to like property.',
    });
    promise.then(() => setIsLiked(!isLiked));
  };

  const isSelected = selectedProperty?.id === id;

  const cardStyle = `my-4 cursor-pointer bg-card ${
    isSelected ? 'border-2 border-primary' : 'hover:border-primary border-2'
  }`;
  return (
    <>
      <Card className={cardStyle} onClick={handleOpen} onMouseEnter={() => handleHoverProperty(property)}>
        <div className='flex p-4'>
          <div className='flex-shrink-0'>
            <div>
              <Image
                src={imagesUrls[0]}
                width={440}
                height={440}
                alt={'img'}
                className='h-44 w-44 rounded-xl object-cover'
              />
            </div>
          </div>
          <div className='ml-4 flex-grow space-y-2'>
            <div className='flex justify-between'>
              <h1 className='text-base font-medium text-muted-foreground'>{locationName}</h1>
              {isLiked ? (
                <IconHeartFilled className='h-6 w-6 cursor-pointer text-destructive' onClick={handleLike} />
              ) : (
                <IconHeart className='h-6 w-6 cursor-pointer text-muted-foreground' onClick={handleLike} />
              )}
            </div>
            <div className='ml-[-5px] text-xs font-medium text-muted-foreground'>
              <span className='text-2xl font-semibold text-primary'>
                {formatCurrency(currentValue / totalShares, { isCompact: false })} KWD{' '}
              </span>
              per share
            </div>
            <div>
              <div className='flex justify-between'>
                <label className='mb-1 block text-xs font-medium text-muted-foreground sm:text-sm'>
                  Shares Available
                </label>
                <div className='mt-1 flex justify-between text-xs text-muted-foreground'>
                  {availableShares} / {totalShares}
                </div>
              </div>
              <Progress value={((totalShares - availableShares) / totalShares) * 100} />

              <div className='mt-4 items-center sm:flex sm:justify-between'>
                <p className='text-xs font-medium text-muted-foreground'>
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
