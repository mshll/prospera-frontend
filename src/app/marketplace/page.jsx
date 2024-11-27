import { getAllProperties } from '@/actions/properties';
import { getMyProfile } from '@/actions/users';
import HouseListingsPage from '@/components/Listings/MarketPlaceListings';
import SideBar from '@/components/Sidebar';

const TestProperties = async () => {
  const profile = await getMyProfile();
  const properties = await getAllProperties();

  return (
    <SideBar>
      <main className='relative w-full overflow-auto rounded-l-2xl bg-background'>
        <HouseListingsPage properties={properties} profile={profile} />
      </main>
    </SideBar>
  );
};

export default TestProperties;
