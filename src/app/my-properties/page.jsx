import { getAllProperties } from '@/actions/properties';
import AptOne from '@/app/assets/apt1.jpg';

import ListingCard from '@/components/ListingCard';
import SideBar from '@/components/Sidebar';
import AmountCard from '@/components/dashboard/AmountCard';
import InfoSection from '@/components/dashboard/InfoSection';
import { PortfolioChart } from '@/components/dashboard/PortfolioChart';
import PropertyCard from '@/components/dashboard/PropertyCard';
import { PropertyChart } from '@/components/dashboard/PropertyChart';
import { Button } from '@/components/ui/button';
import { getGreeting } from '@/lib/utils';
import clsx from 'clsx';
import { ChevronRightIcon, TrendingDownIcon, TrendingUpIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import MyPropertiesList from '@/components/dashboard/MyPropertiesList';
import { getMyProfile } from '@/actions/users';
import LikedPropertyCard from '@/components/dashboard/LikedPropertyCard';

const MyPropertiesPage = async () => {
  const properties = await getAllProperties();
  const profile = await getMyProfile();

  return (
    <SideBar>
      <main className='relative w-full overflow-auto rounded-l-2xl bg-background'>
        <div className='grid h-screen max-h-[75rem] min-h-[50rem] grid-cols-12 grid-rows-10 gap-4 p-4 max-md:h-auto max-md:max-h-none max-md:grid-rows-none max-md:gap-y-10 max-md:py-6'>
          <div className='col-span-full row-span-1'>
            <div className='box'>
              <div className='flex size-full items-start justify-between gap-3 max-md:flex-col md:items-center'>
                <div className='flex flex-col'>
                  <div className='text-2xl font-bold text-primary'>
                    <span className='font-medium text-foreground'>{getGreeting()},</span> Meshal
                  </div>
                  <div className=''>
                    <p className='text-sm text-muted-foreground'>Here is a look at your current invested properties.</p>
                  </div>
                </div>
                <div className='flex gap-3 md:px-4'>
                  <Button size='sm' variant='ringHoverOutline'>
                    Withdraw Funds
                  </Button>
                  <Button size='sm' variant='ringHover'>
                    Add Funds
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* <div className='col-span-3 row-span-2 max-md:col-span-full'>
            <AmountCard title='Portfolio Value' value='105,569' currency='KWD' change='1k' type='down' />
          </div>
          <div className='col-span-3 row-span-2 max-md:col-span-full'>
            <AmountCard title='Cash Balance' value='44,444' currency='KWD' change='1k' type='down' />
          </div>
          <div className='col-span-3 row-span-2 max-md:col-span-full'>
            <AmountCard title='Monthly Yield' value='2,098' currency='KWD' change='500' type='up' />
          </div> */}

          {/* Left column */}
          <MyPropertiesList myInvestments={profile.investments} />

          <div className='col-span-4 row-span-2 max-md:order-1 max-md:col-span-full'>
            <div className='box'>
              <div className='size-full overflow-visible'>
                <PropertyChart />
              </div>
            </div>
          </div>

          <div className='order-2 col-span-4 row-span-9 grid grid-cols-subgrid grid-rows-subgrid max-md:col-span-full max-md:grid-rows-none max-md:gap-4'>
            <div className='col-span-4 row-span-9 max-md:col-span-full'>
              <div className='box rounded-none'>
                <div className='relative flex size-full flex-col justify-center gap-2 overflow-hidden'>
                  <div className='flex items-center justify-between'>
                    <h1 className='font-semibold text-muted-foreground'>Recently Liked</h1>
                    {/* <Link href='/my-properties'>
                      <Button variant='ghost' size='sm' className='text-muted-foreground'>
                        View all
                      </Button>
                    </Link> */}
                  </div>
                  <div className='relative flex size-full flex-col justify-center gap-2 overflow-hidden rounded-lg border border-border bg-card'>
                    <div className='hide-scrollbar relative flex h-full flex-1 flex-col justify-start gap-2 overflow-y-auto rounded-lg p-2 max-md:overflow-y-visible'>
                      {profile.likedProperties.map((propertyId) => (
                        <LikedPropertyCard
                          key={'likedproperty-' + propertyId}
                          property={properties.find((property) => property.id === propertyId)}
                        />
                      ))}
                      {profile.likedProperties.length == 0 && (
                        <div className='flex flex-1 flex-col items-center justify-center text-center text-xs text-muted-foreground'>
                          You haven&apos;t liked any properties yet.
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
        </div>
      </main>
    </SideBar>
  );
};

export default MyPropertiesPage;
