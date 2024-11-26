import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Mail, PhoneCall } from 'lucide-react';

const PropertySideBarSectionTwoContainer = () => {
  return (
    <div className='space-y-1 p-4'>
      <p className='font-medium'>Property Manager</p>

      <div className='flex items-center gap-2 pt-4'>
        <div>
          <Avatar className='h-14 w-14'>
            <AvatarImage src='https://github.com/yousefalm1.png' />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>

        <div className=''>
          <p className='font-medium text-secondary-foreground'>Yousef Almasaeed</p>
          <p className='text-xs text-muted-foreground'>Property Manager</p>
        </div>
      </div>

      <div className='flex flex-col gap-2 pt-4 md:flex-row'>
        <Button className='w-full md:w-1/2'>
          <Mail className='mr-1 inline-block' /> Mail Agent
        </Button>

        <Button variant='outline' className='w-full md:w-1/2'>
          <PhoneCall className='mr-1 inline-block' /> Call Agent
        </Button>
      </div>
    </div>
  );
};

export default PropertySideBarSectionTwoContainer;
