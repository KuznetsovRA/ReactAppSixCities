type Rating = 0 | 1 | 2 | 3 | 4 | 5;
type Host = {
  name: string;
  avatar: string;
  statusPRO: boolean;
  description: string;
}
type TypePlace = `Apartment` | `Room` | `House` | `Hotel`;

export interface Review {
  name: string;
  avatar: string
  rating: Rating;
  date: Date;
  description: string;
}

export type Reviews = Review[];

export type Сoordinates = {
  latitude: number;
  longitude: number;
};


export interface Offer {
  id: number | string;
  src: string;
  coordinates: Сoordinates;
  price: number;
  premium: boolean;
  favorite: boolean;
  rating: Rating;
  placeName: string;
  type: TypePlace;
  numberOfRooms: number;
  numberOfAdults: number;
  city: string;
  inside: string[];
  host: Host;
  reviews: Reviews;
};

export type  Offers = Offer[];
