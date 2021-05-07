import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Menu, Dropdown } from 'antd';
import './UserMenu.less';
import { useHistory, useLocation } from 'react-router';

export const UserMenu = () => {
  const history = useHistory();
  const LoggedInMenu = (
    <Menu>
      <Menu.Item onClick={() => history.push('/dashboard')}>Dashboard</Menu.Item>
      <Menu.Item danger onClick={() => {}}>
        Logout
      </Menu.Item>
    </Menu>
  );
  return (
    <div className="usermenu">
      {/* <Dropdown overlay={LoggedInMenu}>
        <div className="usermenu-loggedin">
          {"username"}
          <UserOutlined className="usermenu-icon" />
        </div>
      </Dropdown> */}
      <div className="usermenu-loggedout" onClick={() => {}}>
        Log in <UserOutlined className="usermenu-icon" />
      </div>
    </div>
  );
};
