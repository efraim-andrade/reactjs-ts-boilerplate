import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Routes from '~/routes';
import { store, persistor } from '~/store';
import GlobalStyles from '~/theme/global';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <GlobalStyles />

        <Routes />
      </PersistGate>
    </Provider>
  );
}
