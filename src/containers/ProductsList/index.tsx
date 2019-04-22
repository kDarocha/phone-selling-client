import React, {
  // hooks
  useEffect
} from 'react';
import { connect } from 'react-redux';
import { Row } from 'antd';

/**
 * Components import
 */
import Product from 'components/Product';

/**
 * Store import
 */
import { AppState } from 'store';
import { ProductState } from 'store/Product/types';
import { fetchProducts } from 'store/Product/actions';

interface ProductsListProps {
  dispatch: any,
  product: ProductState
}

function ProductsList({ dispatch, product }: ProductsListProps) {
  useEffect(() => {
    if (product.list.length === 0) {
      dispatch(fetchProducts());
    }
  }, []);

  return (
    <Row gutter={16}>
      {product.list.map(product => <Product key={product.id} infos={product} />)}
    </Row>
  );
}

const mapStateToProps = ({ product }: AppState) => ({
  product: product
});

export default connect(mapStateToProps)(ProductsList);
