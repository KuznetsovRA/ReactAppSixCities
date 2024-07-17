import {Offer} from '../../types/offers';
import {useRef, useEffect} from 'react';
import useMap from '../../hooks/useMap';
import 'leaflet/dist/leaflet.css';
import leaflet, { Marker, LayerGroup} from 'leaflet';
import {connect, ConnectedProps} from 'react-redux';
import {CITIES} from '../../const';
import {currentCustomIcon, defaultCustomIcon} from './map-const';
import {TRootState} from '../../store/reducer';

const markersGroup: LayerGroup = leaflet.layerGroup([]);

type MapProps = {
  activeOffer: Offer | null;
}

const mapStateToProps = ({offers}: TRootState) => {
  const {city, offersList} = offers;
  return {
    currentCity: city,
    offersList,
  }
};

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & MapProps;


function Map({ offersList, currentCity,  activeOffer }: ConnectedComponentProps): JSX.Element {

  const mapRef = useRef(null);
  const map = useMap(mapRef, currentCity);

  const dataAboutCurrentCity = CITIES.filter((item)=> (item.title === currentCity))[0]

  useEffect(() => {
    if (map) {
      const markers: Marker[] = [];
      markersGroup?.clearLayers();

      offersList.forEach((offer, i) => {
        markers.push(
          new Marker({
          lat: offer.coordinates.latitude,
          lng: offer.coordinates.longitude,
        }))

        markers[i].setIcon(activeOffer?.id === offer.id
          ? currentCustomIcon
          : defaultCustomIcon)
        markersGroup.addLayer(markers[i]);

      });

      markersGroup.addTo(map);
      map.setView([dataAboutCurrentCity.latitude, dataAboutCurrentCity.longitude], dataAboutCurrentCity.zoom);
    }

  }, [map, offersList, activeOffer]);


  return <div style={{height: '100%'}} ref={mapRef}></div>;
}


export {Map};
export default connector(Map);

