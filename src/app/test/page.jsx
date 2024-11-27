// import { getAllProperties, viewAllInvestments } from '@/actions/properties';
import BuyShareForm from '@/components/property/BuyShareForm';

const view = async () => {
  // const investments = await viewAllInvestments();
  // const properties = await getAllProperties();

  return (
    <div>
      <BuyShareForm />
    </div>
  );
};

export default view;
