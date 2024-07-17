import {Offer, Offers} from '../../types/offers';
import {useNavigate, useParams} from 'react-router-dom';
import {FormForComment} from '../form-for-comment/form-for-comment';
import {ReviewsList} from '../reviews-list/reviews-list';
import Map from '../map/map';
import React, {useCallback, useEffect, useState} from 'react';
import {CardCityList} from '../card-city-list/card-city-list';
import {connect, ConnectedProps} from 'react-redux';
import {getOfferById, getOffersNearby} from '../../services/offer/offer';
import {TRootState} from '../../store/reducer';
import {ratingToWidth} from '../../service/utils';

import {getReviewsByOfferId, sendCommentByOfferId} from '../../services/review/review';
import {ReviewApi} from '../../types/offers-api';
import {AppRoutes, AuthorizationStatus} from '../../service/const';
import Header from '../header/header';
import {toast} from 'react-toastify';


const mapStateToProps = ({user}: TRootState) => {
  const {authorizationStatus, authInfo} = user;
  return {
    authorizationStatus,
    authInfo,
  }
};

const connector = connect(mapStateToProps);

type ConnectedComponentProps = ConnectedProps<typeof connector> ;

function Card({ authorizationStatus}:ConnectedComponentProps): JSX.Element {


  const [offer, setOffer] = useState<Offer | null>(null);
  const [reviews, setReviews] = useState<ReviewApi[]>([]);
  const [offersNearby, setOffersNearby] = useState<Offers>([]);
  const [formButtonSubmitStatus, setFormButtonSubmitStatus] = useState<boolean>(true);
  const [, setLoadOffersNearbyError] = useState<string>(``);
  const [comment, setComment] = useState<string>(``);
  const [rating, setRating] = useState<number>(0);
  const [, setLoadReviewsError] = useState<string>('');

  const onLoadOfferError = () => {
    /*history.push(AppRoutes.NotFound);*/
  };

  const onLoadNearbyOffersSuccess = (offersNearby: Offers) => {
    setLoadOffersNearbyError('');
    setOffersNearby(offersNearby);
  };
  const onLoadNearbyOffersError = () => {
    setLoadOffersNearbyError('Error offersList nearby loading');
  };

  const { id } = useParams<{ id: string }>()

  const handleCommentChange = (newComment:string) =>{
    newComment.length > 50 ? setFormButtonSubmitStatus(false) : setFormButtonSubmitStatus(true);
    setComment(newComment);
  }

  const handleRatingChange = (newRating:number) =>{
    setRating(newRating);
  }
  const handleSubmit = () =>{
    sendCommentByOfferId(id, {
      comment,
      rating,
    })
      .then((dataFromPromise:ReviewApi) => {
        const reviewsRes = [...reviews, dataFromPromise];
        const sortReviews = reviewsRes.sort((prevReview, nextReview) => (new Date(nextReview.date).getTime() - new Date(prevReview.date).getTime()));
        setReviews(sortReviews);
        setComment(``);
        setRating(5);
        setFormButtonSubmitStatus(true);
        setLoadReviewsError(``);
      })
      .catch(() => toast.warning('Error loading comments'));
  }

  useEffect(() => {
    if (id) {
      getOfferById(id)
        .then(setOffer)
        .catch(onLoadOfferError);
      getOffersNearby(id)
        .then(onLoadNearbyOffersSuccess)
        .catch(onLoadNearbyOffersError);
    }
  }, [id]);



  const navigator = useNavigate();
  const onLoadReviewError = () => {
    navigator(AppRoutes.NOT_FOUND);
  };

  useEffect(() => {
    if (id) {
      getReviewsByOfferId(id)
        .then((data)=>{
          setReviews(data)
        })
        .catch(onLoadReviewError);
    }
  }, [id]);


  const [activeNearOffer, setActiveNearOffer] = useState<null |  Offer>(null);

  const handlePointerOver = useCallback((offer: Offer) => {
    setActiveNearOffer(offer);
  }, [])
  const handlePointerLeave = useCallback(() => {
    setActiveNearOffer(null);
  }, [])

  if (!offer) {
  return <div>Loading offers</div>;
}
  return (
    <div className="page">
      <Header/>
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {offer.src.map((item, i) => {
                return (
                  <div className="property__image-wrapper" key={i}>
                    <img
                      className="property__image"
                      src={item}
                      alt="Photo studio"
                    />
                  </div>
                )
              })}

            </div>
          </div>
          <div className="property__container container">

            <div className="property__wrapper">
              {offer.premium && (
                <div className="property__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {offer.placeName}
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
                  <span style={{ width: `${ratingToWidth(offer.rating)}` }} />
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{offer.rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {offer.type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {offer.numberOfRooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {offer.numberOfAdults}  adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">€{offer.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What's inside</h2>
                <ul className="property__inside-list">
                  {offer.inside?.map((item, i) => {
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
                      src={offer.host?.avatarUrl}
                      width={74}
                      height={74}
                      alt="Host avatar"
                    />
                  </div>
                  <span className="property__user-name">{offer.host?.name}</span>
                  {offer.host?.isPro&& (
                    <span className="property__user-status">Pro</span>
                  )}
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {offer.description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                {reviews? <ReviewsList reviews={reviews}/> : <div>Loading reviews</div>}
                {authorizationStatus===AuthorizationStatus.Auth ?
                  <FormForComment
                    onRatingChange={handleRatingChange}
                    onReviewTextChange={handleCommentChange}
                    isCommentFormButtonDisabled={formButtonSubmitStatus}
                    onSubmitCommentForm={handleSubmit}
                    reviewText={comment}
                  />:``}
              </section>
            </div>
          </div>
          <section className="property__map map">
            <Map activeOffer={activeNearOffer}/>
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            <div className="near-places__list places__list">
              {offersNearby ? (
                <CardCityList
                  offers={offersNearby}
                  cardClassName="near-places__card"
                  onPointerOverCard={handlePointerOver}
                  onPointerLeaveCard={handlePointerLeave}
                />
              ) : (
                <div className="near-places">
                  Loading near offers
                </div>
              )}
            </div>
          </section>
        </div>
      </main>
    </div>

)
}

export {Card};
export default connector(Card);
