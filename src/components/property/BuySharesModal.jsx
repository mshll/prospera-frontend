'use client';
import { ArrowLeftRight, XCircleIcon } from 'lucide-react';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { useState } from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Card } from '../ui/card';
import Image from 'next/image';
import AptOne from '@/app/assets/apt1.jpg';

const Data = {
  sharesAvailable: 995,
  pricePerShare: 200,
  propertyValue: 1000000,
  balance: 40000,
};

const BuySharesModal = () => {
  const [balance, setBalance] = useState(Data.balance);
  const [purchaseAmount, setPurchaseAmount] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value;
    // Update purchase amount and ensure it's a valid number
    setPurchaseAmount(value);
  };

  // Calculate the number of shares based on the purchase amount
  const calculateShares = () => {
    const amount = parseFloat(purchaseAmount);
    if (!isNaN(amount) && amount > 0) {
      return Math.floor(amount / Data.pricePerShare);
    }
    return 0;
  };

  return (
    <AlertDialog className='w-full p-0'>
      <AlertDialogTrigger className='w-full'>
        <div className='inline-flex h-9 w-full items-center justify-center gap-2 whitespace-nowrap rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0'>
          Buy Shares
        </div>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader className=''>
          <AlertDialogTitle className='flex bg-secondary p-6 font-medium sm:flex-row sm:gap-6'>
            <div className='flex-shrink-0'>
              <Image src={AptOne} alt='The House' className='hidden h-28 w-36 rounded-lg sm:block' />
            </div>

            <div className='flex w-full flex-col gap-1'>
              <h1 className='font-semibold text-primary'>The House</h1>
              <p className='text-sm text-muted-foreground'>Jabriya, block 123, New York</p>

              <div className='mt-4 flex flex-col gap-4 sm:flex-row'>
                <div>
                  <p className='text-xs text-muted-foreground'>Shares Remaining</p>
                  <p className='text-base font-semibold'>{Data.sharesAvailable}</p>
                </div>
                <div>
                  <p className='text-xs text-muted-foreground'>Share Price</p>
                  <p className='text-sm font-semibold'>{Data.pricePerShare} KWD</p>
                </div>
              </div>
            </div>

            <AlertDialogCancel className='-mt-4 border-0 bg-transparent shadow-none hover:text-destructive'>
              <XCircleIcon className='h-4 w-4' />
            </AlertDialogCancel>
          </AlertDialogTitle>
          <AlertDialogDescription className='px-6'>
            <p className='mt-4 text-xl font-semibold text-secondary-foreground'>Create Share Order</p>

            <div>
              <h1 className='mt-4 text-xs'>Number of shares to purchase</h1>
              <Input />

              <div className='mb-4 mt-6 flex flex-col gap-4'>
                <div className='flex justify-between'>
                  <p>Total Investment (KWD)</p>
                  <p className='font-semibold'>100 KWD</p>
                </div>
                <div className='flex justify-between'>
                  <p>Platform Fee</p>
                  <p className=''>2.5 KWD</p>
                </div>

                <div className='flex justify-between'>
                  <p>Total Purchase (KWD)</p>
                  <p className='font-semibold'>100 KWD</p>
                </div>

                <div className='flex justify-between'>
                  <p>Monthly Return (KWD)</p>
                  <p>100 KWD</p>
                </div>

                <div className='flex justify-between'>
                  <p>Total Investment (KWD)</p>
                  <p>100 KWD</p>
                </div>
              </div>
            </div>

            {/* <div className='mb-2 rounded bg-muted p-4'>
              <div className='flex justify-between'>
                <div>
                  <p>Purchase Amount</p>
                </div>
                <div className='flex gap-6'>
                  <p>Wallet Balance: {balance} KWD</p>
                  <Badge>
                    <a href=''>Max</a>
                  </Badge>
                </div>
              </div>
              <Input
                className='mt-2 border-none px-0 font-semibold text-secondary-foreground shadow-none focus-visible:ring-0'
                style={{ fontSize: '20px' }}
                onChange={handleInputChange}
                placeholder='Enter amount'
              />
            </div> */}
            {/* 
            <div className='mb-2 rounded bg-muted p-4'>
              <p>Shares to Purchase</p>
              <p>{calculateShares()}</p> 
            </div> */}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className='px-6 pb-6'>
          <AlertDialogAction className='w-full'>Buy Shares</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default BuySharesModal;
