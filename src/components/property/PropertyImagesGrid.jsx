'use client';
import React from 'react';
import { LayoutGrid } from '../ui/layout-grid';

export function PropertyImagesGrid({ images }) {
  const cards = images.map((image, index) => ({
    id: index + 1,
    className: index === 0 ? 'col-span-2 row-span-2' : 'col-span-1 row-span-1',
    thumbnail: image,
  }));

  return (
    <div className='h-[550px] w-full'>
      <LayoutGrid cards={cards} />
    </div>
  );
}
