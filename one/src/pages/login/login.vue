<template>
  <div>
    <label><input type="text" v-model="loginForm.loginName">username</label>
    <label><input type="text" v-model="loginForm.password">userpwd</label>
    <button type="submit" @click="login">submit</button>
  </div>
</template>
<script>
import api from '@/api'
export default {
  data(){
    return {
      loginForm: {
        loginName: '',
        password: '',
        platform: 'WEB',
        userType: 'PEOPLE'
      }
    }
  },
  methods: {
    login() {
      api.user.login(this.loginForm).then((res) => {
        console.log(res)
      })
    },
  }
}
</script>
