import {Offer, Offers} from '../../types/offers';
import {ratingToWidth} from '../../service/utils';

import dayjs from 'dayjs';
import {useParams} from 'react-router-dom';
import {FormForComment} from '../form-for-comment/form-for-comment';
import {ReviewsList} from '../reviews-list/reviews-list';
import Main from '../main/main';
import Map from '../map/map';
import CITY from '../../mocks/city';
import {useCallback, useState} from 'react';
import {CardCityList} from '../card-city-list/card-city-list';

type offerProps = {
  offers: Offers;
};


function Card({offers}:offerProps): JSX.Element {
  const { id } = useParams<{ id: string }>()
  const card = offers.find(offer => offer.id == id)
  if (!card) {
    return <div>Card not found</div>;
  }
  console.log(offers)
  const {src, price, premium, favorite, rating, placeName, type, numberOfRooms, numberOfAdults, inside, host, reviews} = card;

  const nearOffers = offers.slice(0,3);

  const [activeOffer, setActiveOffer] = useState<null |  Offer>(null);

  const handlePointerOver = useCallback((offer: Offer) => {
    setActiveOffer(offer);
  }, [])
  const handlePointerLeave = useCallback(() => {
    setActiveOffer(null);
  }, [])

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="/">
                <img
                  className="header__logo"
                  src="/img/logo.svg"
                  alt="6 cities logo"
                  width={81}
                  height={41}
                />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a
                    className="header__nav-link header__nav-link--profile"
                    href="#"
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">
                  Oliver.conner@gmail.com
                </span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              <div className="property__image-wrapper">
                <img
                  className="property__image"
                  src="/img/room.jpg"
                  alt="Photo studio"
                />
              </div>
              <div className="property__image-wrapper">
                <img
                  className="property__image"
                  src="/img/apartment-01.jpg"
                  alt="Photo studio"
                />
              </div>
              <div className="property__image-wrapper">
                <img
                  className="property__image"
                  src="/img/apartment-02.jpg"
                  alt="Photo studio"
                />
              </div>
              <div className="property__image-wrapper">
                <img
                  className="property__image"
                  src="/img/apartment-03.jpg"
                  alt="Photo studio"
                />
              </div>
              <div className="property__image-wrapper">
                <img
                  className="property__image"
                  src="/img/studio-01.jpg"
                  alt="Photo studio"
                />
              </div>
              <div className="property__image-wrapper">
                <img
                  className="property__image"
                  src="/img/apartment-01.jpg"
                  alt="Photo studio"
                />
              </div>
            </div>
          </div>
          <div className="property__container container">

            <div className="property__wrapper">
              {premium && (
                <div className="property__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {placeName}
                </h1>
                <button className="property__bookmark-button button" type="button">
                  <svg className="property__bookmark-icon" width={31} height={33}>
                    <use xlinkHref="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{ width: "80%" }} />
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {numberOfRooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {numberOfAdults}  adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">€{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What's inside</h2>
                <ul className="property__inside-list">
                  {inside.map((item, i) => {
                    return <li className="property__inside-item" key={i}>{item}</li>
                  })}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img
                      className="property__avatar user__avatar"
                      src={host.avatar}
                      width={74}
                      height={74}
                      alt="Host avatar"
                    />
                  </div>
                  <span className="property__user-name">{host.name}</span>
                  {host.statusPRO && (
                    <span className="property__user-status">Pro</span>
                  )}
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {host.description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <ReviewsList reviews={reviews}/>

                <FormForComment/>
              </section>
            </div>
          </div>
          <section className="property__map map">
            <Map offers={nearOffers} city={CITY} activeOffer={activeOffer}/>
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            <div className="near-places__list places__list">
              <CardCityList offers={nearOffers} cardClassName={`near-places`}
                            onPointerOverCard={handlePointerOver}
                            onPointerLeaveCard={handlePointerLeave}
              />
            </div>
          </section>
        </div>
      </main>
    </div>

  )
}

export default Card;
