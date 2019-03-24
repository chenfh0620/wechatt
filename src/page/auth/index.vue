<template>
  <div class="page-login">
    <mt-field 
      label="用户名"
      placeholder="请输入用户名"
      v-model="userName"></mt-field>
    <mt-field 
      label="密码"
      placeholder="请输入密码"
      v-model="password"></mt-field>
    <mt-button 
      class="login" 
      type="primary"
      @click="login">登录</mt-button>
    <router-link to="/register">
      <mt-button class="login" type="primary">注册</mt-button>
    </router-link>
  </div> 
</template>
<script>
import { Field, Button } from 'mint-ui';
import { login, userInfo} from '../../api/user';
export default {
  components: {
    [Field.name] : Field,
    [Button.name]: Button
  },
  data() {
    return {
      userName: '', // 用户名
      password: '', // 密码
    };
  },
  mounted() {
    
  },
  methods: {
    // 登录
    async login() {
      try {
        const res = await login({
          userName: this.userName,
          password: this.password
        });
        if (res && res.code === 0) {
          localStorage.setItem('session', res.data.name);
          this.$router.replace('/');
        }
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.page-login {
  padding-top: 200px;
}
a {
  text-decoration: none;
}
.login {
  display: block;
  margin: 20px auto;
  width: 90%;
}
</style>
