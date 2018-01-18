import axios from "axios";
import Cookies from "js-cookie";
import {URL,LOGOUT_URL,HOME_PAGE,LOGIN_URL,VERIFY_PAGE} from "../constant/config"

export async function query(params) {
  let access_token = Cookies.get("access_token");
  return axios({
    method: 'get',
    url: URL + '/server/verify',
    headers: {
      Authorization: access_token
    },
  }).then((response) => {
    const {status,statusText} = response;
    return Promise.resolve({
      status,
      statusText,
      ...response.data
    })
  })
}


//登出
export function logout() {
  let access_token = Cookies.get("access_token");
  window.location.href = LOGOUT_URL + `?access_token=${access_token}&next=${HOME_PAGE}`;
 /* return axios({
    method: 'get',
    url: LOGOUT_URL + `?access_token=${access_token}&next=${HOME_PAGE}`,
    headers: {
      Authorization: access_token
    },
  }).then((response) => {
    const {status,statusText} = response;
    return Promise.resolve({
      status,
      statusText,
      ...response.data
    })
  })*/
}

//登录操作
export function login() {
  window.location.href = LOGIN_URL + `?next=${VERIFY_PAGE}`;
}
