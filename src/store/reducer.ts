import {combineReducers} from '@reduxjs/toolkit';
import {offerReducer} from './offers-reducer/offer-reducer';
import {userReducer} from './user-reducer/user-reducer';


const rootReducer = combineReducers({
  offers: offerReducer,
  user: userReducer,
});

export type TRootState = ReturnType<typeof rootReducer>;
export default rootReducer;
