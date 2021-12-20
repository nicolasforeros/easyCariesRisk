import axios from 'axios';
import { API_URL } from './constants';

function useApiOdo() {
  const apiOdo = axios.create({
    baseURL: API_URL,
  });

  return apiOdo;
}

export { useApiOdo };
