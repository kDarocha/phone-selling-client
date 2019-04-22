import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import axios from 'axios';

import { AppState } from 'store';
import { FETCH_PRODUCTS, CREATE_PRODUCT } from './types';

const { REACT_APP_API_URL } = process.env;

export const fetchProducts = () : ThunkAction<void, AppState, null, Action<string>> => async dispatch => {
  const products = await axios.get(`${REACT_APP_API_URL}/products`);

  dispatch({
    type: FETCH_PRODUCTS,
    payload: products.data
  });
};

export const createProduct = (
  name: string,
  description: string,
  brandId: string,
  imageUrl: string,
  amount: number
) : ThunkAction<void, AppState, null, Action<string>> => async dispatch => {

  const product = await axios.post(`${REACT_APP_API_URL}/product`, {
    name: name,
    description: description,
    brand_id: brandId,
    image_url: imageUrl,
    amount: amount
  });

  dispatch({
    type: CREATE_PRODUCT,
    payload: product
  });
}
