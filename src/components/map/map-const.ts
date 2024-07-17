import {Icon} from 'leaflet';

export const defaultCustomIcon = new Icon({
  iconUrl: `/img/pin.svg`,
  iconSize: [27, 39],
  iconAnchor: [13.5, 39],
});

export const currentCustomIcon = new Icon({
  iconUrl: `/img/pin-active.svg`,
  iconSize: [27, 39],
  iconAnchor: [13.5, 39],
});
