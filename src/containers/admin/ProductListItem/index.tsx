import React from 'react';
import { List, Button } from 'antd';

/**
 * Store imports
 */
import { Product } from 'store/Product/types';

interface ProductListItemProps {
  item: Product
}

const { REACT_APP_IMAGE_URL } = process.env;

function ProductListItem({ item }: ProductListItemProps) {
  return (
    <List.Item
      extra={item.image && <img width={272} alt={item.name} src={`${REACT_APP_IMAGE_URL}/storage/${item.image}`} />}
      actions={[<Button type="danger">Remove</Button>, <Button type="default">Update</Button>]}
    >
      <List.Item.Meta
        title={item.name}
        description={item.description}
      />
    </List.Item>
  );
}

export default ProductListItem;
