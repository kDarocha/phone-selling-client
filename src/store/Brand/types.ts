export interface Brand {
  id: number;
  name: string;
}

export interface BrandState {
  list: Brand[]
}

// Describing the different ACTION NAMES available
export const FETCH_BRANDS = 'FETCH_BRANDS';

interface FetchBrandsAction {
  type: typeof FETCH_BRANDS
  payload: Brand[]
}

export type BrandActionTypes = FetchBrandsAction;
