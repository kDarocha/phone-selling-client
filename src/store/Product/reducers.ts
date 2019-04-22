import {
  // types
  ProductActionTypes,
  ProductState,

  // action names
  FETCH_PRODUCTS,
  CREATE_PRODUCT
} from './types';

const initialState : ProductState = {
  list: []
};

export function ProductReducer(
  state = initialState,
  action: ProductActionTypes
) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        list: action.payload
      };
    case CREATE_PRODUCT:
      return {
        ...state,
        list: state.list.concat(action.payload)
      };
    default:
      return state;
  }
}
