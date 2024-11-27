'use client';
import { useState } from 'react';
import Image from 'next/image';
import AptOne from '@/app/assets/apt1.jpg';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import {
  ResponsiveModal,
  ResponsiveModalContent,
  ResponsiveModalDescription,
  ResponsiveModalFooter,
  ResponsiveModalHeader,
  ResponsiveModalTitle,
  ResponsiveModalTrigger,
} from '@/components/ui/responsive-modal';
import { buyShares } from '@/actions/buyShares';

const BuySharesModal = ({ property, userBalance }) => {
  const { totalShares, availableShares, locationName, locationAddress, rentalIncome, currentValue, id } = property;
  const [numberOfShares, setNumberOfShares] = useState(1);

  const sharePrice = currentValue / totalShares;
  const totalInvestment = numberOfShares * sharePrice;
  const platformFee = totalInvestment * 0.02;
  const totalPurchase = totalInvestment + platformFee;
  const monthlyReturn = (rentalIncome / totalShares) * numberOfShares;

  const handleInputChange = (e) => {
    if (e.target.value > availableShares) {
      setNumberOfShares(availableShares);
      return;
    }
    setNumberOfShares(e.target.value);
  };

  return (
    <ResponsiveModal className='w-full p-0'>
      <ResponsiveModalTrigger className='mt-4 w-full'>
        <div className='inline-flex h-9 w-full items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium'>
          Buy Shares
        </div>
      </ResponsiveModalTrigger>
      <ResponsiveModalContent>
        <form action={(formData) => buyShares(formData, id)}>
          <ResponsiveModalHeader>
            <ResponsiveModalTitle className='flex p-6 font-medium sm:flex-row sm:gap-6'>
              <div className='flex-shrink-0'>
                <Image src={AptOne} alt='Property' className='hidden h-28 w-36 rounded-lg sm:block' />
              </div>
              <div className='flex w-full flex-col gap-1'>
                <h1 className='font-semibold text-primary'>{locationName}</h1>
                <div className='mt-4 flex flex-col gap-2'>
                  <div className='flex flex-1 items-center justify-between'>
                    <p className='text-sm text-muted-foreground'>Shares Remaining</p>
                    <p className='text-base font-semibold'>{availableShares}</p>
                  </div>
                  <div className='flex flex-1 items-center justify-between'>
                    <p className='text-sm text-muted-foreground'>Share Price</p>
                    <p className='text-sm font-semibold'>{sharePrice.toFixed(2)} KWD</p>
                  </div>
                  <div className='flex flex-1 items-center justify-between'>
                    <p className='text-sm text-muted-foreground'>Current Balance</p>
                    <p className='text-sm font-semibold'>{userBalance.toFixed(2)} KWD</p>
                  </div>
                </div>
              </div>
            </ResponsiveModalTitle>

            <ResponsiveModalDescription className='px-6'>
              <p className='mt-4 text-xl font-semibold text-secondary-foreground'>Create Share Order</p>
              <div>
                <h1 className='mt-4 text-xs'>Number of shares to purchase</h1>
                <Input
                  value={numberOfShares}
                  onChange={handleInputChange}
                  type='number'
                  name='amount'
                  min='0'
                  max={availableShares}
                />
                <input type='hidden' value={id} />

                <div className='mb-4 mt-6 flex flex-col gap-4'>
                  <div className='flex justify-between'>
                    <p>Total Investment (KWD)</p>
                    <p className='font-semibold'>{totalInvestment.toFixed(2)} KWD</p>
                  </div>
                  <div className='flex justify-between'>
                    <p>Platform Fee</p>
                    <p>{platformFee.toFixed(2)} KWD</p>
                  </div>
                  <div className='flex justify-between'>
                    <p>Total Purchase (KWD)</p>
                    <p className='font-semibold'>{totalPurchase.toFixed(2)} KWD</p>
                  </div>
                  <div className='flex justify-between'>
                    <p>Monthly Return (KWD)</p>
                    <p>{monthlyReturn.toFixed(2)} KWD</p>
                  </div>
                </div>
              </div>
            </ResponsiveModalDescription>
          </ResponsiveModalHeader>
          <ResponsiveModalFooter className='px-6 pb-6'>
            <Button
              className='w-full'
              type='submit'
              disabled={numberOfShares <= 0 || numberOfShares > availableShares || totalPurchase > userBalance}
            >
              Buy Shares
            </Button>
          </ResponsiveModalFooter>
        </form>
      </ResponsiveModalContent>
    </ResponsiveModal>
  );
};

export default BuySharesModal;
