import {Offer} from '../../types/offers';
import {ratingToWidth} from '../../service/utils';
import { NavLink} from 'react-router-dom';


type CardCityType = {
  item: Offer;
  cardClassName: string;
  onPointerOverCard: (offer: Offer) => void
  onPointerLeaveCard: () => void
}


function CardCity({item, cardClassName, onPointerOverCard, onPointerLeaveCard}:CardCityType): JSX.Element {

  const {placeName, price, rating, type, premium, src} = item;


  const handlePointerOver = () => {
    onPointerOverCard(item);
  }
  const handlePointerLeave = () => {
    onPointerLeaveCard();
  }


  return (
    <article className={`${cardClassName} place-card `}
             onPointerOver={handlePointerOver}
             onPointerLeave={handlePointerLeave}>
      {premium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={`${cardClassName} place-card__image-wrapper`}>
        <NavLink to={`/offer/${item.id}`}  >
          <img
            className="place-card__image"
            src={src[0]}
            width={260}
            height={200}
            alt="Place image"
          />
        </NavLink>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button
            className="place-card__bookmark-button button"
            type="button"
          >
            <svg
              className="place-card__bookmark-icon"
              width={18}
              height={19}
            >
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: ratingToWidth(rating) }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <NavLink to={`/offer/${item.id}`} >
            {placeName}
          </NavLink>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  )
}

export default CardCity;








