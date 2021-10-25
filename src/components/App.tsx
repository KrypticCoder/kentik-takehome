import * as React from 'react';
import { hot } from 'react-hot-loader';

import { store } from 'store';
import { Provider } from 'react-redux';

import { Main } from 'components/Main';

const App = () => {
  console.log('store', store);
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};

export default hot(module)(App);
