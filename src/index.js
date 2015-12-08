import React from 'react';
import {render} from 'react-dom';
import App from './components';
import { compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import { devTools, persistState } from 'redux-devtools';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import reducer from './reducers';
const finalCreateStore = compose(
  // Provides support for DevTools:
  devTools(),
  // Lets you write ?debug_session=<name> in address bar to persist debug sessions
  persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
)(createStore);

let store = finalCreateStore(reducer);


import './styles/reveal.styl';
import '../css/theme/black.css';
import '../lib/css/zenburn.css';

render(
  <div>
    <Provider store={store}>
      <App/>
    </Provider>

  </div>,
  document.getElementById('root')
);

/*
<DebugPanel top right bottom>
  <DevTools store={store} monitor={LogMonitor} />
</DebugPanel>
*/
