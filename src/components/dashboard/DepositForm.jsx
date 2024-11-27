'use client';
import { useState } from 'react';
import { depositFunds } from '@/actions/transactions';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { CreditCardIcon, LoaderCircle } from 'lucide-react';
import {
  ResponsiveModal,
  ResponsiveModalBody,
  ResponsiveModalClose,
  ResponsiveModalContent,
  ResponsiveModalDescription,
  ResponsiveModalFooter,
  ResponsiveModalHeader,
  ResponsiveModalTitle,
  ResponsiveModalTrigger,
} from '../ui/responsive-modal';
import { toast } from 'sonner';

const DepositForm = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const handleDeposit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const promise = depositFunds(e.target.amount.value);
    toast.promise(promise, {
      loading: 'Processing deposit...',
      success: 'Funds deposited successfully.',
      error: 'Failed to deposit funds. Please try again.',
    });
    promise.finally(() => {
      setIsLoading(false);
      setOpen(false);
    });
  };

  return (
    <ResponsiveModal open={open} onOpenChange={setOpen}>
      <ResponsiveModalTrigger>{children}</ResponsiveModalTrigger>
      <ResponsiveModalContent>
        <ResponsiveModalHeader>
          <ResponsiveModalTitle>Make a Deposit</ResponsiveModalTitle>
          <ResponsiveModalDescription>
            Add funds to your account quickly and securely. Choose your preferred payment method below.
          </ResponsiveModalDescription>
        </ResponsiveModalHeader>
        <ResponsiveModalBody>
          <form onSubmit={handleDeposit}>
            <div className='flex flex-col gap-4 py-3'>
              <div className='flex flex-col gap-1'>
                <label htmlFor='deposit-amount' className='text-sm text-muted-foreground'>
                  Deposit Amount
                </label>
                <Input type='number' name='amount' placeholder='Enter amount' required min='0' />
                <ResponsiveModalFooter className='mt-4'>
                  <Button type='submit' disabled={isLoading}>
                    {isLoading ? (
                      <LoaderCircle className='h-6 w-6 animate-spin' />
                    ) : (
                      <>
                        <CreditCardIcon size={16} className='me-1' />
                        Deposit Now
                      </>
                    )}
                  </Button>
                  <Button type='button' variant='outline' onClick={() => setOpen(false)}>
                    Cancel
                  </Button>
                </ResponsiveModalFooter>
              </div>
            </div>
          </form>
        </ResponsiveModalBody>
      </ResponsiveModalContent>
    </ResponsiveModal>
  );
};

export default DepositForm;
