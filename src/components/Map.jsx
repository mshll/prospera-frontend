'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Image from 'next/image';
import L from 'leaflet';
import '@/app/Listings/style.css';
import { Button } from '@/components/ui/button';
import { MapPinHouseIcon } from 'lucide-react';

const customIcon = L.icon({
  iconUrl:
    'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWRvdCI+PGNpcmNsZSBjeD0iMTIuMSIgY3k9IjEyLjEiIHI9IjEiLz48L3N2Zz4=',
  iconSize: [120, 120],
  iconAnchor: [18, 36],
  popupAnchor: [42, 15],
});

const Map = ({ properties }) => {
  return (
    <MapContainer
      center={[29.27, 47.9774]} // Further adjusted latitude
      zoom={12}
      scrollWheelZoom={false}
      style={{ width: '100%', height: '100%' }}
      className='shadow-lg'
    >
      <TileLayer
        url='https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png?language=en'
        attribution='&copy; <a href="https://carto.com/attributions">CARTO</a>'
      />
      {properties.map((property) => (
        <Marker key={property.id} position={[property.latitude, property.longitude]} icon={customIcon}>
          <Popup className='custom-popup'>
            <div className='popup-content'>
              <Image
                src={property.images[0]}
                alt={property.name}
                width={300}
                height={200}
                objectFit='cover'
                className='popup-image'
              />
              <div className='popup-text'>
                <h3 className='popup-title'>{property.title}</h3>
                <p className='popup-location'>
                  <MapPinHouseIcon className='inline h-4 w-4 text-secondary-foreground' /> {property.location}
                </p>
                <div className='popup-details'>
                  <span className='popup-price'>
                    {property.pricePerShare} KWD <span className='text-muted-foreground'> /share</span>
                  </span>
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
