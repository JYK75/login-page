<template>
  <form class="sign-in-form" @submit="clickSignIn(id, password, $event)">
    <label>
      ID
      <v-input class="sign-in-form__text" v-model="id" />
    </label>
    <label>
      Password
      <v-input class="sign-in-form__text" v-model="password" type="password" :is-error="isError" />
    </label>
    <label>
      Confirm Password
      <v-input class="sign-in-form__text" v-model="confirmPassword" @blur="checkPassword()" type="password"
        :is-error="isError" error-msg="비밀번호가 다릅니다." />
    </label>
    <v-button type='submit' class="sign-in-form__button" @click="checkPassword()">회원가입</v-button>
  </form>
</template>

<script>
import VInput from '@/common/VInput.vue';
import VButton from '@/common/VButton.vue';
import {signInUser} from '@/services/sign';

export default {
  name: 'SignInForm',
  components: {
    VInput,
    VButton,
  },
  data() {
    return {
      id: '',
      password: '',
      confirmPassword: '',
      isError: false,
    }
  },
  methods: {
    checkPassword() {
      this.isError = this.password !== this.confirmPassword;
    },
    clickSignIn(id, password, event) {
      event.preventDefault();
      if(this.isError) return;
      console.log('사용자:', id, password)
      
      signInUser({id, password})
    }
  }
}
</script>

<style lang="scss" scoped>
.sign-in-form {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  flex-flow: column;
  width: 100%;

  &__text,
  &__button,
  label,
  a {
    width: 100%;
  }
}
</style>