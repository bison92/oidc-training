import React, { useState } from 'react';
import { Breadcrumb, Layout as AntLayout, Menu } from 'antd';
import { Header } from './header';

import * as icons from '@ant-design/icons';
import { Footer } from 'antd/lib/layout/layout';

export const BaseLayout = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <AntLayout className="site-layout">
      <Header />
      {children}
    </AntLayout>
  );
};
