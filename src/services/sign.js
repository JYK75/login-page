import axios from './axios';
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