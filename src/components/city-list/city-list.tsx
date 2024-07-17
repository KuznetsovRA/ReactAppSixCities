import { Dispatch, MouseEvent } from 'react';
import {Actions} from '../../types/action';
import {changeCity} from '../../store/action';
import {connect, ConnectedProps } from 'react-redux';
import {TRootState} from '../../store/reducer';
import {CitiesName} from '../../const';

type CityListType = {
  cities: CitiesName[];
}

const mapStateToProps = ({offers}: TRootState) => {
  const {city} = offers;
  return {
    currentCity: city,
  }
};

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onChangeCity(evt: MouseEvent<HTMLAnchorElement>, city: CitiesName) {
    evt.preventDefault();
    dispatch(changeCity(city));
  }
});

const connector = connect(mapStateToProps, mapDispatchToProps)


type PropsFromRedux = ConnectedProps<typeof connector>
type ConnectedComponentProps  = PropsFromRedux & CityListType;

function CityList ({cities, currentCity, onChangeCity}:ConnectedComponentProps):JSX.Element {

  function renderCities() {
    return (
      cities.map((city: CitiesName, i:number) => (
              <li className="locations__item" key={i}>
                <a
                  className={`locations__item-link tabs__item ${currentCity === city && 'tabs__item--active'}`}
                  onClick={(evt)=>{onChangeCity(evt, city)}}
                >
                  <span>{city}</span>
                </a>
              </li>
      ))
    )
  }

  return (
    <ul className="locations__list tabs__list">
      {renderCities()}
    </ul>
  )
  }

export {CityList};
export default connector(CityList);


