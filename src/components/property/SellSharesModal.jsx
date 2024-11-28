'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { LoaderCircle } from 'lucide-react';
import { toast } from 'sonner';
import {
  ResponsiveModal,
  ResponsiveModalContent,
  ResponsiveModalDescription,
  ResponsiveModalFooter,
  ResponsiveModalHeader,
  ResponsiveModalTitle,
  ResponsiveModalTrigger,
} from '@/components/ui/responsive-modal';
import { sellShares } from '@/actions/buyShares';

const SellSharesModal = ({ property, userBalance, sharesOwned, children }) => {
  const { totalShares, locationName, rentalIncome, currentValue, id } = property;
  const [numberOfShares, setNumberOfShares] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const sharePrice = currentValue / totalShares;
  const totalProceeds = numberOfShares * sharePrice;
  const platformFee = totalProceeds * 0.02;
  const netProceeds = totalProceeds - platformFee;
  const monthlyReturnDecrease = (rentalIncome / totalShares) * numberOfShares;

  const handleInputChange = (e) => {
    if (e.target.value > sharesOwned) {
      setNumberOfShares(sharesOwned);
      return;
    }
    setNumberOfShares(e.target.value);
  };

  const handleSellShares = (e, id) => {
    e.preventDefault();
    setIsLoading(true);
    const promise = sellShares(e.target.amount.value, id);
    toast.promise(promise, {
      loading: 'Processing sale...',
      success: 'Shares sold successfully.',
      error: 'Failed to sell shares. Please try again.',
    });
    promise.finally(() => {
      setIsLoading(false);
      setOpen(false);
    });
  };

  useEffect(() => {
    setNumberOfShares(1);
  }, [open]);

  return (
    <ResponsiveModal className='w-full p-0' open={open} onOpenChange={setOpen}>
      <ResponsiveModalTrigger>{children}</ResponsiveModalTrigger>
      <ResponsiveModalContent>
        <form onSubmit={(e) => handleSellShares(e, id)}>
          <ResponsiveModalHeader>
            <ResponsiveModalTitle className='flex p-6 font-medium sm:flex-row sm:gap-6'>
              <div className='flex-shrink-0'>
                <Image
                  src={property.imagesUrls[0]}
                  alt='Property'
                  width={500}
                  height={500}
                  className='hidden h-28 w-36 rounded-lg sm:block'
                />
              </div>
              <div className='flex w-full flex-col gap-1'>
                <h1 className='font-semibold text-primary'>{locationName}</h1>
                <div className='mt-4 flex flex-col gap-2'>
                  <div className='flex flex-1 items-center justify-between'>
                    <p className='text-sm text-muted-foreground'>Shares Owned</p>
                    <p className='text-base font-semibold'>{sharesOwned}</p>
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
              <div>
                <p className='mt-4 text-xl font-semibold text-secondary-foreground'>Create Share Order</p>
                <h1 className='mt-4 text-xs'>Number of shares to sell</h1>
                <Input
                  value={numberOfShares}
                  onChange={handleInputChange}
                  type='number'
                  name='amount'
                  min='0'
                  max={sharesOwned}
                />
                <input type='hidden' value={id} />

                <div className='mb-4 mt-6 flex flex-col gap-4'>
                  <div className='flex justify-between'>
                    <p>Total Proceeds (KWD)</p>
                    <p className='font-semibold'>{totalProceeds.toFixed(2)} KWD</p>
                  </div>
                  <div className='flex justify-between'>
                    <p>Platform Fee</p>
                    <p>{platformFee.toFixed(2)} KWD</p>
                  </div>
                  <div className='flex justify-between'>
                    <p>Net Proceeds (KWD)</p>
                    <p className='font-semibold'>{netProceeds.toFixed(2)} KWD</p>
                  </div>
                  <div className='flex justify-between'>
                    <p>Monthly Return Decrease (KWD)</p>
                    <p>{monthlyReturnDecrease.toFixed(2)} KWD</p>
                  </div>
                </div>
              </div>
            </ResponsiveModalDescription>
          </ResponsiveModalHeader>
          <ResponsiveModalFooter className='px-6 pb-6'>
            <Button
              className='w-full'
              type='submit'
              disabled={isLoading || numberOfShares <= 0 || numberOfShares > sharesOwned}
            >
              {isLoading ? <LoaderCircle className='h-6 w-6 animate-spin' /> : 'Sell Shares'}
            </Button>
          </ResponsiveModalFooter>
        </form>
      </ResponsiveModalContent>
    </ResponsiveModal>
  );
};

export default SellSharesModal;
