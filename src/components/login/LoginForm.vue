<template>
  <form class="login-form" @submit="clickLogin">
    <label>
      ID <v-input class="login-form__text" v-model="id"/>
    </label>
    <label>
      Password <v-input class="login-form__text" type="password" v-model="password"/>
    </label>
    
    <v-button class="login-form__button" type="submit">로그인</v-button>
    <router-link to="/signIn">
      <v-button class="login-form__button" variant="outlined">회원가입</v-button>
    </router-link>
  </form>
</template>

<script>
import VInput from '@/common/VInput.vue';
import VButton from '@/common/VButton.vue';
import { loginUser, } from '@/services/login';

export default {
  name: 'login-form',
  components: {
    VInput,
    VButton,
  },
  data() {
    return {
      id: '',
      password: '',
    }
  },
  methods: {
    clickLogin(event) {
      console.log('click');
      const user = {
        id: this.id,
        password: this.password
      };
      const result = loginUser(user);
      console.log(result);
      event.preventDefault();
    },
  }
}

</script>

<style lang="scss" scoped>
.login-form {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  flex-flow: column;
  width: 100%;

  &__text, &__button, label, a {
    width: 100%;
  }
}
</style>