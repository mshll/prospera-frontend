'use client';
import { useState } from 'react';
import { withdrawFunds } from '@/actions/transactions';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { BanknoteIcon, LoaderCircle } from 'lucide-react';
import {
  ResponsiveModal,
  ResponsiveModalBody,
  ResponsiveModalContent,
  ResponsiveModalDescription,
  ResponsiveModalFooter,
  ResponsiveModalHeader,
  ResponsiveModalTitle,
  ResponsiveModalTrigger,
} from '../ui/responsive-modal';
import { toast } from 'sonner';

const WithdrawForm = ({ children, userBalance }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [amount, setAmount] = useState('');

  const handleWithdraw = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const promise = withdrawFunds(e.target.amount.value);
    toast.promise(promise, {
      loading: 'Processing withdrawal...',
      success: 'Funds withdrawn successfully.',
      error: 'Failed to withdraw funds. Please try again.',
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
          <ResponsiveModalTitle>Withdraw Funds</ResponsiveModalTitle>
          <ResponsiveModalDescription>Withdraw available funds to your linked bank account.</ResponsiveModalDescription>
        </ResponsiveModalHeader>
        <ResponsiveModalBody>
          <form onSubmit={handleWithdraw}>
            <div className='flex flex-col gap-4 py-3'>
              <div className='flex flex-col gap-1'>
                <label htmlFor='withdraw-amount' className='text-sm text-muted-foreground'>
                  Withdrawal Amount
                </label>
                <Input
                  type='number'
                  name='amount'
                  placeholder='Enter amount'
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  required
                  min='0'
                  max={userBalance}
                />
                <ResponsiveModalFooter className='mt-4'>
                  <Button type='submit' disabled={isLoading || amount <= 0 || amount > userBalance}>
                    {isLoading ? (
                      <LoaderCircle className='h-6 w-6 animate-spin' />
                    ) : (
                      <>
                        <BanknoteIcon size={16} className='me-1' />
                        Withdraw Now
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

export default WithdrawForm;
