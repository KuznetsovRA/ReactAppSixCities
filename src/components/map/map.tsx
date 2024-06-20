import {Offer, Offers} from '../../types/offers';
import {useRef, useEffect} from 'react';
import useMap from '../../hooks/useMap';
import 'leaflet/dist/leaflet.css';

import { Marker, Icon} from 'leaflet';
import {City} from '../../types/city';

type MapProps = {
  offers: Offers;
  city: City
  activeOffer: Offer | null;
}

const defaultCustomIcon = new Icon({
  iconUrl: `/img/pin.svg`,
  iconSize: [27, 39],
  iconAnchor: [13.5, 39],
});

const currentCustomIcon = new Icon({
  iconUrl: `/img/pin-active.svg`,
  iconSize: [27, 39],
  iconAnchor: [13.5, 39],
});

function Map({ offers, city,  activeOffer }: MapProps): JSX.Element {

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {

    if (map) {
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.coordinates.latitude,
          lng: offer.coordinates.longitude,
        });

        marker.setIcon(activeOffer?.id === offer.id
          ? currentCustomIcon
          : defaultCustomIcon)
          .addTo(map);
      });
    }
  }, [map, offers, activeOffer]);


  return <div style={{height: '100%'}} ref={mapRef}></div>;
}

export default Map;

