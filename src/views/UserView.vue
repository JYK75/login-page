<template>
  <div>
    User Item
  </div>
</template>

<script>
import { getUserInfo } from '@/services/sign'

  export default {
    name: 'UserItem',
    created() {
      getUserInfo(this.$route.params.userId);
    }
  }
</script>