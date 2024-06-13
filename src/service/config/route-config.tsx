import {RouteProps, Routes} from 'react-router-dom';
import { AppRoutes } from '../const';
import NotFoundScreen from '../../components/not-found-screen/not-found-screen';
import Main from '../../components/main/main';
import Login from '../../components/login/login';
import Favorites from '../../components/favorites/favorites';
import Card from '../../components/card/card';

import {offers} from '../../mocks/offers';

export type AppRouteProps = RouteProps & {
  authOnly: boolean;
}

type AppScreenProps = {
  countPlace: number;
}

export const RouteConfig: Record<AppRoutes, AppRouteProps> = {
  [AppRoutes.MAIN]: {
    path: AppRoutes.MAIN,
    element: <Main offers={offers} />,
    authOnly: false
  },
  [AppRoutes.LOGIN]: {
    path: AppRoutes.LOGIN,
    element: <Login />,
    authOnly: false
  },
  [AppRoutes.FAVORITES]: {
    path: AppRoutes.FAVORITES,
    element: <Favorites offers={offers}/>,
    authOnly: true
  },
  [AppRoutes.OFFER]: {
    path: `${AppRoutes.OFFER}/:id`,
    element: <Card offers={offers}/>,
    authOnly: true
  },
  [AppRoutes.NOT_FOUND]: {
    path: AppRoutes.NOT_FOUND,
    element: <NotFoundScreen />,
    authOnly: false
  },
};
