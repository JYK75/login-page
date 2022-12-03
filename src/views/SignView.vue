<template>
  <div class="sign-in-view">
    <h2>회원가입</h2>
    <sign-in-form class="form"/>
  </div>
</template>

<script>
import SignInForm from '@/components/sign/SignInForm.vue';

export default {
  name: 'SignInView',
  components: {
    SignInForm,
  }
}
</script>


<style lang="scss" scoped>
.sign-in-view {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;

  .form {
    width: 300px;
  }
}
</style>