import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { List, Icon, Button } from 'antd';

/**
 * Containers import
 */
import ProductCreationForm from 'containers/admin/ProductCreationForm';
import ProductsListItem from 'containers/admin/ProductListItem';

/**
 * Store imports
 */
import { AppState } from 'store';
import { fetchProducts } from 'store/Product/actions';
import { ProductState } from 'store/Product/types';
import { BrandState } from 'store/Brand/types';

interface ProductsManagerProps {
  product: ProductState;
  brand: BrandState;
  dispatch: any;
}

function ProductsManager({ dispatch, product, brand }: ProductsManagerProps) {
  const [ isModalVisible, setIsModalVisible ] = useState(false);

  useEffect(() => {
    if (product.list.length === 0) {
      dispatch(fetchProducts());
    }
  }, []);

  return (
    <div>
      <ProductCreationForm isModalVisible={isModalVisible} onCloseModal={() => setIsModalVisible(false)} />

      <List
        dataSource={product.list}
        itemLayout="vertical"
        size="large"
        pagination={{
          pageSize: 3
        }}
        renderItem={item => <ProductsListItem item={item} />}
      />

      <Button type="primary" onClick={() => setIsModalVisible(true)}>
        Create a new product
      </Button>
    </div>
  );
}

const mapStateToProps = ({ product, brand }: AppState) => ({
  product: product,
  brand: brand
});

export default connect(mapStateToProps)(ProductsManager);
