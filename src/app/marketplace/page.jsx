import { getAllProperties } from '@/actions/properties';
import { myProfile } from '@/actions/users';
import HouseListingsPage from '@/components/Listings/MarketPlaceListings';
import SideBar from '@/components/Sidebar';

const TestProperties = async () => {
  const properties = await getAllProperties();
  const profile = await myProfile();
  return (
    <SideBar>
      <main className='relative w-full overflow-auto rounded-l-2xl bg-background'>
        <HouseListingsPage properties={properties} profile={profile} />
      </main>
    </SideBar>
  );
};

export default TestProperties;
