import { Reducer } from 'redux';

import { PeopleState, PeopleTypes } from './types';

const INITIAL_STATE: PeopleState = {
  data: {
    name: '',
  },
  loading: false,
  error: false,
};

const reducer: Reducer<PeopleState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PeopleTypes.LOAD_REQUEST:
      return { ...state, loading: true };

    case PeopleTypes.LOAD_SUCCESS:
      return { data: action.payload.data, error: false, loading: false };

    case PeopleTypes.LOAD_FAILURE:
      return { ...state, loading: false, error: true };

    default:
      return state;
  }
};

export default reducer;
