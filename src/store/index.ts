import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, Store } from 'redux';

import rootSagas from './modules/rootSagas';
import rootReducer from './modules/rootReducer';
import { PeopleState } from './modules/people/types';
import persistedReducer from './persistReducers';

export interface ApplicationState {
  people: PeopleState;
}

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(
  persistedReducer(rootReducer),
  applyMiddleware(sagaMiddleware)
);
const persistor = persistStore(store);

sagaMiddleware.run(rootSagas);

export { store, persistor };
