import {Fragment, useState} from 'react';
import React from 'react';

export function FormForComment():JSX.Element {
  const [comment, setComment] = useState<string>(``);
  const [rating, setRating] = useState<number>(0);
  const handleCommentChange = (event:React.ChangeEvent<HTMLTextAreaElement>) =>{
    const newComment = event.target.value.toString();
    setComment(newComment);
  }

  const handleRatingChange = (event:React.ChangeEvent<HTMLInputElement>) =>{
    const newRating = parseInt(event.target.value);
    setRating(newRating);
  }
  return (
    <form className="reviews__form form" action="" method="post">
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {[5, 4, 3, 2, 1].map((value, index) => (
          <React.Fragment >
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              defaultValue={value}
              id={`${value}-stars`}
              type="radio"
              onChange={handleRatingChange}
            />
            <label
              htmlFor={`${value}-stars`}
              className="reviews__rating-label form__rating-label"
              title={value === 5 ? 'perfect' : value === 4 ? 'good' : value === 3 ? 'not bad' : value === 2 ? 'badly' : 'terribly'}
            >
              <svg className="form__star-image" width={37} height={33}>
                <use xlinkHref="#icon-star" />
              </svg>
            </label>
          </React.Fragment>
        ))}


      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        defaultValue={comment}
        onChange={handleCommentChange}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{" "}
          <span className="reviews__star">rating</span> and describe
          your stay with at least{" "}
          <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled
        >
          Submit
        </button>
      </div>
    </form>
  )
}
