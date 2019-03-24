<template>
  <div class="page-register">
    <mt-field 
      label="邮箱"
      placeholder="请输入邮箱"
      v-model="email"></mt-field>
    <mt-field 
      label="用户名"
      placeholder="请输入用户名"
      v-model="userName"></mt-field>
    <mt-field 
      label="密码"
      placeholder="请输入密码"
      v-model="password"></mt-field>
    <mt-field 
      label="确认密码"
      placeholder="请再次输入密码"
      v-model="confirmPassword"></mt-field>
    <mt-button 
      class="register" 
      type="primary"
      @click="register">注册</mt-button>
  </div> 
</template>
<script>
import { Field, Button } from 'mint-ui';
import { register } from '../../api/user';
export default {
  components: {
    [Field.name] : Field,
    [Button.name]: Button
  },
  data() {
    return {
      email: '',
      userName: '',
      password: '',
      confirmPassword: ''
    };
  },
  methods: {
    async register() {
      try {
        const res = await register({
          email: this.email,
          userName: this.userName,
          password: this.password,
          confirmPassword: this.confirmPassword
        });
        if (res && res.code===0) {
          this.$router.replace('/login');
        }
      } catch (error) {
        
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.page-register {
  padding-top: 200px;
}
.register {
  display: block;
  margin: 20px auto;
  width: 90%;
}
</style>
