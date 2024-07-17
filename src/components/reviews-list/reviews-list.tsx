import {Fragment} from 'react';
import React from 'react';
import {ReviewItem} from '../review-item/review-item';
import {ReviewApi} from '../../types/offers-api';

type ReviewsListType = {
  reviews: ReviewApi[];
}

export function ReviewsList({reviews}: ReviewsListType):JSX.Element {
  return (
    <>
      <h2 className="reviews__title">
        Reviews · <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {reviews.map((item:ReviewApi) => {
          return (
            <ReviewItem review={item} key={item.id}/>
          )
        })}
      </ul>
    </>

  )
}
