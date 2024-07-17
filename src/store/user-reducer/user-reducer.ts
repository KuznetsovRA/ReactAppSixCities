import {UserState} from '../../types/state';
import {Actions, ActionType} from '../../types/action';
import {AuthorizationStatus} from '../../service/const';

const initialState: UserState = {
  authorizationStatus: AuthorizationStatus.Unknown,
  authInfo: null,
};

const userReducer = (state: UserState = initialState, action: Actions): UserState => {
  switch (action.type) {
    case ActionType.RequireAuthorization: {
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    }
    case ActionType.RequireLogout: {
      return {
        ...state,
        authorizationStatus: AuthorizationStatus.NoAuth,
      };
    }
    case ActionType.SetAuthInfo: {
      return {
        ...state,
        authInfo: action.payload
      };
    }
    default:
      return state;
  }
}

export {userReducer};
