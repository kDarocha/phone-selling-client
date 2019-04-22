import React from 'react';
import { Breadcrumb, Layout } from 'antd';

/**
 * Containers import
 */
import ProductsList from 'containers/ProductsList';

/**
 * Styles import
 */
import styles from './styles.module.scss';

const { Content } = Layout;

function Home() {
  return (
    <div className={styles['Home']}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
      </Breadcrumb>

      <Layout style={{ padding: '24px 0', background: '#fff' }}>
        <Content style={{ padding: '0 24px', minHeight: 280 }}>
          <ProductsList />
        </Content>
      </Layout>
    </div>
  );
}

export default Home;
