'use client';
import PropertySideBar from '@/components/property/PropertySideBar';
import { PropertyImagesGrid } from '@/components/property/PropertyImagesGrid';
import PropertyMainSection from '@/components/property/PropertyMainSection';

const Property = () => {
  const Data = {
    sharesAvailable: 995.65,
    propertyValue: 1000000,
    balance: 40000,
  };
  return (
    <div className='p-4'>
      <PropertyImagesGrid />

      <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
        <PropertyMainSection />

        <PropertySideBar Data={Data} />
      </div>
    </div>
  );
};

export default Property;
