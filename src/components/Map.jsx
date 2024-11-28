'use client';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import Image from 'next/image';
import L from 'leaflet';
import '@/app/marketplace/style.css';
import { Button } from '@/components/ui/button';
import { MapPinHouseIcon } from 'lucide-react';
import { useEffect } from 'react';
import clsx from 'clsx';
import { formatCurrency } from '@/lib/utils';

const ChangeMapView = ({ center, zoom }) => {
  const map = useMap();

  useEffect(() => {
    if (center) {
      try {
        map.flyTo(center, zoom, {
          animate: true,
          duration: 1,
          easeLinearity: 0.1,
        });
      } catch (e) {
        console.log(e);
      }
    }
  }, [center, zoom, map]);

  return null;
};

const Map = ({ properties, viewSelectedLocation, className, handleDetailsOpen }) => {
  const customIcon = L.icon({
    iconUrl:
      'data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiAgd2lkdGg9IjI0IiAgaGVpZ2h0PSIyNCIgIHZpZXdCb3g9IjAgMCAyNCAyNCIgIGZpbGw9ImN1cnJlbnRDb2xvciIgIGNsYXNzPSJpY29uIGljb24tdGFibGVyIGljb25zLXRhYmxlci1maWxsZWQgaWNvbi10YWJsZXItbWFwLXBpbiI+PHBhdGggc3Ryb2tlPSJub25lIiBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTE4LjM2NCA0LjYzNmE5IDkgMCAwIDEgLjIwMyAxMi41MTlsLS4yMDMgLjIxbC00LjI0MyA0LjI0MmEzIDMgMCAwIDEgLTQuMDk3IC4xMzVsLS4xNDQgLS4xMzVsLTQuMjQ0IC00LjI0M2E5IDkgMCAwIDEgMTIuNzI4IC0xMi43Mjh6bS02LjM2NCAzLjM2NGEzIDMgMCAxIDAgMCA2YTMgMyAwIDAgMCAwIC02eiIgLz48L3N2Zz4=',
    iconSize: [24, 24],
    // iconAnchor: [18, 36],
    popupAnchor: [0, -20],
  });

  const defaultCenter = [29.27, 47.9774];
  const defaultZoom = 12;
  const selectedZoom = 16;

  return (
    <MapContainer
      center={defaultCenter}
      zoom={defaultZoom}
      scrollWheelZoom={false}
      style={{ width: '100%', height: '100%' }}
      className={clsx('col-span-2 shadow-lg', className)}
    >
      <ChangeMapView
        center={viewSelectedLocation ? [viewSelectedLocation.latitude, viewSelectedLocation.longitude] : defaultCenter}
        zoom={viewSelectedLocation ? selectedZoom : defaultZoom}
      />
      <TileLayer
        url='https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png?language=en'
        attribution='&copy; <a href="https://carto.com/attributions">CARTO</a>'
      />
      {properties.map((property) => (
        <Marker key={property.id} position={[property.latitude, property.longitude]} icon={customIcon}>
          {' '}
          <Popup className='custom-popup'>
            <div className='popup-content'>
              <Image
                src={property.imagesUrls[0]}
                alt={property.locationName}
                width={300}
                height={200}
                objectFit='cover'
                className='popup-image'
              />
              <div className='popup-text'>
                <h3 className='popup-title'>{property.locationName}</h3>
                <p className='popup-location'>
                  <MapPinHouseIcon className='inline h-4 w-4 text-secondary-foreground' /> {property.locationAddress}
                </p>
                <div className='popup-details'>
                  <span className='popup-price'>
                    {formatCurrency(property.currentValue / property.totalShares, { isCompact: false })} KWD
                    <span className='text-muted-foreground'> per share</span>
                  </span>
                </div>
                <div className='popup-shares'>
                  <span>{property.availableShares} shares available</span>
                </div>
                <Button variant='secondary' className='popup-button' onClick={() => handleDetailsOpen(property)}>
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
