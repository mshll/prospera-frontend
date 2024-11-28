import ListingCard from '@/components/Listings/ListingCard';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import AptOne from '@/app/assets/apt1.jpg';
import Image from 'next/image';

// const properties = [
//   {
//     id: 1,
//     title: 'Modern Villa in Salmiya',
//     price: 300000,
//     pricePerShare: 300,
//     sharesAvailable: 15,
//     totalShares: 150,
//     location: 'Kuwait City, Kuwait',
//     imageSrc: '/images/apt1.jpg',
//     isNew: true,
//   },
//   {
//     id: 2,
//     title: 'Luxury Apartment in Hawalli',
//     price: 250000,
//     pricePerShare: 500,
//     sharesAvailable: 30,
//     totalShares: 100,
//     location: 'Hawalli, Kuwait',
//     imageSrc: '/path/to/apt2.jpg',
//     isNew: false,
//   },
//   {
//     id: 3,
//     title: 'Cozy Condo in Salwa',
//     price: 180000,
//     pricePerShare: 400,
//     sharesAvailable: 50,
//     totalShares: 75,
//     location: 'Salwa, Kuwait',
//     imageSrc: '/path/to/apt3.jpg',
//     isNew: true,
//   },
//   {
//     id: 4,
//     title: 'Spacious Townhouse in Jabriya',
//     price: 350000,
//     pricePerShare: 350,
//     sharesAvailable: 20,
//     totalShares: 100,
//     location: 'Jabriya, Kuwait',
//     imageSrc: '/path/to/apt4.jpg',
//     isNew: true,
//   },
//   {
//     id: 5,
//     title: 'Charming Studio in Farwaniya',
//     price: 120000,
//     pricePerShare: 600,
//     sharesAvailable: 15,
//     totalShares: 50,
//     location: 'Farwaniya, Kuwait',
//     imageSrc: '/path/to/apt5.jpg',
//     isNew: false,
//   },
//   // Adding more properties
//   {
//     id: 6,
//     title: 'Elegant Penthouse in Salmiya',
//     price: 450000,
//     pricePerShare: 450,
//     sharesAvailable: 10,
//     totalShares: 50,
//     location: 'Salmiya, Kuwait',
//     imageSrc: '/path/to/apt6.jpg',
//     isNew: true,
//   },
//   {
//     id: 7,
//     title: 'Affordable Apartment in Mangaf',
//     price: 150000,
//     pricePerShare: 300,
//     sharesAvailable: 40,
//     totalShares: 80,
//     location: 'Mangaf, Kuwait',
//     imageSrc: '/path/to/apt7.jpg',
//     isNew: false,
//   },
//   {
//     id: 8,
//     title: 'Stylish Loft in Kuwait City',
//     price: 220000,
//     pricePerShare: 550,
//     sharesAvailable: 25,
//     totalShares: 100,
//     location: 'Kuwait City, Kuwait',
//     imageSrc: '/path/to/apt8.jpg',
//     isNew: true,
//   },
// ];

export const ListingsContainer = ({
  handleOpen,
  properties,
  handleViewSelectedLocation,
  event,
  handleHoverProperty,
  selectedProperty,
  selectedFilterOption,
  filteredProperties,
  searchTerm,
  onSearchChange,
  totalProperties,
  totalPropertiesShown,
  filterOptions,
  selectedFilter,
  setSelectedFilter,
}) => {
  return (
    <div className='hide-scrollbar size-full justify-center overflow-auto'>
      <div className='gap-6 overflow-y-auto pb-4'>
        {filteredProperties.map((property) => (
          <ListingCard
            handleHoverProperty={handleHoverProperty}
            key={property.id}
            searchTerm={searchTerm}
            onSearchChange={onSearchChange}
            selectedProperty={selectedProperty}
            {...property}
            property={property}
            handleOpen={() => handleOpen(property)}
            handleViewSelectedLocation={(event) => handleViewSelectedLocation(property, event)}
          />
        ))}
      </div>
    </div>
  );
};
