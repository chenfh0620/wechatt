<template>
  <div class="page-chat">
    <mt-header title="标题过长会隐藏后面的内容啊哈哈哈哈">
      <router-link to="/" slot="left">
        <mt-button icon="back">微信</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <section :class="[ 'content', keyBoardVisible ? 'offset' : '']">
      <div class="chat-list">
        <ul>
          <li class="chat-item other">
            <div class="date"><span>星期四 13:34</span></div>
            <div>
              <img class="avatar" src="../../../static/avatar/avatar2.jpg" alt="">
              <p class="message">1233211</p>
            </div>
          </li>
          <li class="chat-item self">
            <div class="date"><span>星期四 13:34</span></div>
            <div>
              <img class="avatar" src="../../../static/avatar/avatar2.jpg" alt="">
              <p class="message">1233211</p>
            </div>
          </li>
          <li class="chat-item other">
            <div class="date"><span>星期四 13:34</span></div>
            <div>
              <img class="avatar" src="../../../static/avatar/avatar2.jpg" alt="">
              <p class="message">1233211</p>
            </div>
          </li>
          <li class="chat-item other">
            <div class="date"><span>星期四 13:34</span></div>
            <div>
              <img class="avatar" src="../../../static/avatar/avatar2.jpg" alt="">
              <p class="message">1233211</p>
            </div>
          </li>
          <li class="chat-item self">
            <div class="date"><span>星期四 13:34</span></div>
            <div>
              <img class="avatar" src="../../../static/avatar/avatar2.jpg" alt="">
              <p class="message">1233211</p>
            </div>
          </li>
          <li class="chat-item other">
            <div class="date"><span>星期四 13:34</span></div>
            <div>
              <img class="avatar" src="../../../static/avatar/avatar2.jpg" alt="">
              <p class="message">1233211</p>
            </div>
          </li>
          <li class="chat-item other">
            <div class="date"><span>星期四 13:34</span></div>
            <div>
              <img class="avatar" src="../../../static/avatar/avatar2.jpg" alt="">
              <p class="message">1233211</p>
            </div>
          </li>
          <li class="chat-item self">
            <div class="date"><span>星期四 13:34</span></div>
            <div>
              <img class="avatar" src="../../../static/avatar/avatar2.jpg" alt="">
              <p class="message">1233211</p>
            </div>
          </li>
          <li class="chat-item other">
            <div class="date"><span>星期四 13:34</span></div>
            <div>
              <img class="avatar" src="../../../static/avatar/avatar2.jpg" alt="">
              <p class="message">1233211</p>
            </div>
          </li>
          <li class="chat-item other">
            <div class="date"><span>星期四 13:34</span></div>
            <div>
              <img class="avatar" src="../../../static/avatar/avatar2.jpg" alt="">
              <p class="message">1233211</p>
            </div>
          </li>
          <li class="chat-item self">
            <div class="date"><span>星期四 13:34</span></div>
            <div>
              <img class="avatar" src="../../../static/avatar/avatar2.jpg" alt="">
              <p class="message">1233211</p>
            </div>
          </li>
          <li class="chat-item other">
            <div class="date"><span>星期四 13:34</span></div>
            <div>
              <img class="avatar" src="../../../static/avatar/avatar2.jpg" alt="">
              <p class="message">1233211</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <footer :class="[ 'footer', keyBoardVisible ? 'offset' : '' ]">
      <img 
        class="footer-item speech" 
        src="../../assets/images/icon/chat-speech.jpg"/>
      <input 
        type="text" 
        v-model="chatContent"
        @focus="showKeyBoard"
        @keyup.enter="sendMessage"/>
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
      chatContent: '', // 聊天框输入内容
      keyBoardVisible: false, // 是否显示键盘
      webSocket: null
    }
  },
  created() {
  },
  mounted() {
    /* 封装 WebSocket 实例化的方法  */
    var CreateWebSocket = (function () {
        return function (urlValue) {
            if(window.WebSocket) return new WebSocket(urlValue);
            if(window.MozWebSocket) return new MozWebSocket(urlValue);
            return false;
        }
    })();
    /* 实例化 WebSocket 连接对象, 地址为 ws 协议 */
    const webSocket = CreateWebSocket("ws://localhost:3000");
    this.webSocket = webSocket;
    webSocket.onopen = function (msg) {
        console.log("建立连接:", msg);
    };
    /* 接收到服务端的消息时 */
    webSocket.onmessage = function (msg) {
        console.log("服务端说:", msg.data);
    };
    /* 关闭时 */
    webSocket.onclose = function () {
        console.log("关闭连接");
    };
  },
  destroyed() {
    this.webSocket.close();
  },
  methods: {
    // 显示键盘
    showKeyBoard() {
      this.keyBoardVisible = true;
    },
    // 输入内容
    sendMessage(e) {
      this.webSocket.send(this.chatContent);
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/css/mixin.scss';
@import './index.scss';

</style>
