import axios from 'axios';
import { throwErr } from '@/utils';
import store from '@/store';
import { Message } from 'mint-ui';
import router from '@router';

// 过滤请求
axios.interceptors.request.use(
  config => {
    config.timeout = 10 * 1000; // 超时时间
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 拦截响应
axios.interceptors.response.use(
  response => {
    if (response.data.code === 0) {
      return Promise.resolve(response.data);
    } else {
      return Promise.reject(response.data);
    }
  },
  error => {
    if (error && error.response) {
      let res = {};
      res.code = error.response.status;
      res.msg = throwErr(error.response.status, error.response); // throwErr 捕捉服务器错误
      return Promise.reject(res);
    }
    return Promise.reject(error);
  }
);

export default function request(method, url, data) {
  method = method.toLocaleLowerCase();
  if (method === 'post') {
    return axios.post(url, data);
  } else if(method === 'get') {
    return axios.get(url, { params: data });
  } else if (method === 'delete') {
    return axios.delete(url, { params: data });
  }
}