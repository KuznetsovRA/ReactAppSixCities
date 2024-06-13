import { Route, Routes } from 'react-router-dom';
import { AppRouteProps, RouteConfig} from '../../service/config/route-config';
import { RequiredAuth } from './required-auth';
import {Offers} from '../../types/offers';

type AppRouterProps = {
  offers: Offers;
}

export const AppRouter = ({offers}: AppRouterProps) => {
  return (
    <Routes>
      {Object.values(RouteConfig).map((route:AppRouteProps) => (
        <Route
          key={route.path}
          element={
            route.authOnly ?
              <RequiredAuth>{route.element}</RequiredAuth>
              :
              route.element
          }
          path={route.path}
        >
        </Route>
      ))}
    </Routes>
  )
}


