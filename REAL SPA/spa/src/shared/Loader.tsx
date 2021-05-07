import { Spin } from 'antd';
import React from 'react';
import './Loader.less';

export interface LoaderProps {
  loaderKind?: LoaderKind;
}

export enum LoaderKind {
  FullScreen = 0,
  FullParent = 1,
  FullParentTranslucid = 2,
}

const Loader = ({ loaderKind }: LoaderProps) => {
  let parentClassName = '';
  switch (loaderKind) {
    default:
    case LoaderKind.FullScreen:
      parentClassName = 'loader-fullscreen';
      break;
    case LoaderKind.FullParentTranslucid:
      parentClassName = 'loader-fullparenttranslucid';
      break;
    case LoaderKind.FullParent:
      parentClassName = 'loader-fullparent';
      break;
  }

  return (
    <div className={`loader ${parentClassName}`}>
      <Spin size="large" />
    </div>
  );
};

export { Loader };
