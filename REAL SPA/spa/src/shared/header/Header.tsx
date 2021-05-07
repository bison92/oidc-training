import React from 'react';
import { Menu, Layout } from 'antd';
import { UserMenu } from './userMenu';
import Logo from './logo.png';
import './Header.less';

export const Header = () => {
  const { Header } = Layout;
  return (
    <Header className="site-layout-background header" style={{ padding: 0 }}>
      <a className="logo" href="/">
        <img alt="Logo" src={Logo} />
      </a>
      <UserMenu />
    </Header>
  );
};
