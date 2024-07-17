import {Offer} from '../types/offers';
import {OfferApi, OfferByIdApi, ReviewApi} from '../types/offers-api';

export function adaptOffersApiToClient(jsonOffer: OfferApi):Offer {
  return {
    id: jsonOffer.id,
    src: [jsonOffer.previewImage],
    description: null,
    coordinates: jsonOffer.location,
    price: jsonOffer.price,
    premium: jsonOffer.isPremium,
    favorite: jsonOffer.isFavorite,
    rating: jsonOffer.rating,
    placeName: jsonOffer.title,
    type: jsonOffer.type,
    numberOfRooms: null,
    numberOfAdults: null,
    city: jsonOffer.city.name,
    inside: null,
    host: null,
    reviews: null,
  }
}

export function adaptOfferByIdApiToClient(jsonOffer: OfferByIdApi):Offer {
  return {
    id: jsonOffer.id,
    src: jsonOffer.images,
    description: jsonOffer.description,
    coordinates: jsonOffer.location,
    price: jsonOffer.price,
    premium: jsonOffer.isPremium,
    favorite: jsonOffer.isFavorite,
    rating: jsonOffer.rating,
    placeName: jsonOffer.title,
    type: jsonOffer.type,
    numberOfRooms: jsonOffer.bedrooms,
    numberOfAdults: jsonOffer.maxAdults,
    city: jsonOffer.city.name,
    inside: jsonOffer.goods,
    host: {
      name: jsonOffer.host.name,
      avatarUrl: jsonOffer.host.avatarUrl,
      isPro: jsonOffer.host.isPro,
    },
    reviews: null,
  }
}

export function adaptReviewToClient(jsonReview: ReviewApi):ReviewApi {
  return {
    id: jsonReview.id,
    comment: jsonReview.comment,
    date: jsonReview.date,
    rating: jsonReview.rating,
    user: {
      name: jsonReview.user.name,
      avatarUrl: jsonReview.user.avatarUrl,
      isPro: jsonReview.user.isPro,
    },
  }
}


