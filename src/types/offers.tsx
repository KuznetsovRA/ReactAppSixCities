type Rating = 0 | 1 | 2 | 3 | 4 | 5;
type Host = {
  name: string;
  avatar: string;
  statusPRO: boolean;
  description: string;
}
type TypePlace = `Apartment` | `Room` | `House` | `Hotel`;

type Review = {
  name: string;
  avatar: string
  rating: Rating;
  date: Date;
  description: string;

};

type Reviews = Review[];


export interface Offer {
  id: number | string;
  src: string;
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
