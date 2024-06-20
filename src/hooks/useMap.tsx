import { MutableRefObject, useEffect, useState} from 'react';
import {Map, TileLayer} from 'leaflet';
import {Offer} from '../types/offers';
import {City} from '../types/city';

function useMap(mapRef: MutableRefObject<HTMLElement | null> , city: City): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(`useEffect`);
    if (mapRef.current !== null && map === null) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: city.latitude,
          lng: city.longitude,
        },
        zoom: 12,
      });
      const layer = new TileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        },
      );
      instance.addLayer(layer);
      setMap(instance);
    }
  }, [mapRef, map, city]);
  return map;
}

export default useMap;
