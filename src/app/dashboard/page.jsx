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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { WalletMinimal } from 'lucide-react';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';

const DashboardPage = () => {
  return (
    <div className="flex flex-col  h-screen ">
      <div>
        <div className="m-5 p-6 rounded-lg relative shadow-md">
          <div className="flex justify-between items-center">
            <div className="flex flex-row">
              <div>
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    className="border-2 border-purple-400 rounded-full"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
              <div className="ml-2 mr-8 ">
                <h1 className="text-muted-foreground text-xs">@yousefalm</h1>
                <h1 className="">Yousef Almasaeed</h1>
              </div>

              <div className=" ">
                <Button
                  variant="secondary"
                  className="w-full bg-purple-400 text-base rounded-xl px-4 py-5 "
                >
                  Deposit <WalletMinimal />
                </Button>
              </div>
            </div>

            <div className="flex flex-row space-x-8 items-center">
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

        <div className=" m-5 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-6  border-y border-muted-foreground">
          <div className=" rounded-lg relative shadow-xl">
            <div className="m-5">
              <h1 className=" text-muted-foreground text-base">
                Total portfolio value
              </h1>
              <p className="font-bold text-3xl">5,569</p>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gray-100 rounded-b-lg">
              <div className="flex flex-row justify-between m-3 ">
                <div>
                  <h1 className="font-bold text-red-500 text-sm">
                    -1k
                    <span className="font-normal text-muted-foreground ml-2">
                      From last month
                    </span>
                  </h1>
                </div>
                <div>
                  <a href="" className="border-b-2 font-bold text-sm">
                    View more
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className=" rounded-lg relative shadow-md">
            <div className="m-5">
              <h1 className=" text-muted-foreground text-base">
                Total portfolio value
              </h1>
              <p className="font-bold text-3xl">5,569</p>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gray-100 rounded-b-lg">
              <div className="flex flex-row justify-between m-3 ">
                <div>
                  <h1 className="font-bold text-red-500 text-sm">
                    -1k
                    <span className="font-normal text-muted-foreground ml-2">
                      From last month
                    </span>
                  </h1>
                </div>
                <div>
                  <a href="" className="border-b-2 font-bold text-sm">
                    View more
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className=" rounded-lg relative shadow-md">
            <div className="m-5">
              <h1 className=" text-muted-foreground text-base">
                Total portfolio value
              </h1>
              <p className="font-bold text-3xl">5,569</p>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gray-100 rounded-b-lg">
              <div className="flex flex-row justify-between m-3 ">
                <div>
                  <h1 className="font-bold text-red-500 text-sm">
                    -1k
                    <span className="font-normal text-muted-foreground ml-2">
                      From last month
                    </span>
                  </h1>
                </div>
                <div>
                  <a href="" className="border-b-2 font-bold text-sm">
                    View more
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-green-300 p-20 rounded-lg relative shadow-md">
            Return on Investment (ROI)
            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-green-100 rounded-b-lg"></div>
          </div>
        </div>
      </div>

      <div className="m-5 grid grid-cols-1 md:grid-cols-[2fr_1fr] lg:grid-cols-[2fr_1fr] gap-4">
        <div className="bg-red-400 p-44 rounded-lg relative shadow-md"></div>
        <div className="bg-red-400 p-44 rounded-lg relative shadow-md"></div>
      </div>

      <div className="m-5 grid grid-cols-1  lg:grid-cols-[5fr_1fr] gap-4">
        <div className=" p-4 rounded-lg relative shadow-md">
          <div className="flex flex-row justify-between">
            <div className="flex flex-row">
              <h1 className="text-2xl font-bold">Listing Board</h1>
              <Badge
                variant={'Secondary'}
                className="ml-5 bg-green-200 text-green-600  font-bold "
              >
                Newly added
              </Badge>
            </div>
            <div className="flex flex-row">
              <Button className="ml-4 font-bold" variant="outline">
                View All Listings
              </Button>
            </div>
          </div>

          <div className="flex mt-5">
            <Card className="w-[350px] rounded-lg shadow-md">
              <Image
                src={AptOne}
                alt="Luxury Apartment"
                className="rounded-t-lg h-[200px] w-full object-cover"
              />
              <CardContent>
                <CardTitle className="text-lg font-bold mt-2">
                  Luxury Apartment
                </CardTitle>
                <CardDescription>
                  <p className="text-sm text-gray-500">
                    Al Agung Tower, Kuwait City, Kuwait
                  </p>
                  <div className="flex justify-between items-center mt-2">
                    <p className="text-2xl font-bold text-gray-700">
                      0,000{' '}
                      <span className="text-gray-500 text-sm">/month</span>
                    </p>
                    <Button className=" ">View Details</Button>
                  </div>
                </CardDescription>
              </CardContent>
              <CardFooter className="border-t border-gray-100 mt-2">
                <div className="flex text-sm space-x-7 ">
                  <div className="flex items-center">
                    <BedSingle className="w-5 h-5" />
                    <p className="ml-2 text-gray-500">2 Beds</p>
                  </div>
                  <div className="flex items-center">
                    <Bath className="w-5 h-5" />
                    <p className="ml-2 text-gray-500">2 Baths</p>
                  </div>
                  <div className="flex items-center">
                    <Maximize2 className="w-5 h-5" />
                    <p className="ml-2 text-gray-500">1000 sqft</p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
        <div className="bg-red-400 p-44 rounded-lg relative shadow-md"></div>
      </div>
    </div>
  );
};

export default DashboardPage;
