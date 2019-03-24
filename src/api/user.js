import request from './request';
import config from '../config/default';

const baseUrl = config.baseUrl;

export const userInfo = (params) => {
  return request('get', `${baseUrl}/api/user/info`, params);
}

export const register = (params) => {
  return request('post', `${baseUrl}/api/user/signup`, params);
}

export const login = (params) => {
  return request('post', `${baseUrl}/api/user/signin`, params);
}