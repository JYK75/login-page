<template>
  <div>
    Users
    <ul>
      <li v-for="user in userList" :key="user.id"> 
        <router-link :to="`/users/${user.id}`">
          {{user.id}}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { getUserInfoList } from '@/services/sign';

  export default {
    name: 'UsersView',
    data() {
      return {
        userList: [],
      }
    },
    created() {
      this.userInfo();
    },
    methods: {
      async userInfo() {
        const data = await getUserInfoList();
        console.log(data);
        this.userList = data.userInfo;
      }
    }
  }
</script>