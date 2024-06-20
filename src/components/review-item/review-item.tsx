import {Review} from '../../types/offers';
import {ratingToWidth} from '../../service/utils';
import dayjs from 'dayjs';


type ReviewType = {
  review: Review;
  key: number | string;
}

export function ReviewItem({review, key}: ReviewType):JSX.Element {1
  return (
    <li className="reviews__item" key={key}>
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={review.avatar}
            width={54}
            height={54}
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{review.name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: ratingToWidth(review.rating) }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          A quiet cozy and picturesque that hides behind a a river by
          the unique lightness of Amsterdam. The building is green and
          from 18th century.
        </p>
        <time className="reviews__time" dateTime={dayjs(review.date).format('YYYY-MM-DD')}>
          {dayjs(review.date).format('MMMM YYYY')}
        </time>
      </div>
    </li>
  )
}
