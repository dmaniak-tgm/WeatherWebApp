import * as React from 'react';
import * as ReactDOM from 'react-dom';
import CitiesView from './CitiesView';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <CitiesView />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();

