'use client';
import { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import PropertyCard from './PropertyCard';
import MyPropertyCard from './MyPropertyCard';
import { getPropertyTypes } from '@/lib/utils';

function MyPropertiesList({ myInvestments, profile, properties }) {
  const investmentTypes = getPropertyTypes(properties);
  const [selectedType, setSelectedType] = useState('All');

  const investments = myInvestments.filter(
    (investment) => selectedType === 'All' || investment.property.type === selectedType,
  );

  return (
    <div className='col-span-8 row-span-11 grid grid-cols-subgrid grid-rows-subgrid max-md:col-span-full max-md:grid-rows-none max-md:gap-4'>
      <div className='col-span-8 row-span-11 max-md:col-span-full'>
        <div className='box'>
          <div className='relative flex size-full flex-col justify-center gap-2 overflow-hidden pt-2'>
            <div className='flex items-center justify-between'>
              <h1 className='font-semibold text-muted-foreground'>Your Invested Properties</h1>
              <div className='flex gap-2'>
                <Select value={selectedType} onValueChange={setSelectedType}>
                  <SelectTrigger className='w-[160px] rounded-lg sm:ml-auto' aria-label='Select a value'>
                    <SelectValue placeholder='All' />
                  </SelectTrigger>
                  <SelectContent className='rounded-lg'>
                    <SelectItem value='All' className='rounded-lg'>
                      All
                    </SelectItem>
                    {investmentTypes.map((type) => (
                      <SelectItem key={type} value={type} className='rounded-lg'>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className='relative flex size-full flex-col justify-center gap-2 overflow-hidden rounded-lg border border-border bg-card'>
              <div className='hide-scrollbar relative flex h-full flex-1 flex-col justify-start gap-2 overflow-y-auto rounded-lg p-2 max-md:overflow-y-visible'>
                {investments.map((investment, idx) => (
                  <MyPropertyCard key={idx} investment={investment} property={investment.property} profile={profile} />
                ))}
                {investments.length == 0 && (
                  <div className='flex flex-1 flex-col items-center justify-center text-center text-xs text-muted-foreground'>
                    You have no investments yet.
                  </div>
                )}
                <div className='h-16 w-full'>&nbsp;</div> {/* Spacer */}
              </div>
              <div className='pointer-events-none absolute bottom-0 left-0 h-10 w-full bg-gradient-to-b from-transparent to-card'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MyPropertiesList;
