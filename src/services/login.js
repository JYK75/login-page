import Vue from 'vue';

import axios from "./axios/axios";
import authAxios from "./axios/authAxios";
import router from '@/router';
// import store from '@/store';

export const loginUser = async (user) => {
  try {
    const { data } = await axios.post('/login', user);
    Vue.$cookies.set('accessToken', data.accessToken, '10s');
    Vue.$cookies.set('refreshToken', data.refreshToken, '20s');
    //store.commit('setLogin', data);
    router.push('/');
  } catch (err) {
    console.log(err);
  }
};

export const getRefreshToken = async () => {
  try {
    const {data} = await authAxios.get('/refreshToken');
    Vue.$cookies.set('accessToken', data.accessToken, '10s');
    
    //store.commit('setAccessToken', data.accessToken);
  } catch (err) {
    console.log(err)
  }
};


