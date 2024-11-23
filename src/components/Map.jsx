'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Image from 'next/image';
import L from 'leaflet';
import '@/app/Listings/style.css';
import AptOne from '@/app/assets/apt1.jpg';
import AptTwo from '@/app/assets/apt2.jpg';
import AptThree from '@/app/assets/apt3.jpg';

import { Button } from '@/components/ui/button';

const properties = [
  {
    id: 1,
    name: 'Luxury Apartment in Kuwait City',
    image: AptOne,
    pricePerShare: 500,
    rentYield: 5,
    sharesAvailable: 200,
    location: 'Kuwait City, Al-Hamra Tower',
    lat: 29.3759,
    lng: 47.9774,
  },
  {
    id: 2,
    name: 'Modern Villa in Salmiya',
    image: AptTwo,
    pricePerShare: 750,
    rentYield: 6,
    sharesAvailable: 150,
    location: 'Salmiya, Area 1',
    lat: 29.3317,
    lng: 48.0657,
  },
  {
    id: 3,
    name: 'Cozy Townhouse in Fahaheel',
    image: AptThree,
    pricePerShare: 300,
    rentYield: 4.5,
    sharesAvailable: 250,
    location: 'Fahaheel, Block 5',
    lat: 29.3385,
    lng: 48.0453,
  },
];
const customIcon = L.icon({
  iconUrl:
    'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWRvdCI+PGNpcmNsZSBjeD0iMTIuMSIgY3k9IjEyLjEiIHI9IjEiLz48L3N2Zz4=',
  iconSize: [120, 120],
  iconAnchor: [18, 36],
  popupAnchor: [42, 15],
});

const Map = () => {
  return (
    <MapContainer
      center={[29.27, 47.9774]} // Further adjusted latitude
      zoom={12}
      scrollWheelZoom={false}
      style={{ width: '100%', height: '100%', borderRadius: '30px' }}
      className='shadow-lg'
    >
      <TileLayer
        url='https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png'
        attribution='&copy; <a href="https://carto.com/attributions">CARTO</a>'
      />
      {properties.map((property) => (
        <Marker key={property.id} position={[property.lat, property.lng]} icon={customIcon}>
          <Popup className='custom-popup'>
            <div className='popup-content'>
              <Image
                src={property.image}
                alt={property.name}
                width={300}
                height={200}
                objectFit='cover'
                className='popup-image'
              />
              <div className='popup-text'>
                <h3 className='popup-title'>{property.name}</h3>
                <p className='popup-location'>{property.location}</p>
                <div className='popup-details'>
                  <span className='popup-price'>{property.pricePerShare} KWD per share</span>
                  <span className='popup-yield'>{property.rentYield}% yield</span>
                </div>
                <div className='popup-shares'>
                  <span>{property.sharesAvailable} shares available</span>
                </div>
                <Button variant='secondary' className='popup-button'>
                  View Details
                </Button>
              </div>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
