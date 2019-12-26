import { Reducer } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export default (reducers: Reducer) => {
  const persistedReducer = persistReducer(
    {
      key: 'my-app-name',
      storage,
      whitelist: ['people'],
    },
    reducers
  );

  return persistedReducer;
};
