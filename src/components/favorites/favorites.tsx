import {Offer, Offers} from '../../types/offers';
import {ratingToWidth} from '../../service/utils';
import {TRootState} from '../../store/reducer';
import {connect, ConnectedProps} from 'react-redux';
import Header from '../header/header';


const mapStateToProps = ({offers}: TRootState) => {
  const {currentOffers} = offers;
  return {
    currentOffers,
  }
};

const connector = connect(mapStateToProps);

type ConnectedComponentProps = ConnectedProps<typeof connector>;

function Favorites({currentOffers}:ConnectedComponentProps): JSX.Element {

  const uniqueCities = Array.from(new Set(currentOffers.map(offer => offer.city)));
  return (
    <div className="page">
      <Header/>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {uniqueCities.map((item, i)=> (
                  <FavoritesLocationCity key={i} uniqueCity={item} offers={currentOffers}/>
                  )
              )}
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="">
          <img
            className="footer__logo"
            src="/img/logo.svg"
            alt="6 cities logo"
            width={64}
            height={33}
          />
        </a>
      </footer>
    </div>
  )
}

export {Favorites};
export default connector(Favorites);

type FavoritesLocationCityType = {
  uniqueCity: string;
  offers: Offers;
}

function FavoritesLocationCity({uniqueCity, offers}:FavoritesLocationCityType):JSX.Element {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{uniqueCity}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {offers.map((item)=>{
          if (item.city === uniqueCity) {
            return <FavoritesLocationCityItems offer={item}/>
          }
        })}

      </div>
    </li>
  )
}

type FavoritesLocationItemsType = {
  offer: Offer
}

function FavoritesLocationCityItems({offer}:FavoritesLocationItemsType):JSX.Element {
  const {price, placeName, src, type, rating} = offer
  return (
    <article className="favorites__card place-card">
          <div className="favorites__image-wrapper place-card__image-wrapper">
            <a href="#">
              <img
                className="place-card__image"
                src={src[0]}
                width={150}
                height={110}
                alt="Place image"
              />
            </a>
          </div>
          <div className="favorites__card-info place-card__info">
            <div className="place-card__price-wrapper">
              <div className="place-card__price">
                <b className="place-card__price-value">€{price}</b>
                <span className="place-card__price-text">
                        /&nbsp;night
                      </span>
              </div>
              <button
                className="place-card__bookmark-button place-card__bookmark-button--active button"
                type="button"
              >
                <svg
                  className="place-card__bookmark-icon"
                  width={18}
                  height={19}
                >
                  <use xlinkHref="#icon-bookmark" />
                </svg>
                <span className="visually-hidden">In bookmarks</span>
              </button>
            </div>
            <div className="place-card__rating rating">
              <div className="place-card__stars rating__stars">
                <span style={{ width: ratingToWidth(rating) }} />
                <span className="visually-hidden">Rating</span>
              </div>
            </div>
            <h2 className="place-card__name">
              <a href="#">{placeName}</a>
            </h2>
            <p className="place-card__type">{type}</p>
          </div>
        </article>
  )
}
