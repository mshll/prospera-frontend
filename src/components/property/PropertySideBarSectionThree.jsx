import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';

const PropertySideBarSectionThreeContainer = () => {
  return (
    <div className='p-4'>
      <h3 className='mb-4 font-medium'>Property Viewing</h3>
      <p className='mb-1 text-sm'>View the property before you invest.</p>
      <div className='mb-2 rounded bg-muted p-2'>
        <p className='text-xs text-muted-foreground'>Live inspections:</p>
        <p>Sunday - Thursday, 9:00 AM - 5:00 PM</p>
      </div>
      <Button className='w-full'>
        <Calendar className='inline-block' /> Book a viewing
      </Button>
    </div>
  );
};

export default PropertySideBarSectionThreeContainer;
