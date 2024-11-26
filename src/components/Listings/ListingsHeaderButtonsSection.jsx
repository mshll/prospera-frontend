import clsx from 'clsx';
import { Button } from '../ui/button';

const ListingsHeaderButtonsSection = ({ filterOptions, setSelectedFilter, selectedFilter }) => {
  return (
    <div className={'mb-4 mt-3 hidden flex-wrap justify-between gap-2 sm:flex'}>
      {filterOptions.map((item) => (
        <Button
          key={item}
          variant='outline'
          className={clsx(
            'h-8 w-28 rounded-lg text-sm transition duration-200 ease-in-out hover:bg-primary hover:text-primary-foreground',
            selectedFilter === item && 'bg-primary text-primary-foreground',
          )}
          onClick={() => setSelectedFilter(item)}
        >
          {item}
        </Button>
      ))}
    </div>
  );
};

export default ListingsHeaderButtonsSection;
