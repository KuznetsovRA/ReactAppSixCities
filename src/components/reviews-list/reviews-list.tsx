import {Fragment, useState} from 'react';
import React from 'react';
import {ratingToWidth} from '../../service/utils';
import dayjs from 'dayjs';
import {Offer, Offers, Review , Reviews} from '../../types/offers';
import {ReviewItem} from '../review-item/review-item';

type ReviewsListType = {
  reviews: Reviews;
}

export function ReviewsList({reviews}: ReviewsListType):JSX.Element {
  return (
    <>
      <h2 className="reviews__title">
        Reviews · <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {reviews.map((item:Review, i:number) => {
          return (
            <ReviewItem review={item} key={i}/>
          )
        })}
      </ul>
    </>

  )
}
