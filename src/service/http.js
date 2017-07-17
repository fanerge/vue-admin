/**
 * Created by yuzhenfan on 2017/6/21.
 */
import axios from 'axios'
// import qs from 'qs';
import store from '../store/index'
import router from '../router'

// axios 配置
axios.defaults.timeout = 5000;
axios.defaults.baseURL = 'https://easy-mock.com/mock/59660da1b6cab76bb739abaf/manage';

// http request 拦截器
axios.interceptors.request.use(
  config => {
    if (store.state.token) {
      config.headers.Authorization = `token ${store.state.token}`;
    }
    // config.data = qs.stringify(config.data);
    return config;
  },
  err => {
    return Promise.reject(err);
  });

// http response 拦截器
axios.interceptors.response.use(
  res => {
  	if (res.status === 200) {
  		return res.data
  	} else {
  		console.error(res.data)
  	}
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          store.commit('logout');
          router.replace({
            path: '/login',
          })
      }
    }
    return Promise.reject(error.response.data)
  });

export default axios;


