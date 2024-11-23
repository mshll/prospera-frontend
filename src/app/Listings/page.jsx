'use client';
import { useState } from 'react';
import { Card, CardHeader } from '@/components/ui/card';
import Map from '@/components/Map';
import { ListingsContainer } from '@/components/Listings/ListingsContainer';
import ListingsContainerHeadings from '@/components/Listings/ListingsContainerHeadings';
import { Input } from '@/components/ui/input';

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '@/components/ui/command';
import { CalculatorIcon, CalendarIcon, SearchIcon } from 'lucide-react';

const HouseListingsPage = () => {
  return (
    <div className='w-ful relative'>
      <div>
        <Card className='grid h-screen rounded-3xl bg-background shadow-2xl lg:grid-cols-2'>
          <div className='row-span-full h-full w-full overflow-hidden'>
            <div className='flex size-full flex-col overflow-hidden p-4 px-10'>
              <ListingsContainerHeadings />
              <ListingsContainer />
            </div>
          </div>

          <div className='hidden p-4 lg:block'>
            <Map />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default HouseListingsPage;
