import axios from "axios";
import Cookies from "js-cookie";
import {URL} from "../constant/config"

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
