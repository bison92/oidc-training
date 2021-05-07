import React from 'react';
import { Breadcrumb, Layout as AntLayout } from 'antd';
import { AppSider } from './AppSider';

export const AppLayout = ({ children }: React.PropsWithChildren<{}>) => {
  const { Content, Footer } = AntLayout;

  return (
    <>
      <AntLayout style={{ minHeight: 'calc(100vh - 64px)' }}>
        <AppSider />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
          </Breadcrumb>
          {children}
          <Footer style={{ textAlign: 'center' }}>OIDC Training ©2021</Footer>
        </Content>
      </AntLayout>
    </>
  );
};
