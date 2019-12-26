import axios from 'axios';
import { makeUseAxios } from 'axios-hooks';

const apiEndpoint = 'https://swapi.co/api';

export const api = axios.create({
  baseURL: apiEndpoint,
});

export default makeUseAxios({
  axios: api,
});
