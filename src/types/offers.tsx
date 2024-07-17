// noinspection JSUnnecessarySemicolon

import {CitiesName} from '../const';

export type User = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}
export type TypePlace = `Apartment` | `Room` | `House` | `Hotel`;

export interface Review {
  name: string;
  avatar: string
  rating: number;
  date: Date;
  description: string;
}

export type Reviews = Review[];

export type Coordinates = {
  latitude: number;
  longitude: number;
  zoom: number;
};


export interface Offer {
  id: number | string;
  src: string[];
  description: string | null;
  coordinates: Coordinates;
  price: number;
  premium: boolean;
  favorite: boolean;
  rating: number;
  placeName: string;
  type: TypePlace;
  numberOfRooms: number| null;
  numberOfAdults: number| null;
  city: CitiesName;
  inside: string[] | null;
  host: User | null;
  reviews: Reviews | null;
}

export type  Offers = Offer[];
