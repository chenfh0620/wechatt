<template>
  <div class="page-chat">
    <mt-header title="标题过长会隐藏后面的内容啊哈哈哈哈">
      <router-link to="/" slot="left">
        <mt-button icon="back">微信</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <footer>
      <img 
        class="footer-item speech" 
        src="../../assets/images/icon/chat-speech.jpg"/>
      <input type="text" v-model="chatContent" />
      <img 
        class="footer-item emoji" 
        src="../../assets/images/icon/chat-emoji.jpg" 
        alt="">
      <img 
        class="footer-item add" 
        src="../../assets/images/icon/chat-add.jpg" 
        alt="">
    </footer>
  </div>
</template>
<script>
import {
  Header,
  Button
} from 'mint-ui';
export default {
  components: {
    [Header.name]: Header,
    [Button.name]: Button
  },
  data() {
    return {
      chatContent: ''
    }
  },
  created() {
  }
}
</script>
<style lang="scss" scoped>
@import './index.scss';

</style>
