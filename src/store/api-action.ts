import {ThunkActionResult} from '../types/action';
import {fillOfferList, redirectToRoute, requireAuthorization, requireLogout, setAuthInfo} from './action';
import {saveToken, dropToken} from '../services/token';
import {AuthData} from '../types/auth-data';
import {toast} from 'react-toastify';
import {APIRoute, AppRoutes, AuthorizationStatus} from '../service/const';
import {OfferApi, OffersApi} from '../types/offers-api';
import {adaptOffersApiToClient} from '../adapters/adapt-server-to-client';
import {TAuthInfo} from '../types/state';

const AUTH_FAIL_MESSAGE = 'Не забудьте авторизоваться';

export const fetchOffersAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<OffersApi>(APIRoute.Hotels);
    const offers = data.map((offer: OfferApi) => adaptOffersApiToClient(offer))
    dispatch(fillOfferList(offers));
  };

export const checkAuthAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      toast.info(AUTH_FAIL_MESSAGE);
    }
  };

export const loginAction = ({login: email, password}: AuthData): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const {data} = await api.post<TAuthInfo>(APIRoute.Login, {email, password});
    saveToken(data.token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(setAuthInfo(data));
    dispatch(redirectToRoute(AppRoutes.MAIN));
  };


export const logoutAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireLogout());
  };
