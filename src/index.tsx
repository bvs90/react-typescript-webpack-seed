import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './app';

ReactDOM.render(
  <App username="Ben" lang="TypeScript" />,
  document.querySelector('#app')
);