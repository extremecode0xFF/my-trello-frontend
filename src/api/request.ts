import axios from 'axios';
import { api } from '../common/constants';
import history from '../common/history/history';

export const getToken = (): string | null => localStorage.getItem('token');
export const setToken = (token: string): void => localStorage.setItem('token', token);
export const deleteToken = (): void => localStorage.removeItem('token');

const instance = axios.create({
  baseURL: api.baseURL,
});

export const admission = axios.create({
  baseURL: api.baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use((requestConfig) => {
  // eslint-disable-next-line no-param-reassign
  requestConfig.headers.Authorization = `Bearer ${getToken()}`;
  if (!getToken()) {
    history.push('/login');
  }
  return requestConfig;
});

instance.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (error) => {
    if (error.response.data.error.message === 'invalid token') {
      deleteToken();
      history.push('/login');
    }
  }
);
admission.interceptors.response.use((res) => res.data);

export default instance;
