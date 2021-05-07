import { Footer } from 'antd/lib/layout/layout';
import React from 'react';
import { HeroCarusel } from './herocarusel';
import './PublicHome.less';

export const PublicHome = () => {
  return (
    <div className="public-container">
      <div className="hero-container">
        <HeroCarusel />
      </div>
      <Footer style={{ textAlign: 'center' }}>OIDC Training ©2021</Footer>
    </div>
  );
};
