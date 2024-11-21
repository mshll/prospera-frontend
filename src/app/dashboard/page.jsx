import AptOne from '@/app/assets/apt1.jpg';

import ListingCard from '@/components/ListingCard';
import SideBar from '@/components/Sidebar';
import AmountCard from '@/components/dashboard/AmountCard';
import { Button } from '@/components/ui/button';
import { ChevronRightIcon, TrendingDownIcon, TrendingUpIcon } from 'lucide-react';

const DashboardPage = () => {
  return (
    <SideBar>
      <main className='w-full overflow-auto'>
        <div className='grid h-screen max-h-[75rem] min-h-[50rem] grid-cols-12 grid-rows-10 gap-4 p-4 max-lg:h-auto max-lg:max-h-none max-lg:grid-rows-none max-lg:py-6'>
          <div className='col-span-full row-span-1'>
            <div className='box'>1</div>
          </div>

          <div className='col-span-3 row-span-2 max-lg:col-span-full'>
            <AmountCard title='Portfolio Value' value='105,569' currency='KWD' change='1k' type='down' />
          </div>
          <div className='col-span-3 row-span-2 max-lg:col-span-full'>
            <AmountCard title='Monthly Yield' value='2,098' currency='KWD' change='500' type='up' />
          </div>
          <div className='col-span-3 row-span-2 max-lg:col-span-full'>
            <AmountCard title='My Wallet' value='44,444' currency='KWD' change='1k' type='down' />
          </div>
          <div className='col-span-3 row-span-2 max-lg:col-span-full'>
            <div className='box'>1</div>
          </div>

          {/* Left column */}
          <div className='col-span-8 row-span-9 grid grid-cols-subgrid grid-rows-subgrid max-lg:col-span-full max-lg:grid-rows-none max-lg:gap-4'>
            <div className='col-span-5 row-span-5 max-lg:col-span-8 max-md:col-span-full'>
              <div className='box'>2</div>
            </div>

            <div className='col-span-3 row-span-5 max-lg:col-span-4 max-md:col-span-full'>
              <div className='box'>3</div>
            </div>

            <div className='col-span-8 row-span-4 max-lg:col-span-full max-lg:min-h-[20rem] max-md:col-span-full'>
              <div className='box flex gap-2 border-none'>
                <div className='relative z-10 size-full overflow-hidden'>
                  <div className='hide-scrollbar flex h-full gap-2 overflow-y-auto max-lg:overflow-y-visible'>
                    <ListingCard
                      image={AptOne}
                      title='Luxury Apartment'
                      location='Al Agung Tower, Kuwait City, Kuwait'
                      price='5,569'
                      beds={2}
                      baths={2}
                      area={1000}
                    />
                    <ListingCard
                      image={AptOne}
                      title='Modern Condo'
                      location='Downtown, Kuwait City, Kuwait'
                      price='4,200'
                      beds={3}
                      baths={2}
                      area={1200}
                    />
                    <ListingCard
                      image={AptOne}
                      title='Cozy Studio'
                      location='Salmiya, Kuwait'
                      price='2,350'
                      beds={1}
                      baths={1}
                      area={600}
                    />
                  </div>
                  <div className='pointer-events-none absolute bottom-0 left-0 z-10 h-8 w-full bg-gradient-to-b from-background/0 to-background/50'></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className='col-span-4 row-span-9 grid grid-cols-subgrid grid-rows-subgrid max-lg:col-span-full max-lg:grid-rows-none max-lg:gap-4'>
            <div className='col-span-4 row-span-9 max-lg:col-span-full'>
              <div className='box'>6</div>
            </div>

            <div className='col-span-full hidden max-lg:min-h-[20rem] max-md:block'>
              <div className='box'>7</div>
            </div>

            {/* <div className='col-span-4 row-span-1 max-lg:col-span-full max-lg:min-h-[5rem]'>
              <div className='box'>8</div>
            </div> */}
          </div>
        </div>
      </main>
    </SideBar>
  );
};

export default DashboardPage;
