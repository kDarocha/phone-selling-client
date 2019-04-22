import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import axios from 'axios';

import { AppState } from 'store';
import { FETCH_BRANDS } from './types';

const { REACT_APP_API_URL } = process.env;

export const fetchBrands = () : ThunkAction<void, AppState, null, Action<string>> => async dispatch => {
  const brands = await axios.get(`${REACT_APP_API_URL}/brands`);

  dispatch({
    type: FETCH_BRANDS,
    payload: brands.data
  });
};
