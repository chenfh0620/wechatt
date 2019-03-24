import axios from 'axios';
import { throwErr } from '@/utils';
import { Toast } from 'mint-ui';

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

axios.defaults.withCredentials = true;

// 拦截响应
axios.interceptors.response.use(
  response => {
    if (response.data.code === 0) {
      return Promise.resolve(response.data);
    } else {
      Toast({
        message: response.data.message
      });
      return Promise.reject(response.data);
    }
  },
  error => {
    if (error && error.response) {
      let res = {};
      res.code = error.response.status;
      res.msg = throwErr(error.response.status, error.response); // throwErr 捕捉服务器错误
      Toast({
        message: res.msg
      });
      return Promise.reject(res);
    } else {
      return Promise.reject(error);
    }
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