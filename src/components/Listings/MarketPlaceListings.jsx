'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence, calcLength } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { ListingsContainer } from '@/components/Listings/ListingsContainer';
import ListingsContainerHeadings from '@/components/Listings/ListingsContainerHeadings';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import {
  ArrowRightFromLine,
  Bath,
  BedDouble,
  ExpandIcon,
  CameraIcon,
  MapPinHouseIcon,
  PhoneCall,
  Mail,
} from 'lucide-react';
import { PropertyImagesGrid } from '@/components/property/PropertyImagesGrid';
import { Button } from '@/components/ui/button';
import { IconCarGarage } from '@tabler/icons-react';
import Map from '@/components/Map';
import PropertyDetailsParagraph from '@/components/Listings/PropertyDetailsParagraph';
import BuySharesModal from '@/components/property/BuySharesModal';
import { Slider } from '@/components/ui/slider';
import useDebounce from '@/hooks/useDebouce';
import { property, set } from 'lodash';
import { Label } from '@/components/ui/label';
import SideBar from '@/components/Sidebar';
import ReferButton from '../ReferButton';
import { formatCurrency } from '@/lib/utils';
// import BuyShareModal from './BuyShareModal';

const HouseListingsPage = ({ properties, profile }) => {
  const [inputValue, setInputValue] = useState(''); // Immediate input value
  const [searchTerm, setSearchTerm] = useState(''); // Debounced search term
  const debouncedSearchTerm = useDebounce(inputValue, 300); // 300ms debounce
  const [activeView, setActiveView] = useState('map');
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [viewSelectedLocation, setViewSelectedLocation] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [userNumberOfShares, setUserNumberOfShares] = useState(1);
  const [calculatedRent, setCalculatedRent] = useState(1);
  const [hoveredProperty, setHoveredProperty] = useState(null);

  const handleHoverProperty = (property) => {
    setHoveredProperty(property);
    console.log(property);
  };

  const handleRentInputChange = (e) => {
    const rentInput = Math.min(parseInt(e.target.value), selectedProperty?.availableShares);
    setUserNumberOfShares(rentInput);

    const totalRent = (selectedProperty.rentalIncome / selectedProperty.totalShares) * rentInput;

    setCalculatedRent(totalRent ? totalRent : 0);
  };

  const filterOptions = ['All', 'Home', 'Apartment', 'Condo', 'Villa', 'Industrial'];

  useEffect(() => {
    setSearchTerm(debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleViewSelectedLocation = (property, event) => {
    event.stopPropagation();
    setViewSelectedLocation(property);
    setActiveView('map');
  };

  const handleMapOpen = () => {
    setActiveView('map');
  };

  const handleDetailsOpen = (property) => {
    setSelectedProperty(property);
    setUserNumberOfShares(1);
    setCalculatedRent(0);
    setActiveView('details');
  };

  const filteredPropertiesSearch = properties.filter(
    (property) =>
      property.locationName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.locationAddress.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const filteredProperties = filteredPropertiesSearch.filter(
    (property) => selectedFilter === 'All' || property.typeOfProperty === selectedFilter,
  );

  const totalPropertiesShown = filteredProperties.length;
  const totalProperties = properties.length;

  return (
    <div>
      <div className='grid h-screen rounded-3xl bg-background shadow-2xl lg:grid-cols-9'>
        <div className='col-span-4 row-span-full h-full w-full overflow-hidden'>
          <div className='flex h-full flex-col overflow-hidden bg-secondary p-4 px-10'>
            <ListingsContainerHeadings
              setSearchTerm={setSearchTerm}
              totalProperties={totalProperties}
              totalPropertiesShown={totalPropertiesShown}
              searchTerm={searchTerm}
              filterOptions={filterOptions}
              onSearchChange={handleInputChange}
              selectedFilter={selectedFilter}
              onS
              setSelectedFilter={setSelectedFilter}
            />
            <ListingsContainer
              filteredProperties={filteredProperties}
              handleOpen={handleDetailsOpen}
              handleHoverProperty={handleHoverProperty}
              // selectedFilterOption={selectedFilterOption}
              properties={properties}
              selectedProperty={selectedProperty}
              handleViewSelectedLocation={handleViewSelectedLocation}
            />
          </div>
        </div>

        <div className='relative col-span-5 hidden lg:block'>
          <AnimatePresence mode='wait'>
            {activeView === 'map' ? (
              <motion.div
                key='map'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className='h-full w-full'
              >
                <Map
                  properties={filteredProperties}
                  viewSelectedLocation={viewSelectedLocation}
                  hoveredProperty={hoveredProperty}
                />
              </motion.div>
            ) : (
              <motion.div
                key='details'
                initial={{ opacity: 0, x: '100%' }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: '100%' }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className='relative h-full p-4 px-2 transition-opacity duration-300'
              >
                <div className='w-full'>
                  <div className='mx-10 flex items-center justify-between'>
                    <div className='mb-[-20px]'>
                      <p className='text-2xl font-semibold'>Property Details</p>
                    </div>
                    <Button
                      onClick={handleMapOpen}
                      variant='icon'
                      className='cursor-pointer border-none bg-muted px-3 text-secondary-foreground hover:text-secondary-foreground/40'
                    >
                      <ArrowRightFromLine size={22} />
                    </Button>
                  </div>
                </div>

                {/* Property Images */}
                <PropertyImagesGrid images={selectedProperty?.imagesUrls} />

                {/* Property Details */}
                <div className='px-10'>
                  <div className='flex items-center justify-between gap-2'>
                    <div>
                      <h1 className='text-3xl font-semibold'>{selectedProperty?.locationName}</h1>

                      <p className='my-2 font-medium text-muted-foreground'>
                        <span className='mr-1 inline-block'>
                          <MapPinHouseIcon className='inline h-6 w-6 text-secondary-foreground' />
                        </span>
                        {selectedProperty.locationAddress}
                      </p>
                    </div>
                    <div>
                      <p className='text-2xl font-bold text-primary'>
                        {formatCurrency(selectedProperty.currentValue / selectedProperty.totalShares, {
                          isCompact: false,
                        })}{' '}
                        KWD <span className='text-sm font-medium text-muted-foreground'>per share</span>
                      </p>
                      <p className='text-right text-2xl font-medium text-muted-foreground'>
                        {formatCurrency(selectedProperty.currentValue, { isCompact: false })} KWD
                      </p>
                    </div>
                  </div>
                  <div className='my-4 flex flex-wrap justify-start gap-4'>
                    <Button variant='outline' size='sm' className='w-full sm:w-auto'>
                      <ExpandIcon className='mr-1 h-4 w-4' /> {selectedProperty.propertySize} sqt
                    </Button>
                    <Button variant='outline' size='sm' className='w-full sm:w-auto'>
                      <BedDouble className='mr-1 h-4 w-4' /> {selectedProperty.numberOfBedrooms} Bedrooms
                    </Button>
                    <Button variant='outline' size='sm' className='w-full sm:w-auto'>
                      <Bath className='mr-1 h-4 w-4' /> {selectedProperty.numberOfBathrooms} Bathrooms
                    </Button>

                    <Button variant='outline' className='w-full sm:w-auto'>
                      <CameraIcon className='mr-1 h-4 w-4' /> 24/7 security
                    </Button>
                  </div>

                  <div className='space-y-1 rounded-lg bg-card p-3 text-sm'>
                    <div className='mb-2 flex items-center justify-between'>
                      <div className='flex items-center space-x-2'>
                        <Input
                          type='number'
                          value={userNumberOfShares}
                          onChange={(e) => {
                            const value = Math.min(Number(e.target.value), selectedProperty?.availableShares || 0);
                            handleRentInputChange({ target: { value } });
                          }}
                          className='h-8 w-16 text-center'
                          min={1}
                          max={selectedProperty?.availableShares}
                        />
                        <span className='text-muted-foreground'>
                          / {selectedProperty?.availableShares} shares available
                        </span>
                      </div>
                      <div className='text-right'>
                        <div className='font-semibold text-green-600'>{calculatedRent.toFixed(2)} KWD</div>
                        <div className='text-xs text-muted-foreground'>Estimated Rent</div>
                      </div>
                    </div>
                    {/* <BuyShareModal /> */}

                    <Slider
                      value={[userNumberOfShares]}
                      onValueChange={(value) => handleRentInputChange({ target: { value: value[0] } })}
                      max={selectedProperty?.availableShares}
                      step={1}
                      className='pb-2 pt-5'
                      min={1}
                    />

                    {selectedProperty && (
                      <>
                        <div className='flex justify-between text-xs text-muted-foreground'>
                          <p>Monthly Property Rent: {selectedProperty.rentalIncome} KWD</p>
                        </div>
                        <div className='flex justify-between text-xs text-muted-foreground'>
                          <p>Total Shares: {selectedProperty.totalShares}</p>
                        </div>
                      </>
                    )}
                  </div>
                  <PropertyDetailsParagraph text={selectedProperty.description} />

                  <BuySharesModal
                    locationName={selectedProperty.locationName}
                    locationAddress={selectedProperty.locationAddress}
                    userBalance={profile.balance}
                    rentalIncome={selectedProperty.rentalIncome}
                    currentValue={selectedProperty.currentValue}
                    totalNumberOfShares={selectedProperty.totalShares}
                    currentShares={selectedProperty.availableShares}
                  />

                  {/* <ReferButton /> */}
                  <hr className='mt-8' />

                  <div className='mt-6'>
                    <div className='flex items-center justify-between'>
                      <div className='flex items-center gap-2'>
                        <Avatar className='h-20 w-20'>
                          <AvatarImage src='https://github.com/yousefalm1.png' />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div>
                          <h1 className='mb-2 font-semibold'>Yousef Almasaeed</h1>
                          <p className='ml-4 text-sm text-muted-foreground'>Property Manager</p>
                        </div>
                      </div>
                      <div className='flex space-x-2'>
                        <Button className='flex w-full items-center justify-center'>
                          <PhoneCall className='mr-1 h-4 w-4' /> Call Agent
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default HouseListingsPage;
