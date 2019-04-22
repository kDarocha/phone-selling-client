import React from 'react';
import { Col, Card, Button } from 'antd';

/**
 * Store import
 */
import { Product as ProductType } from 'store/Product/types';

/**
 * Styles import
 */
import styles from './styles.module.scss';


interface ProductProps {
  infos: ProductType
}

const { Meta } = Card;
const { REACT_APP_IMAGE_URL } = process.env;

function Product({ infos }: ProductProps) {
  return (
    <div className={styles['Product']}>
      <Col span={8} xs={24} sm={12} lg={8} xxl={6} style={{ marginBottom: 16 }}>
        <Card
          cover={infos.image && <img alt={infos.name} src={`${REACT_APP_IMAGE_URL}/storage/${infos.image}`} />}
          hoverable
        >
          <Meta
            title={infos.name}
            description={infos.description}
          />
        </Card>
      </Col>
    </div>
  );
}

export default Product;
