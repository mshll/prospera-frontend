import { depositFunds } from '@/actions/transactions';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { CreditCardIcon } from 'lucide-react';
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

const DepositForm = () => {
  return (
    <div className='flex gap-3 md:px-4'>
      <ResponsiveModal>
        <ResponsiveModalTrigger asChild>
          <Button type='submit' size='sm' variant='ringHover'>
            Make a Deposit
          </Button>
        </ResponsiveModalTrigger>
        <ResponsiveModalContent>
          <ResponsiveModalHeader>
            <ResponsiveModalTitle>Make a Deposit</ResponsiveModalTitle>
            <ResponsiveModalDescription>
              Add funds to your account quickly and securely. Choose your preferred payment method below.
            </ResponsiveModalDescription>
          </ResponsiveModalHeader>
          <ResponsiveModalBody>
            <form action={depositFunds}>
              <div className='flex flex-col gap-4 py-3'>
                <div className='flex flex-col gap-1'>
                  <label htmlFor='deposit-amount' className='text-sm text-muted-foreground'>
                    Deposit Amount
                  </label>
                  <Input type='number' name='amount' placeholder='Enter amount' />
                  <ResponsiveModalFooter className='mt-4'>
                    <Button
                      type='submit'
                      onClick={() => {
                        toast.success('Deposit initiated', {
                          description: 'Your deposit is being processed. Please check your account balance.',
                        });
                      }}
                    >
                      <CreditCardIcon size={16} className='me-1' />
                      Deposit Now
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

export default DepositForm;
