import browserHistory from '../../browser-history';
import {Middleware} from 'redux';
import {TRootState} from '../reducer';
import {ActionType} from '../../types/action';

export const redirect: Middleware<unknown, TRootState> =
  (_store) =>
    (next) =>
      (action) => {

        if (action.type === ActionType.RedirectToRoute) {
          browserHistory.push(action.payload);
        }

        return next(action);
      };
