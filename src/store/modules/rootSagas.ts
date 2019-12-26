import { all, takeLatest } from 'redux-saga/effects';

import { load } from './people/sagas';
import { PeopleTypes } from './people/types';

export default function* rootSaga() {
  return yield all([takeLatest(PeopleTypes.LOAD_REQUEST, load)]);
}
