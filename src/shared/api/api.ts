import axios from 'axios';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';

export const $api = axios.create({
  baseURL: __API__,
  headers: {
    authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY) || '',
  },
});

$api.interceptors.request.use(() => {
  if (config.headers) {
    config.headers.Authorization = localStorage.getItem(USER_LOCALSTORAGE_KEY) || ''
  }
})
