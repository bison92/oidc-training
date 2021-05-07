import React from 'react';
import { Carousel } from 'antd';
import './HeroCarusel.less';

export const HeroCarusel = () => {
  function onChange(a: number) {
  }

  return (
    <Carousel autoplay afterChange={onChange} dotPosition={'left'}>
      <div>
        <div className="hero-slide hero-slide-4">
          <div className="hero-slide-overlay">
            <h1>Haz ese viaje</h1>
          </div>
        </div>
      </div>
      <div>
        <div className="hero-slide hero-slide-1">
          <div className="hero-slide-overlay">
            <h1>Controla tus gastos</h1>
          </div>
        </div>
      </div>
      <div>
        <div className="hero-slide hero-slide-2">
          <div className="hero-slide-overlay">
            <h1>Haz crecer tus ahorros</h1>
          </div>
        </div>
      </div>
      <div>
        <div className="hero-slide hero-slide-3">
          <div className="hero-slide-overlay">
            <h1>Logra tus metas</h1>
          </div>
        </div>
      </div>
    </Carousel>
  );
};
