import axios from './axios/axios';
import authAxios from './axios/authAxios';
import router from '@/router'

export const signInUser = async (data) => {
  try {
    const { id, password } = data;
    await axios.post('/signIn', {id,password});
    router.push('/login');
  } catch (err) {
    console.log(err)
  }
}

export const getUserInfoList = async () => {
  try {
    const {data} = await authAxios.get('/userInfo');
    return data;
  } catch (err) {
    console.log(err);
  }
}

export const getUserInfo = async (id) => {
  try {
    const {data} = await authAxios.get(`/userInfo/${id}`);
    return data;
  } catch (err) {
    console.log(err);
  }
}