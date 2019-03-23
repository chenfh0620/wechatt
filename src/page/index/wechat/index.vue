<template>
  <div class="wechat">
    <search-top/>
    <section>
      <ul class="message-list">
        <li 
          class="border-1px" v-for="(item,index) in 20" 
          :key="index"
          :style="swipeList[index]"
          @click="goChat(index)">
          <div 
            class="content"
            @touchstart.stop="touchStart(index, $event)"
            @touchmove.stop="touchMove(index, $event)"
            @touchend.stop="touchEnd(index, $event)">
            <img class="avatar" src="" alt="">
            <div class="message">
              <p class="name">杨科</p>
              <p class="text">可能是阿斯蒂芬可能是阿斯</p>
            </div>
            <div class="time">15:28</div>
          </div>
          <div class="btn-group">
            <div 
              class="btn-delete"
              @click="deleteChat(index)">删除</div>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>
<script>
import { Search, MessageBox, Toast } from 'mint-ui';
import SearchTop from '@/components/SearchTop.vue';
export default {
  data() {
    return {
      searchText: '',
      swipeList: {},
      startPageX: 0,
      startPageX: 0,
      direction: ''
    }
  },
  components: {
    [Search.name]: Search,
    [MessageBox.name]: MessageBox,
    SearchTop,
  },
  mounted() {
      this.initMove();
  },
  methods: {
    // 跳转到聊天页面
    goChat(id) {
      this.$router.push({
        name: 'chat',
        params: { id }
      });
    },
    // 删除聊天
    deleteChat(index) {
      MessageBox
        .confirm(`确定删除${index}?`)
        .then(action => {
          Toast({
            message: '删除成功',
            duration: 1000
          });
        })
        .catch(err => {
          Toast({
            message: '删除失败',
            duration: 1000
          });
        });
    },
    // 初始化滑块移动样式，这样才能让swipeList被observe
    initMove() {
      this.swipeList = {'0':'','1':'','2':''};
    },
    // 触碰开始，重置偏移量，使滑块归位
    touchStart(index, e) {
      this.initMove();
      const startPageX = e.touches[0].pageX;
      const startPageY = e.touches[0].pageY;
      this.startPageX = startPageX;
      this.startPageY = startPageY;
    },
    // 控制滑块移动
    touchMove(index, e) {
      const currentPageX = e.touches[0].pageX;
      const currentPageY = e.touches[0].pageY;
      let width = this.startPageX - currentPageX;
      let heigh = this.startPageY - currentPageY;
      // 判断角度小于30度为水平滑动，大于30度为垂直滑动
      const minTan = Math.tan(30 / 180 * Math.PI);
      const tan = Math.abs(heigh / width);
      if (tan <= minTan  && !this.direction) {
        this.direction = 'horizontal';
      } else if (tan > minTan && !this.direction) {
        this.direction = 'vertical';
      }
      if (this.direction == 'horizontal') {
        // 水平滑动时阻止body上下滚动
        e.preventDefault();
        if (width > 75) width = 75;
        if (width < 0) width = 0;
        this.swipeList[index] = {
          transform: `translateX(${-width}px)`
        };
      }
    },
    // 抬手时将滑块移至最佳位置，全部展示或全部隐藏
    touchEnd(index, e) {
      const endPageX = e.changedTouches[0].pageX;
      const endWidth = this.startPageX - endPageX;
      if (this.direction === 'horizontal') {
        if (endWidth <= 30) {
        // 加个判空，防止重复赋值引起的抖动
          if (this.swipeList[index]) {
            this.swipeList[index] = {
              transform: `translateX(0px)`
            };
          }
        } else {
          this.swipeList[index] = {
            transform: `translateX(-75px)`
          };
        }
      }
      this.direction = '';
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/css/mixin.scss';
@import './index.scss';
</style>

