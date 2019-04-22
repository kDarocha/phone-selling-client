import { Brand } from 'store/Brand/types';

export interface Product {
  id: number;
  name: string;
  description: string;
  amout: number;
  image: string | null;
  brand_id: number;
  brand: Brand
}

export interface ProductState {
  list: Product[]
}

// Describing the different ACTION NAMES available
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const CREATE_PRODUCT = 'CREATE_PRODUCT';

interface FetchProductsAction {
  type: typeof FETCH_PRODUCTS
  payload: Product[]
}

interface CreateProduct {
  type: typeof CREATE_PRODUCT;
  payload: Product;
}

export type ProductActionTypes = FetchProductsAction | CreateProduct;
