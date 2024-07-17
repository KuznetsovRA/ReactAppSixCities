import { MutableRefObject, useEffect, useState} from 'react';
import {Map, TileLayer} from 'leaflet';
import {CITIES, CitiesName} from '../const';

function useMap(mapRef: MutableRefObject<HTMLElement | null> , city: CitiesName): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const currentCity = CITIES.filter((item) => item.title === city);

  useEffect(() => {
    if (mapRef.current !== null && map === null) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: currentCity[0].latitude,
          lng: currentCity[0].longitude,
        },
        zoom: currentCity[0].zoom,
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
