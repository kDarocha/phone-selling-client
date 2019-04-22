import React from 'react';
import { Layout, Menu } from 'antd';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import "antd/dist/antd.css";

/**
 * Pages imports
 */
import Home from 'pages/Home';
import Admin from 'pages/Admin';
import Login from 'pages/Login';

const { Content, Header, Footer } = Layout;

function App() {
  const content = (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Route path="/" component={Home} />
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        ©2018 Created by Kevin DA ROCHA
      </Footer>
    </Layout>
  );

  return (
    <Router>
      <Switch>
        <Route path="/admin" component={Admin} />
        <Route path="/login" component={Login} />
        <Route path="/" render={() => content} />
      </Switch>
    </Router>
  );
}

export default App;
