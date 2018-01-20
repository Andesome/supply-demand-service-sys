import axios from "axios";
import {login} from "../services/user";
import {message} from 'antd';
// Add a request interceptor
axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  // console.log("--每次请求配置：", config);
  // message.loading('加载中数据中...');
  return config;
}, function (error) {
  // Do something with request error
  // console.log("--每次请求配置错误：", error);
  return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  // Do something with response data
  // message.destroy();
  return response;
}, function (error) {
  // 请求错误服务器返回的信息
  console.log("服务器错误",error);
  let response = error.response;
  /*
  * 如果响应头是以200开头，则是登录验证出了问题，跳转到登录页面
  *   20001	token不存在
  *   20002	token过期
  *   20003	token非法
  *   20004	登录超时
  * */
  if ((response.data.rescode >> 0) > 20000) {
    login();
  }

  return Promise.reject(error);
});
