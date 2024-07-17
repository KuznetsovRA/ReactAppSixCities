import {
  changeCity,
  changeSortType,
  fillOfferList,
  redirectToRoute,
  requireAuthorization,
  requireLogout, setAuthInfo
} from '../store/action';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {AxiosInstance} from 'axios';
import {TRootState} from '../store/reducer';

export enum ActionType {
  ChangeCity = 'data/ChangeCity',
  ChangeSortType = 'data/ChangeSortType',
  FillOfferList = 'data/FillOfferList',
  RequireAuthorization = 'user/requireAuthorization',
  RequireLogout = 'user/requireLogout',
  RedirectToRoute = 'redirectToRoute',
  SetAuthInfo = `user/SetAuthInfo`
}



export type Actions =
  | ReturnType<typeof changeCity>
  | ReturnType<typeof fillOfferList>
  | ReturnType<typeof changeSortType>
  | ReturnType<typeof requireAuthorization>
  | ReturnType<typeof requireLogout>
  | ReturnType<typeof setAuthInfo>
  | ReturnType<typeof redirectToRoute>;

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R,TRootState,  AxiosInstance, Actions>;

export type ThunkAppDispatch = ThunkDispatch< TRootState, AxiosInstance, Actions>;
