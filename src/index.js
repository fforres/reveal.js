import React from 'react';
import {render} from 'react-dom';
import App from './components';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
let store = createStore(reducer);

import './styles/reveal.styl';
import '../css/theme/black.css';
import '../lib/css/zenburn.css';

render(
  <Provider store={store}>
    <App/>
  </Provider> ,
  document.getElementById('root')
);
