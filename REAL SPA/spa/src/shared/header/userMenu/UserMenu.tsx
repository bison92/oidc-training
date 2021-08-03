import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Menu, Dropdown } from 'antd';
import './UserMenu.less';
import { AuthenticationConsumer } from '../../../core/authentication/AuthenticationProvider';
import { IAuthenticationService } from '../../../core/authentication/IAuthenticationService';
import { User } from 'oidc-client';
import { useHistory, useLocation } from 'react-router';

export const UserMenu = () => {
  const history = useHistory();
  return (
    <AuthenticationConsumer>
      {({ authService, user }) => {
        const LoggedInMenu = (
          <Menu>
            <Menu.Item  onClick={() => history.push('/dashboard') }>
              Dashboard
            </Menu.Item>
            <Menu.Item danger onClick={authService.logout}>
              Logout
            </Menu.Item>
          </Menu>
        );
        return (
          <div className="usermenu">
            {user !== null ? (
              <Dropdown overlay={LoggedInMenu}>
                <div className="usermenu-loggedin">
                  {`${user.profile.name} `}
                  <UserOutlined className="usermenu-icon" />
                </div>
              </Dropdown>
            ) : (
              <div className="usermenu-loggedout" onClick={authService.login}>
                Log in <UserOutlined className="usermenu-icon" />
              </div>
            )}
          </div>
        );
      }}
    </AuthenticationConsumer>
  );
};
