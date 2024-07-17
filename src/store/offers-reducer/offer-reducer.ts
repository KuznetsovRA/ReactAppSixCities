import {OfferState} from '../../types/state';
import {Actions, ActionType} from '../../types/action';
import {CITIES, SORT_TYPE_NAMES} from '../../const';
import {getOffersByCity, getOffersBySort} from '../../get-offer';

const initialState1: OfferState = {
  city: CITIES[0].title,
  offersList: [],
  currentOffers: [],
  currentSortType: SORT_TYPE_NAMES[0],
  isDataLoaded: false,
}

const offerReducer = (state: OfferState = initialState1, action: Actions) => {
  switch (action.type) {
    case ActionType.ChangeCity:{
      const offersByCity = getOffersByCity(state.offersList, action.payload);
      return{...state, city: action.payload, currentOffers: offersByCity};
    }

    case ActionType.ChangeSortType:{
      const sortedOffers = getOffersBySort(state.currentOffers, action.payload.sort);
      return{...state, currentSortType: action.payload.sort, currentOffers: sortedOffers};
    }

    case ActionType.FillOfferList:{
      const offersByCity = getOffersByCity(action.payload, state.city);
      return{...state, currentOffers: offersByCity, offersList: action.payload, isDataLoaded: true};
    }

    default:
      return state;
  }
}

export {offerReducer}
