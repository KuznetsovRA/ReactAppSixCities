import {Offer} from '../../types/offers';
import {CardCityList} from '../card-city-list/card-city-list';
import Map from '../map/map';
import {useCallback, useState} from 'react';
import CityList from '../city-list/city-list';
import {connect, ConnectedProps} from 'react-redux';
import MainEmpty from '../main-empty/main-empty';
import SortType from '../sort-type/sort-type';
import {TRootState} from '../../store/reducer';
import {CitiesList} from '../../const';
import Header from '../header/header';


const mapStateToProps = ({offers, user}: TRootState) => {
  const {city, currentOffers} = offers;
  const {authInfo, authorizationStatus} = user;
  return {
    currentCity: city,
    currentOffers,
    authInfo,
    authorizationStatus
  }
};




const connector = connect(mapStateToProps);

type ConnectedComponentProps = ConnectedProps<typeof connector>;


function Main({currentCity, currentOffers}: ConnectedComponentProps): JSX.Element {
  console.log(currentCity);
  const [activeOffer, setActiveOffer] = useState<null |  Offer>(null);

  const handlePointerOver = useCallback((offer: Offer) => {
    setActiveOffer(offer);
  }, [])
  const handlePointerLeave = useCallback(() => {
    setActiveOffer(null);
  }, [])

  return (
    <div className="page page--gray page--main">
      <Header/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CityList cities={CitiesList}/>
          </section>
        </div>
        <div className="cities">
          {currentOffers.length === 0 ?
            <MainEmpty/> :
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{currentOffers.length} places to stay in {currentCity}</b>
                <SortType/>
                <div className="cities__places-list places__list tabs__content">
                  <CardCityList offers={currentOffers} cardClassName={`cities__place-card`} onPointerOverCard={handlePointerOver} onPointerLeaveCard={handlePointerLeave}/>
                </div>
              </section>
              <div className="cities__right-section">
                <section className="cities__map map" >
                  <Map activeOffer={activeOffer}/>
                </section>;
              </div>
            </div>
          }
        </div>
      </main>
  </div>
  )
}

export {Main};
export default connector(Main);
