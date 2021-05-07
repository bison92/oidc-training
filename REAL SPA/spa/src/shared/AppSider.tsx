import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import * as icons from '@ant-design/icons';
import { NavLink } from 'react-router-dom';

const AppSider = () => {
  const [collapsed, setCollapsed] = useState(false);
  const onCollapse = () => {
    setCollapsed(!collapsed);
  };
  const { Sider } = Layout;
  const { DashboardOutlined, DesktopOutlined } = icons;
  return (
    <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
      <div className="logo" />
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        <Menu.Item key="1" icon={<DashboardOutlined />}>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export { AppSider };
