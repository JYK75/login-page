import Vue from 'vue';
import axios from './axios'
//import store from '@/store'
import { getRefreshToken } from '../login';

const authAxios = axios.create();

authAxios.interceptors.request.use(
  function (config) {
    // 요청을 보내기 전에 수행할 일
    // 로그 찍기
    // config.headers['access-token'] = store.state.accessToken;
    // config.headers['refresh-token'] = store.state.refreshToken;
    const accessToken = Vue.$cookies.get('accessToken');
    const refreshToken = Vue.$cookies.get('refreshToken');

    config.headers['access-token'] = accessToken;
    config.headers['refresh-token'] = refreshToken;

    return config;
  },
  function (error) {
    // 오류 요청을 보내기전 수행할 일
    return Promise.reject(error);
  }
)

authAxios.interceptors.response.use(
  function(response) {
    // 응답 데이터 가공
    return response;
  },
  async function (error) {
    // 오류 응답을 처리
    const errorAPI = error.config;
    const refreshToken = Vue.$cookies.get('refreshToken');

    if(error.response.status === 401 && errorAPI.retry === undefined && refreshToken) {
      errorAPI.retry = true;
      await getRefreshToken();
      return await authAxios(errorAPI);
    }
    return Promise.reject(error)
  }
)

export default authAxios;