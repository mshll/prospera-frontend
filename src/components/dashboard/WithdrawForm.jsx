'use client';
import { useState } from 'react';
import Image from 'next/image';
import AptOne from '@/app/assets/apt1.jpg';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
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
} from '@/components/ui/responsive-modal';
import { withdrawFunds } from '@/actions/transactions';
import { IconCash } from '@tabler/icons-react';
import { toast } from 'sonner';

const WithdrawForm = () => {
  return (
    <div className='flex gap-3 md:px-4'>
      <ResponsiveModal>
        <ResponsiveModalTrigger asChild>
          <Button size='sm' variant='ringHoverOutline'>
            Withdraw Funds
          </Button>
        </ResponsiveModalTrigger>
        <ResponsiveModalContent>
          <ResponsiveModalHeader>
            <ResponsiveModalTitle>Withdraw Funds</ResponsiveModalTitle>
            <ResponsiveModalDescription>
              Withdraw funds from your account quickly and securely. Please enter the amount you wish to withdraw.
            </ResponsiveModalDescription>
          </ResponsiveModalHeader>
          <ResponsiveModalBody>
            <form action={withdrawFunds}>
              <div className='flex flex-col gap-4 py-3'>
                <div className='flex flex-col gap-1'>
                  <label htmlFor='withdraw-amount' className='text-sm text-muted-foreground'>
                    Withdrawal Amount
                  </label>
                  <Input type='number' name='amount' placeholder='Enter amount' />
                  <ResponsiveModalFooter className='mt-4'>
                    <Button
                      type='submit'
                      onClick={() => {
                        toast.success('Withdrawal initiated', {
                          description: 'Your withdrawal is being processed. Please check your account balance.',
                        });
                      }}
                    >
                      <IconCash size={16} className='me-1' />
                      Withdraw Now
                    </Button>

                    <ResponsiveModalClose asChild>
                      <Button variant='outline'>Cancel</Button>
                    </ResponsiveModalClose>
                  </ResponsiveModalFooter>
                </div>
              </div>
            </form>
          </ResponsiveModalBody>
        </ResponsiveModalContent>
      </ResponsiveModal>
    </div>
  );
};

export default WithdrawForm;
