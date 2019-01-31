import React from 'react';
// import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import './style/index.scss';

import ClickCounter from './component/ClickCounter/ClickCounter';
import ControlPanel from './component/ControlPanel/ControlPanel';
import ColorOrganizer from './component/ColorOrganizer/ColorOrganizer';

import Routes from './config/Router'

import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
render(
    <div>
        <ClickCounter />
        <ControlPanel />
        <ColorOrganizer />
        <div>下边是添加路由的组件</div>
        <Routes/>
    </div>,
    document.querySelector('#root')
);
// 动态加载js文件
const btn = document.getElementById('btn');
btn.onclick = () => {
  import(/* webpackChunkName: "dynamic" */ './js/dynamic').then((module) => {
    const fn = module.default;
    fn();
  });
};
if (module.hot) {
  console.log('HMR');
  module.hot.accept(() => {
    render(
      <div>
          <ClickCounter />
          <ControlPanel />
          <ColorOrganizer />
          <div>下边是添加路由的组件</div>
          <Routes />
      </div>,
      document.querySelector('#root')
    );
  });
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
