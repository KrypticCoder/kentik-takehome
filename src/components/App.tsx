import * as React from 'react';
import { hot } from 'react-hot-loader';

import { store } from 'store';
import { Provider } from 'react-redux';

import { Main } from 'components/Main';

import 'components/App.scss';

const App = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};

export default hot(module)(App);
