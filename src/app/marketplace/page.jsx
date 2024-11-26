'use client';
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
import { set } from 'lodash';
import { Label } from '@/components/ui/label';
import SideBar from '@/components/Sidebar';

const properties = [
  {
    id: 1,
    title: "Wahab's house in ishibilya ",
    rent: 800,
    price: 300000,
    description:
      "Discover contemporary elegance in this exceptional 3-bedroom, 2.5-bathroom modern home, nestled in the vibrant Silverlake community. This architectural masterpiece boasts an open-floor layout, seamlessly blending indoor and outdoor living. Expansive floor-to-ceiling windows flood the space with natural light, offering breathtaking city views that change with the time of day. The gourmet kitchen is a chef's dream, equipped with high-end appliances and sleek countertops, perfect for entertaining guests. The master suite is a serene retreat featuring a luxurious en-suite bathroom with spa-like amenities. Enjoy evenings on the spacious terrace, where you can unwind while taking in stunning sunsets. This villa is not just a home; it’s a lifestyle waiting to be embraced.",
    pricePerShare: 300,
    propertyValue: 1000000,
    sharesAvailable: 15,
    type: 'Houses',
    totalShares: 150,
    location: 'Kuwait City, Kuwait',
    latitude: '29.3759', // Approximate latitude for Kuwait City
    longitude: '47.9774', // Approximate longitude for Kuwait City
    images: [
      'https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG91c2V8ZW58MHx8MHx8fDA%3D',
      'https://plus.unsplash.com/premium_photo-1676968002767-1f6a09891350?q=80&w=3987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1615874694520-474822394e73?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGhvdXNlJTIwaW50ZXJpb3J8ZW58MHx8MHx8fDA%3D',
      'https://plus.unsplash.com/premium_photo-1676823553207-758c7a66e9bb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cm9vbXxlbnwwfHwwfHwwfDA%3D%3D',
      'https://images.unsplash.com/photo-1616486701797-0f33f61038ec?q=80&w=4160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
    isNew: true,
  },
  {
    id: 2,
    title: 'Luxury Apartment in Hawalli',
    price: 250000,
    description:
      'Experience luxury living in this stunning apartment that redefines modern comfort. With 2 bedrooms and 2 bathrooms, this residence features an open-concept design that maximizes space and light. The living area flows effortlessly into a state-of-the-art kitchen, complete with premium appliances and elegant finishes, making it ideal for both casual meals and formal entertaining. Step out onto your private balcony to enjoy panoramic views of the city skyline, perfect for morning coffees or evening cocktails. Located in the heart of Hawalli, this apartment is surrounded by upscale dining, shopping, and entertainment options, making it a perfect urban oasis for those who appreciate convenience and style.',
    pricePerShare: 500,
    propertyValue: 1000000,
    rent: 1200,

    type: 'Apartments',
    sharesAvailable: 30,
    totalShares: 100,
    location: 'Hawalli, Kuwait',
    latitude: '29.3581', // Approximate latitude for Hawalli
    longitude: '48.0214', // Approximate longitude for Hawalli
    images: [
      'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG91c2V8ZW58MHx8MHx8fDA%3D',
      'https://plus.unsplash.com/premium_photo-1676823553207-758c7a66e9bb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cm9vbXxlbnwwfHwwfHx8MA%3D%3D',
      'https://images.unsplash.com/photo-1616486701797-0f33f61038ec?q=80&w=4160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://plus.unsplash.com/premium_photo-1676968002767-1f6a09891350?q=80&w=3987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1615874694520-474822394e73?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGhvdXNlJTIwaW50ZXJpb3J8ZW58MHx8MHx8fDA%3D',
    ],
    isNew: false,
  },
  {
    id: 3,
    title: 'Cozy Condo in Salwa',
    price: 180000,
    description:
      'Welcome to your new sanctuary—a cozy condo that perfectly balances comfort and convenience. This charming 2-bedroom home is designed for small families or individuals seeking a peaceful retreat. The inviting living area features warm tones and ample natural light, creating a welcoming atmosphere. The well-appointed kitchen offers modern appliances and plenty of storage space, ideal for culinary enthusiasts. Enjoy quiet evenings on your private balcony overlooking lush greenery or take advantage of nearby parks for outdoor activities. Located in the friendly community of Salwa, this condo provides easy access to local amenities while offering a tranquil escape from the hustle and bustle of city life.',
    pricePerShare: 400,
    propertyValue: 1000000,
    type: 'Condos',
    rent: 1000,
    sharesAvailable: 50,
    totalShares: 75,
    location: 'Salwa, Kuwait',
    latitude: '29.3231', // Approximate latitude for Salwa
    longitude: '47.9471', // Approximate longitude for Salwa
    images: [
      'https://plus.unsplash.com/premium_photo-1661954372617-15780178eb2e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGhvdXNlfGVufDB8fDB8fHww',
      'https://plus.unsplash.com/premium_photo-1676321046262-4978a752fb15?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhvdXNlJTIwaW5zaWRlfGVufDB8fDB8fHww',
      'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGhvdXNlJTIwaW50ZXJpb3J8ZW58MHx8MHx8fDA%3D',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1499916078039-922301b0eb9b?q=80&w=2585&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
    isNew: true,
  },
  {
    id: 4,
    title: 'Spacious Townhouse in Jabriya',
    price: 350000,
    description:
      'Step into this spacious townhouse that embodies family-friendly living at its finest. With 4 bedrooms and 3 bathrooms, this home offers ample space for everyone to thrive. The expansive living room is perfect for family gatherings or entertaining friends, while the modern kitchen features high-quality finishes and plenty of counter space for meal preparation. Each bedroom is generously sized, providing comfort and privacy for all family members. Outside, enjoy a beautifully landscaped garden that serves as an ideal playground for children or a serene spot for relaxation. Located in the sought-after neighborhood of Jabriya, this townhouse is close to schools, parks, and shopping centers, making it an excellent choice for families looking to settle down.',
    pricePerShare: 350,
    propertyValue: 1000000,

    rent: 900,
    type: 'Apartments',
    sharesAvailable: 20,
    totalShares: 100,
    location: 'Jabriya, Kuwait',
    latitude: '29.3672', // Approximate latitude for Jabriya
    longitude: '48.0695', // Approximate longitude for Jabriya
    images: [
      'https://plus.unsplash.com/premium_photo-1670275658703-33fb95fe50d8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA7MDFsZWFybmVzc29uYWxlcnRpb25hbC5jb20vY29uZG9ycy9zdGFydC5odG1sPzEwMDM5NzE5NjU5NjQzNTAwODQzNjM5NjQzNTg5NzI5OTI5NjQzNTg5NzI5OTI5NjQzNTg5NzI5OTI5NjQzNTg5NzI5OTI5NjQzNTg5NzI5OTI5NjQzNTg5NzI5OTI5NjQzNTg5NzI5OTI5NjQzNTg5NzI5OTI5NjQzNTg5NzI5OTI5NjQzNTg5NzI5OTI5NjQzNTg5NzI5OTI5NjQzNTg5NzI5OTI5NjQzNTg5NzI5OTI5NjQzNTg1NDgwMDU1MTgwMDU1MTgwMDU1MTgwMDU1MTgwMDU1MTgwMDU1MTgwMDU1MTgwMDU1MTgwMDU1MTgwMDU1MTgwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAAwMA==',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=3000&auto=format&fit=crop&ixlib=rB-jpFqXkBqXkBqXkBqXkBqXkBqXkBqXkBqXkBqXkBqXkBqXkBqXkBqXkBqXkBqXkBqXkBqXkBqXkBqXkBqXkBqXkBqXkBqXkBqXkBqXkBqXkBqXkBqXkBqXkBqXkBqXkBqXkBqXkBqXkBqXkBqXk--rHjOAw==',
      'https://images.unsplash.com/photo-1499916078039-922301b0eb9b?q=%20800&amp;auto=format&amp;fit=crop&amp;ixlib=rBxFjvFjvFjvFjvFjvFjvFjvFjvFjvFjvFjvFjvFjvFjvFjvFjvFjvFjvFjvFjvFjvFjvFjvFjvFjvFjvFj--rHjOAw==',
      'https://plus.unsplash.com/premium_photo--1676321046262--497--rHjOAw==',
      'https://images.unsplash.com/photo--161648602942--aaa4789e8c9a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
    isNew: true,
  },
];

const HouseListingsPage = () => {
  const [inputValue, setInputValue] = useState(''); // Immediate input value
  const [searchTerm, setSearchTerm] = useState(''); // Debounced search term
  const debouncedSearchTerm = useDebounce(inputValue, 300); // 300ms debounce
  const [activeView, setActiveView] = useState('map');
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [viewSelectedLocation, setViewSelectedLocation] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [userNumberOfShares, setUserNumberOfShares] = useState(1);
  const [calculatedRent, setCalculatedRent] = useState(1);
  const handleRentInputChange = (e) => {
    const rentInput = Math.min(parseInt(e.target.value), selectedProperty?.sharesAvailable);
    setUserNumberOfShares(rentInput);

    const totalRent = (selectedProperty.rent / selectedProperty.totalShares) * rentInput;

    setCalculatedRent(totalRent ? totalRent : 0);
  };

  const filterOptions = ['All', 'Houses', 'Apartments', 'Villas', 'Condos', 'Industrial'];

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
      property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.location.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const filteredProperties = filteredPropertiesSearch.filter(
    (property) => selectedFilter === 'All' || property.type === selectedFilter,
  );

  const totalPropertiesShown = filteredProperties.length;
  const totalProperties = properties.length;

  return (
    <SideBar>
      <main className='relative w-full overflow-auto rounded-l-2xl bg-background'>
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
                    <Map properties={filteredProperties} viewSelectedLocation={viewSelectedLocation} />
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
                    <PropertyImagesGrid images={selectedProperty?.images} />

                    {/* Property Details */}
                    <div className='px-10'>
                      <div className='flex items-center justify-between gap-2'>
                        <div>
                          <h1 className='text-3xl font-semibold'>{selectedProperty?.title}</h1>

                          <p className='my-2 font-medium text-muted-foreground'>
                            <span className='mr-1 inline-block'>
                              <MapPinHouseIcon className='inline h-6 w-6 text-secondary-foreground' />
                            </span>
                            {selectedProperty.location}
                          </p>
                        </div>
                        <div>
                          <p className='text-2xl font-bold text-primary'>
                            400 KWD <span className='text-sm font-medium text-muted-foreground'>/ Share</span>
                          </p>
                          <p className='text-right text-2xl font-medium text-muted-foreground'>
                            {selectedProperty.propertyValue} KWD
                          </p>
                        </div>
                      </div>
                      <div className='my-4 flex flex-wrap justify-start gap-4'>
                        <Button variant='outline' size='sm' className='w-full sm:w-auto'>
                          <ExpandIcon className='mr-1 h-4 w-4' /> 100sqt
                        </Button>
                        <Button variant='outline' size='sm' className='w-full sm:w-auto'>
                          <BedDouble className='mr-1 h-4 w-4' /> 3 Bedrooms
                        </Button>
                        <Button variant='outline' size='sm' className='w-full sm:w-auto'>
                          <Bath className='mr-1 h-4 w-4' /> 2 Bathrooms
                        </Button>
                        <Button variant='outline' size='sm' className='w-full sm:w-auto'>
                          <IconCarGarage className='mr-1 h-4 w-4' /> 2 Garages
                        </Button>
                        <Button variant='outline' className='w-full sm:w-auto'>
                          <CameraIcon className='mr-1 h-4 w-4' /> 24/7 security
                        </Button>
                      </div>

                      <div className='rounded-lg bg-card p-3 text-sm'>
                        <div className='mb-2 flex items-center justify-between'>
                          <div className='flex items-center space-x-2'>
                            <Input
                              type='number'
                              value={userNumberOfShares}
                              onChange={(e) => {
                                const value = Math.min(Number(e.target.value), selectedProperty?.sharesAvailable || 0);
                                handleRentInputChange({ target: { value } });
                              }}
                              className='h-8 w-16 text-center'
                              min={1}
                              max={selectedProperty?.sharesAvailable}
                            />
                            <span className='text-muted-foreground'>
                              / {selectedProperty?.sharesAvailable} shares available
                            </span>
                          </div>
                          <div className='text-right'>
                            <div className='font-semibold text-green-600'>{calculatedRent.toFixed(2)} KWD</div>
                            <div className='text-xs text-muted-foreground'>Estimated Rent</div>
                          </div>
                        </div>

                        <Slider
                          value={[userNumberOfShares]}
                          onValueChange={(value) => handleRentInputChange({ target: { value: value[0] } })}
                          max={selectedProperty?.sharesAvailable}
                          step={1}
                          className='my-2'
                          min={1}
                        />

                        {selectedProperty && (
                          <div className='flex justify-between text-xs text-muted-foreground'>
                            <p>Monthly Property Rent: {selectedProperty.rent} KWD</p>
                          </div>
                        )}
                      </div>
                      <PropertyDetailsParagraph text={selectedProperty.description} />

                      <BuySharesModal />
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
                              <PhoneCall className='mr-1' /> Call Agent
                            </Button>
                            <Button variant='outline' className='flex w-full items-center justify-center'>
                              <Mail />
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
      </main>
    </SideBar>
  );
};

export default HouseListingsPage;
