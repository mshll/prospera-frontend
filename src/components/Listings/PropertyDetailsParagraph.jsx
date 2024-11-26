'use client';

import { useState } from 'react';
import { Button } from '../ui/button';

const PropertyDetailsParagraph = ({ text, maxLength = 400 }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  if (text.length <= maxLength) {
    return <p>{text}</p>;
  }

  return (
    <div className='mt-6'>
      <h1 className='mb-2 font-bold'>Properties Details</h1>
      <p className='text-sm font-medium text-muted-foreground'>
        {isExpanded ? text : text.slice(0, maxLength) + '...'}{' '}
        <button className='text inline-block text-primary hover:underline' onClick={toggleExpand}>
          {isExpanded ? 'Read Less' : 'Read More'}
        </button>
      </p>
    </div>
  );
};

export default PropertyDetailsParagraph;
