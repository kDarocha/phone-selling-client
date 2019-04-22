import {
  // types
  BrandActionTypes,
  BrandState,

  // action names
  FETCH_BRANDS
} from './types';

const initialState : BrandState = {
  list: []
};

export function BrandReducer(
  state = initialState,
  action: BrandActionTypes
) {
  switch (action.type) {
    case FETCH_BRANDS:
      return {
        ...state,
        list: action.payload
      };
    default:
      return state;
  }
}
