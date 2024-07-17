import {UserState} from '../../types/state';
import {AppRoutes, AuthorizationStatus} from '../../service/const';
import {Link} from 'react-router-dom';
import React from 'react';
import {ThunkAppDispatch} from '../../types/action';
import {logoutAction} from '../../store/api-action';
import {connect, ConnectedProps} from 'react-redux';
import {TRootState} from '../../store/reducer';

const mapStateToProps = ({user}: TRootState) => {
  const {authorizationStatus, authInfo} = user;
  return {
    authorizationStatus,
    authInfo,
  }
};


const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
  onLogout() {
    dispatch(logoutAction());
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector> & UserState;

function SignInOut({authorizationStatus, authInfo, onLogout}: PropsFromRedux) {

  const handleLogout= (event:React.MouseEvent<HTMLAnchorElement, MouseEvent>) =>{
    event.preventDefault();
    onLogout();
  }
  if (authorizationStatus === AuthorizationStatus.Auth) {
    return (
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <a
            className="header__nav-link header__nav-link--profile"
            href="#"
          >
            <div className="header__avatar-wrapper user__avatar-wrapper">
              <img src={`${authInfo?.avatarUrl}`} alt="avatar" />
            </div>
            <span className="header__user-name user__name">
                  {authInfo?.email}
                </span>
          </a>
        </li>
        <li className="header__nav-item">
          <a className="header__nav-link" onClick={(evt)=>{handleLogout(evt)}}>
            <span className="header__signout">Sign out</span>
          </a>
        </li>
      </ul>
    )
  }
  return (
    <ul className="header__nav-list">
      <li className="header__nav-item user">
        <Link className="header__nav-link header__nav-link--profile" to={AppRoutes.LOGIN}>
          <div className="header__avatar-wrapper user__avatar-wrapper">
          </div>
          <span className="header__login">Sign in</span>
        </Link>
      </li>
    </ul>
  );
}

export {SignInOut};
export default connector(SignInOut);
