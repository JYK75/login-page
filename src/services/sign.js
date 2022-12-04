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

export const getUserInfo = async () => {
  try {
    await authAxios.get('/userInfo');
  } catch (err) {
    console.log(err);
  }
}