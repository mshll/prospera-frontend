import React from 'react';

import { Badge } from '@/components/ui/badge';
import { BedSingle } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Bath } from 'lucide-react';
import { Ruler } from 'lucide-react';
import { Maximize2 } from 'lucide-react';
import { Bell } from 'lucide-react';

import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import AptOne from '@/app/assets/apt1.jpg';
import Image from 'next/image';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { WalletMinimal } from 'lucide-react';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';

const DashboardPage = () => {
  return (
    <div className='flex h-screen flex-col'>
      <div>
        <div className='relative m-5 rounded-lg p-6 shadow-md'>
          <div className='flex items-center justify-between'>
            <div className='flex flex-row'>
              <div>
                <Avatar>
                  <AvatarImage
                    src='https://github.com/yousefalm1.png'
                    className='rounded-full border-2 border-purple-400'
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
              <div className='ml-2 mr-8'>
                <h1 className='text-xs text-muted-foreground'>@yousefalm</h1>
                <h1 className=''>Yousef Almasaeed</h1>
              </div>

              <div className=' '>
                <Button variant='secondary' className='w-full rounded-xl bg-purple-400 px-4 py-5 text-base'>
                  Deposit <WalletMinimal />
                </Button>
              </div>
            </div>

            <div className='flex flex-row items-center space-x-8'>
              <div>
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Bell />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                    <DropdownMenuItem>Team</DropdownMenuItem>
                    <DropdownMenuItem>Subscription</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div>
                <Input />
              </div>
            </div>
          </div>
        </div>

        <div className='m-5 grid grid-cols-1 gap-6 border-y border-muted-foreground md:grid-cols-4 lg:grid-cols-4'>
          <div className='relative rounded-lg shadow-xl'>
            <div className='m-5'>
              <h1 className='text-base text-muted-foreground'>Total portfolio value</h1>
              <p className='text-3xl font-bold'>5,569</p>
            </div>

            <div className='absolute bottom-0 left-0 h-1/3 w-full rounded-b-lg bg-gray-100'>
              <div className='m-3 flex flex-row justify-between'>
                <div>
                  <h1 className='text-sm font-bold text-red-500'>
                    -1k
                    <span className='ml-2 font-normal text-muted-foreground'>From last month</span>
                  </h1>
                </div>
                <div>
                  <a href='' className='border-b-2 text-sm font-bold'>
                    View more
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='relative rounded-lg shadow-md'>
            <div className='m-5'>
              <h1 className='text-base text-muted-foreground'>Total portfolio value</h1>
              <p className='text-3xl font-bold'>5,569</p>
            </div>

            <div className='absolute bottom-0 left-0 h-1/3 w-full rounded-b-lg bg-gray-100'>
              <div className='m-3 flex flex-row justify-between'>
                <div>
                  <h1 className='text-sm font-bold text-red-500'>
                    -1k
                    <span className='ml-2 font-normal text-muted-foreground'>From last month</span>
                  </h1>
                </div>
                <div>
                  <a href='' className='border-b-2 text-sm font-bold'>
                    View more
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='relative rounded-lg shadow-md'>
            <div className='m-5'>
              <h1 className='text-base text-muted-foreground'>Total portfolio value</h1>
              <p className='text-3xl font-bold'>5,569</p>
            </div>

            <div className='absolute bottom-0 left-0 h-1/3 w-full rounded-b-lg bg-gray-100'>
              <div className='m-3 flex flex-row justify-between'>
                <div>
                  <h1 className='text-sm font-bold text-red-500'>
                    -1k
                    <span className='ml-2 font-normal text-muted-foreground'>From last month</span>
                  </h1>
                </div>
                <div>
                  <a href='' className='border-b-2 text-sm font-bold'>
                    View more
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className='relative rounded-lg bg-green-300 p-20 shadow-md'>
            Return on Investment (ROI)
            <div className='absolute bottom-0 left-0 h-1/3 w-full rounded-b-lg bg-green-100'></div>
          </div>
        </div>
      </div>

      <div className='m-5 grid grid-cols-1 gap-4 md:grid-cols-[2fr_1fr] lg:grid-cols-[2fr_1fr]'>
        <div className='relative rounded-lg bg-red-400 p-44 shadow-md'></div>
        <div className='relative rounded-lg bg-red-400 p-44 shadow-md'></div>
      </div>

      <div className='m-5 grid grid-cols-1 gap-4 lg:grid-cols-[5fr_1fr]'>
        <div className='relative rounded-lg p-4 shadow-md'>
          <div className='flex flex-row justify-between'>
            <div className='flex flex-row'>
              <h1 className='text-2xl font-bold'>Listing Board</h1>
              <Badge variant={'Secondary'} className='ml-5 bg-green-200 font-bold text-green-600'>
                Newly added
              </Badge>
            </div>
            <div className='flex flex-row'>
              <Button className='ml-4 font-bold' variant='outline'>
                View All Listings
              </Button>
            </div>
          </div>

          <div className='mt-5 flex'>
            <Card className='w-[350px] rounded-lg shadow-md'>
              <Image src={AptOne} alt='Luxury Apartment' className='h-[200px] w-full rounded-t-lg object-cover' />
              <CardContent>
                <CardTitle className='mt-2 text-lg font-bold'>Luxury Apartment</CardTitle>
                <CardDescription>
                  <p className='text-sm text-gray-500'>Al Agung Tower, Kuwait City, Kuwait</p>
                  <div className='mt-2 flex items-center justify-between'>
                    <p className='text-2xl font-bold text-gray-700'>
                      0,000 <span className='text-sm text-gray-500'>/month</span>
                    </p>
                    <Button className=' '>View Details</Button>
                  </div>
                </CardDescription>
              </CardContent>
              <CardFooter className='mt-2 border-t border-gray-100'>
                <div className='flex space-x-7 text-sm'>
                  <div className='flex items-center'>
                    <BedSingle className='h-5 w-5' />
                    <p className='ml-2 text-gray-500'>2 Beds</p>
                  </div>
                  <div className='flex items-center'>
                    <Bath className='h-5 w-5' />
                    <p className='ml-2 text-gray-500'>2 Baths</p>
                  </div>
                  <div className='flex items-center'>
                    <Maximize2 className='h-5 w-5' />
                    <p className='ml-2 text-gray-500'>1000 sqft</p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
        <div className='relative rounded-lg bg-red-400 p-44 shadow-md'></div>
      </div>
    </div>
  );
};

export default DashboardPage;
