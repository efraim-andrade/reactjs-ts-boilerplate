import { action } from 'typesafe-actions';

import { People, PeopleTypes } from './types';

export const loadRequest = () => action(PeopleTypes.LOAD_REQUEST);

export const loadSuccess = (data: People) =>
  action(PeopleTypes.LOAD_SUCCESS, { data });

export const loadFailure = () => action(PeopleTypes.LOAD_FAILURE);
