import { Progress } from '@/components/ui/progress';

import { Input } from '@/components/ui/input';
import BuySharesModal from './BuySharesModal';

const PropertySideBarSectionOneContainer = (Data) => {
  return (
    <div className='p-4'>
      <p className='text-muted-foreground'>Property Price</p>
      <p className='mb-4 text-3xl font-semibold text-primary'>100,000 KWD</p>
      <div className='my-2'>
        <label className='mb-1 block text-xs font-medium text-muted-foreground sm:text-sm'>Shares Available</label>
        <Progress value={10} />
        <div className='mt-1 flex justify-between text-xs text-muted-foreground'>
          <span>{0}</span>
          <span>{400}</span>
        </div>
      </div>

      <BuySharesModal Data={Data} />
    </div>
  );
};

export default PropertySideBarSectionOneContainer;
