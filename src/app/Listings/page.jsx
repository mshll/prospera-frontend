'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { ListingsContainer } from '@/components/Listings/ListingsContainer';
import ListingsContainerHeadings from '@/components/Listings/ListingsContainerHeadings';
import { Input } from '@/components/ui/input';
import { Bath, BathIcon, BedDouble, Car, ExpandIcon, MapPin, MapPinHouseIcon, SearchIcon } from 'lucide-react';
import { PropertyImagesGrid } from '@/components/property/PropertyImagesGrid';
import { Button } from '@/components/ui/button';
import { IconCarGarage, IconCircleXFilled, IconPinFilled } from '@tabler/icons-react';
import Map from '@/components/Map';
import PropertyDetailsParagraph from '@/components/Listings/PropertyDetailsParagraph';

const HouseListingsPage = () => {
  const [activeView, setActiveView] = useState('map');
  const [selectedProperty, setSelectedProperty] = useState(null); // State for selected property
  const [viewSelectedLocation, SetViewSelectedLocation] = useState(null);

  const handleViewSelectedLocation = (property) => {
    SetViewSelectedLocation(property);
  };

  const handleMapOpen = () => {
    setActiveView('map');
  };

  const handleDetailsOpen = (property) => {
    setSelectedProperty(property); // Set selected property

    setActiveView('details');
  };

  const properties = [
    {
      id: 1,
      title: 'Modern Villa in Salmiya',
      price: 300000,
      description:
        "Discover contemporary elegance in this exceptional 3-bedroom, 2.5-bathroom modern home, nestled in the vibrant Silverlake community. This architectural masterpiece boasts an open-floor layout, seamlessly blending indoor and outdoor living. Expansive floor-to-ceiling windows flood the space with natural light, offering breathtaking city views that change with the time of day. The gourmet kitchen is a chef's dream, equipped with high-end appliances and sleek countertops, perfect for entertaining guests. The master suite is a serene retreat featuring a luxurious en-suite bathroom with spa-like amenities. Enjoy evenings on the spacious terrace, where you can unwind while taking in stunning sunsets. This villa is not just a home; it’s a lifestyle waiting to be embraced.",
      pricePerShare: 300,

      sharesAvailable: 15,
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
  return (
    <div className='relative w-full'>
      <div>
        {/* <div className='relative'>
          <Input placeholder='Search for a city or property...' className='py-2 pl-10 pr-4 focus:border-transparent' />
          <SearchIcon className='absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-500' />
        </div> */}
        <Card className='grid h-screen rounded-3xl bg-background shadow-2xl lg:grid-cols-2'>
          <div className='row-span-full h-full w-full overflow-hidden'>
            <div className='flex h-full flex-col overflow-hidden bg-secondary p-4 px-10'>
              <ListingsContainerHeadings />
              <ListingsContainer
                handleOpen={handleDetailsOpen}
                properties={properties}
                handleViewSelectedLocation={handleViewSelectedLocation}
              />
            </div>
          </div>

          <div className='relative hidden lg:block'>
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
                  <Map properties={properties} />
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
                  {/* Property Images */}
                  <PropertyImagesGrid images={selectedProperty?.images} />

                  {/* Property Details */}
                  <div className='px-10'>
                    <button
                      onClick={handleMapOpen}
                      className='absolute left-[-15px] top-4 cursor-pointer border-none bg-transparent text-secondary-foreground hover:text-secondary-foreground/70'
                      aria-label='Open Map'
                    >
                      <IconCircleXFilled size={30} />
                    </button>
                    <div className='flex items-center justify-between gap-2'>
                      <div>
                        <h1 className='text-3xl font-semibold'>{selectedProperty?.title}</h1>
                        <p className='my-2 font-semibold text-muted-foreground'>
                          <span className='mr-1 inline-block'>
                            <MapPinHouseIcon className='inline h-6 w-6 text-secondary-foreground' />
                          </span>
                          {selectedProperty.location}
                        </p>
                      </div>
                      <div>
                        <p className='j text-2xl font-bold text-primary'>
                          400 KWD <span className='text-sm font-medium text-muted-foreground'>/ Share</span>
                        </p>
                      </div>
                    </div>

                    <PropertyDetailsParagraph text={selectedProperty.description} />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default HouseListingsPage;
