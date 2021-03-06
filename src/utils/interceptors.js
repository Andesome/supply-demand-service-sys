import axios from "axios";
import {login} from "../services/user";
import {Modal} from 'antd';

// Create an instance using the config defaults provided by the library
// At this point the timeout config value is `0` as is the default for the library
let instance = axios.create();

// Override timeout default for the library
// Now all requests will wait 2.5 seconds before timing out
instance.defaults.timeout = 1000;

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
  console.log("服务器错误:",error.response);
  let response = error.response;
  if(response.status === 500){
    console.log("服务器错误：",response);
    Modal.error({
      title: '错误',
      content: '很不幸，这是一个坏消息，他表示服务器挂掉了...',
    });
    return;
  }
  /*
  * 如果响应头是以200开头，则是登录验证出了问题，跳转到登录页面
  *   20001	token不存在
  *   20002	token过期
  *   20003	token非法
  *   20004	登录超时
  * */
  if ((response.data.rescode >> 0) > 20000) {
    login();
    // alert("登录过期");

  }

  return Promise.reject(error);
});
