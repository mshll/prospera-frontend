import { Button } from '../ui/button';

const ListingsHeaderButtonsSection = () => {
  return (
    <div className='mt-6 hidden flex-wrap justify-center gap-4 sm:flex'>
      {['View all', 'Houses', 'Apartments', 'Villas', 'Condos', 'Industrial'].map((item) => (
        <Button
          key={item}
          variant='outline'
          className='h-10 w-32 rounded-lg text-sm transition duration-200 ease-in-out hover:bg-primary hover:text-primary-foreground'
        >
          {item}
        </Button>
      ))}
    </div>
  );
};

export default ListingsHeaderButtonsSection;
