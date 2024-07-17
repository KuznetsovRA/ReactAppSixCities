import {Navigate} from 'react-router-dom';
import {AppRoutes} from '../../service/const';
import { ReactNode} from 'react';
import {TRootState} from '../../store/reducer';
import {connect, ConnectedProps} from 'react-redux';

interface RequiredAuthProps {
  children: ReactNode;
}

const mapStateToProps = ({user}: TRootState) => {
  const {authorizationStatus} = user;
  return {
    authorizationStatus,
  }
};

const connector = connect(mapStateToProps);

type ConnectedComponentProps = ConnectedProps<typeof connector> & RequiredAuthProps;



const RequiredAuth = ({authorizationStatus, children}: ConnectedComponentProps): JSX.Element => {

  if (!authorizationStatus) {
    return <Navigate to={AppRoutes.LOGIN} replace/>;
  }
  return <>{children}</>;
};

export {RequiredAuth};
export default connector(RequiredAuth);
