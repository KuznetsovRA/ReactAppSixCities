import {Offers} from './offers';
import {SortNameType} from './const';
import {AuthorizationStatus} from '../service/const';
import {CitiesName} from '../const';

export type OfferState = {
  city: CitiesName,
  offersList: Offers,
  currentOffers: Offers
  currentSortType: SortNameType,
  isDataLoaded: boolean,
}

export type UserState = {
  authorizationStatus: AuthorizationStatus,
  authInfo: TAuthInfo | null,
}

export type TAuthInfo = {
  id: number,
  email: string,
  avatarUrl: string,
  isPro: string,
  name: string,
  token: string,
}
