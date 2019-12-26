export enum PeopleTypes {
  LOAD_REQUEST = '@people/LOAD_REQUEST',
  LOAD_SUCCESS = '@people/LOAD_SUCCESS',
  LOAD_FAILURE = '@people/LOAD_FAILURE',
}

export interface People {
  name: string;
}

export interface PeopleState {
  readonly data: People;
  readonly loading: boolean;
  readonly error: boolean;
}
