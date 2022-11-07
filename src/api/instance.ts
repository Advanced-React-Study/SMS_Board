import axios from 'axios';

export interface CoreResponse {
  code: number;
}

const instance = axios.create({
  baseURL: 'http://13.124.149.255:3001/',
});

export default instance;
