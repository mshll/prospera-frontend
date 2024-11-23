import PropertySideBarSectionOneContainer from './PropertySideBarSectionOne';
import PropertySideBarSectionThreeContainer from './PropertySideBarSectionThree';
import PropertySideBarSectionTwoContainer from './PropertySideBarSectionTwo';

const Data = {
  sharesAvailable: 995.65,
  propertyValue: 1000000,
  balance: 40000,
};

const PropertySideBar = ({ Data }) => {
  return (
    <div className='col-span-1 border'>
      <PropertySideBarSectionOneContainer Data={Data} />
      <hr className='mx-3 border-secondary-foreground/20' />
      <PropertySideBarSectionTwoContainer Data={Data} />
      <hr className='mx-3 border-secondary-foreground/20' />
      <PropertySideBarSectionThreeContainer Data={Data} />
    </div>
  );
};

export default PropertySideBar;
