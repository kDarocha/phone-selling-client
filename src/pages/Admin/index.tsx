import React, { useState } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Redirect, Route, Link, withRouter, RouteComponentProps } from 'react-router-dom';

/**
 * Hooks imports
 */
import { useAuth } from 'hooks/useAuth';

/**
 * Pages imports
 */
import Home from 'pages/Admin/Home';
import ProductsManager from 'pages/Admin/ProductsManager';
import BrandsManager from 'pages/Admin/BrandsManager';

/**
 * Styles imports
 */
import styles from './styles.module.scss';

const { Content, Sider, Header } = Layout;

interface AdminProps extends RouteComponentProps {

}

function Admin({ location }: AdminProps) {
  const [ isLoggedIn, logout ] = useAuth();
  const [ isMenuCollapsed, setIsMenuCollapsed ] = useState(false);

  if (!isLoggedIn) {
    return <Redirect to="/login" />;
  }

  return (
    <Layout className={styles['Admin']}>
      <Sider
        trigger={null}
        collapsible
        collapsed={isMenuCollapsed}
      >
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={[location.pathname]}>
          <Menu.Item key="/admin">
            <Link to="/admin">
              <Icon type="home" />
              <span>Home</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="/admin/products">
            <Link to="/admin/products">
              <Icon type="video-camera" />
              <span>Products</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="/admin/brands">
            <Link to="/admin/brands">
              <Icon type="upload" />
              <span>Brands</span>
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: '#fff', padding: '0 20px' }}>
          <Icon
            className="trigger"
            type={isMenuCollapsed ? 'menu-unfold' : 'menu-fold'}
            onClick={() => setIsMenuCollapsed(!isMenuCollapsed)}
          />
        </Header>

        <Content className={styles['admin-content']}>
          <Route exact path="/admin" component={Home} />
          <Route exact path="/admin/products" component={ProductsManager} />
          <Route exact path="/admin/brands" component={BrandsManager} />
        </Content>
      </Layout>
    </Layout>
  );
}

export default withRouter(Admin);
