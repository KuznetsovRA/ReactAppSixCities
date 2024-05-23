import {RouteProps, Routes} from 'react-router-dom';
import { AppRoutes } from '../const';
import NotFoundScreen from '../../components/not-found-screen/not-found-screen';
import Main from '../../components/main/main';
import SignIn from '../../components/sign-in/sign-in';
import Favorites from '../../components/favorites/favorites';
import Room from '../../components/room/room';

export type AppRouteProps = RouteProps & {
  authOnly: boolean;
}

type AppScreenProps = {
  countPlace: number;
}

export const RouteConfig: Record<AppRoutes, AppRouteProps> = {
  [AppRoutes.MAIN]: {
    path: AppRoutes.MAIN,
    element: <Main countPlace={4} />,
    authOnly: false
  },
  [AppRoutes.LOGIN]: {
    path: AppRoutes.LOGIN,
    element: <SignIn />,
    authOnly: false
  },
  [AppRoutes.FAVORITES]: {
    path: AppRoutes.FAVORITES,
    element: <Favorites />,
    authOnly: true
  },
  [AppRoutes.OFFER]: {
    path: `${AppRoutes.OFFER}/:id`,
    element: <Room/>,
    authOnly: true
  },
  [AppRoutes.NOT_FOUND]: {
    path: AppRoutes.NOT_FOUND,
    element: <NotFoundScreen />,
    authOnly: false
  },
};
