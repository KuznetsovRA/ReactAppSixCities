import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import thunk from 'redux-thunk';
import {applyMiddleware, legacy_createStore as createStore} from '@reduxjs/toolkit';
import {composeWithDevTools} from '@redux-devtools/extension';
import {Provider} from 'react-redux';
import rootReducer from './store/reducer';
import {createAPI} from './services/api';
import {requireAuthorization} from './store/action';
import {AuthorizationStatus} from './service/const';
import {ThunkAppDispatch} from './types/action';
import {checkAuthAction, fetchOffersAction} from './store/api-action';
import {ToastContainer} from 'react-toastify';
import {redirect} from './store/middlewares/redirect';



export const api = createAPI(
  () => store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth))
);

const store = createStore(
  rootReducer,
    composeWithDevTools(
      applyMiddleware(thunk.withExtraArgument(api)),
      applyMiddleware(redirect),
    ),
);

(store.dispatch as ThunkAppDispatch)(checkAuthAction());
(store.dispatch as ThunkAppDispatch)(fetchOffersAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <Provider store={store}>
    <App/>
    <ToastContainer/>
  </Provider>



);



