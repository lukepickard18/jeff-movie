/**
 * This is a utility function that is responsible for making API calls.
 */

import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

export default instance;
