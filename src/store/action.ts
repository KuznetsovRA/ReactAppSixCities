import {ActionType} from '../types/action';
import {Offers} from '../types/offers';
import {SortNameType} from '../types/const';
import {AppRoutes, AuthorizationStatus} from '../service/const';
import {CitiesName} from '../const';
import {TAuthInfo} from '../types/state';

export const changeCity = (city:CitiesName) => ({
  type: ActionType.ChangeCity,
  payload:  city,
} as const)

export const changeSortType = (sort:SortNameType) => ({
  type: ActionType.ChangeSortType,
  payload:  {
    sort,
  }
} as const)

export const fillOfferList = (offers: Offers) => ({
  type: ActionType.FillOfferList,
  payload: offers,
} as const)


export const requireAuthorization = (authStatus: AuthorizationStatus) => ({
  type: ActionType.RequireAuthorization,
  payload: authStatus,
} as const);

export const requireLogout = () => ({
  type: ActionType.RequireLogout,
} as const);

export const setAuthInfo = (authInfo: TAuthInfo) => ({
  type: ActionType.SetAuthInfo,
  payload: authInfo,
} as const);

export const redirectToRoute = (url: AppRoutes) => ({
  type: ActionType.RedirectToRoute,
  payload: url,
} as const);
