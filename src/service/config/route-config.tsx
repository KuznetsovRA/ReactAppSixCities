import {RouteProps} from 'react-router-dom';
import { AppRoutes } from '../const';
import NotFoundScreen from '../../components/not-found-screen/not-found-screen';
import Main from '../../components/main/main';
import Login from '../../components/login/login';
import Favorites from '../../components/favorites/favorites';
import Card from '../../components/card/card';


export type AppRouteProps = RouteProps & {
  authOnly: boolean;
}

export const RouteConfig: Record<AppRoutes, AppRouteProps> = {
  [AppRoutes.MAIN]: {
    path: AppRoutes.MAIN,
    element: <Main />,
    authOnly: false
  },
  [AppRoutes.LOGIN]: {
    path: AppRoutes.LOGIN,
    element: <Login />,
    authOnly: false
  },
  [AppRoutes.FAVORITES]: {
    path: AppRoutes.FAVORITES,
    element: <Favorites/>,
    authOnly: true
  },
  [AppRoutes.OFFER]: {
    path: `${AppRoutes.OFFER}/:id`,
    element: <Card />,
    authOnly: true
  },
  [AppRoutes.NOT_FOUND]: {
    path: AppRoutes.NOT_FOUND,
    element: <NotFoundScreen />,
    authOnly: false
  },
};
