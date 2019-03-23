import request from './request';

export const getAdminList = (params) => {
  return request('get', '/api/v1.0/admin/list', params);
}

export const register = (params) => {
  return request('post', '/api/v1.0/admin/register', params);
}

export const deleteAdmin = (id, params) => {
  return request('delete', `/api/v1.0/admin/${id}`, params);
}