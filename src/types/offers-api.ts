import {TypePlace, User, Coordinates} from './offers';
import {CitiesName} from '../const';

interface cityApi {
  name: CitiesName
  location: Coordinates
}

export interface OfferApi {
  id: string
  title: string
  type: TypePlace
  price: number
  previewImage: string
  city: cityApi,
  location: Coordinates,
  isFavorite: boolean,
  isPremium: boolean,
  rating: number,
}

export type OffersApi = OfferApi[];

interface hostApi {
  isPro: boolean;
  name: string;
  avatarUrl: string;
}

export interface OfferByIdApi {
  id: string
  title: string
  description: string,
  type: TypePlace,
  price: number,
  images: string[],
  city: cityApi,
  location: Coordinates,
  goods: string[],
  host: hostApi,
  isPremium: boolean,
  isFavorite: boolean,
  rating: number,
  bedrooms: number,
  maxAdults: number,
}


export interface ReviewApi {
  id: string
  comment: string
  date: Date,
  rating: number,
  user: User,
}

export interface ReviewPost {
  comment: string,
  rating: number,
}
