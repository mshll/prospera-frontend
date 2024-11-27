import { Button } from '../ui/button';
import { buyShares } from '@/actions/buyShares';
import { Input } from '../ui/input';

const BuyShareForm = () => {
  return (
    <form action={buyShares}>
      <Input type='number' name='amount' placeholder='Enter amount' />
      <Button type='submit'>Buy Shares</Button>
    </form>
  );
};

export default BuyShareForm;
