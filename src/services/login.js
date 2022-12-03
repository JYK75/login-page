import axios from "./axios";
import router from '@/router';
import store from '@/store';

export const loginUser = async (user) => {
  try {
    const { data } = await axios.post('/login', user);
    store.commit('setLogin', data.accessToken);
    router.push('/');
  } catch (err) {
    console.log(err);
  }
};
