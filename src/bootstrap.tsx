import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { MnMProvider } from '@mnm-tech/provider';

ReactDOM.render(
  <MnMProvider>
    <App />
  </MnMProvider>,
  document.getElementById('root'),
);
