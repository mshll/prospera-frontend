'use client';

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
import { toast } from 'sonner';
import { Button } from './ui/button';
import { ClipboardIcon } from 'lucide-react';

function ReferButton() {
  const referLink = 'https://prospera.com/referral/123456';

  return (
    <>
      <ResponsiveModal>
        <ResponsiveModalTrigger asChild>
          <Button size='sm' variant='outline'>
            Refer a friend
          </Button>
        </ResponsiveModalTrigger>
        <ResponsiveModalContent>
          <ResponsiveModalHeader>
            <ResponsiveModalTitle>Refer a friend</ResponsiveModalTitle>
            <ResponsiveModalDescription>
              Share your referral link with a friend and get 10% off your next purchase. Terms and conditions apply.
            </ResponsiveModalDescription>
          </ResponsiveModalHeader>
          <ResponsiveModalBody>
            <div className='flex items-center gap-2 py-3'>
              <div className='flex flex-1 flex-col gap-1'>
                <label htmlFor='referral-link' className='text-sm text-muted-foreground'>
                  Referral link
                </label>
                <input
                  id='referral-link'
                  type='text'
                  className='flex-1 rounded-lg border border-border bg-card p-2'
                  value={referLink}
                  readOnly
                />
              </div>
            </div>
          </ResponsiveModalBody>
          <ResponsiveModalFooter>
            <Button
              onClick={() => {
                navigator.clipboard.writeText(referLink);
                toast.success('Referral link copied to clipboard'),
                  {
                    description: 'You can now share your referral link with a friend.',
                  };
              }}
            >
              <ClipboardIcon size={16} className='me-1' />
              Copy
            </Button>
            <ResponsiveModalClose asChild>
              <Button variant='destructive'>Close</Button>
            </ResponsiveModalClose>
          </ResponsiveModalFooter>
        </ResponsiveModalContent>
      </ResponsiveModal>
    </>
  );
}
export default ReferButton;
