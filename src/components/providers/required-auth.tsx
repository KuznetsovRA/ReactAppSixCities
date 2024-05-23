import {Navigate} from 'react-router-dom';
import {AppRoutes} from '../../service/const';
import {ReactNode} from 'react';

interface RequiredAuthProps {
  children: ReactNode;
}

export const RequiredAuth = ({children}: RequiredAuthProps): JSX.Element => {
  const auth = true;

  if (!auth) {
    return <Navigate to={AppRoutes.LOGIN} replace/>;
  }
  return <>{children}</>;
};
