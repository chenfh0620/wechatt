<template>
  <div class="wechat">
    <search-top/>
    <section>
      <ul class="message-list">
        <li 
          class="border-1px" v-for="(item,index) in 2" 
          :key="index"
          :data-style="swipeList[index]"
          @touchstart="touchStart(index, $event)"
          @touchmove="touchMove(index, $event)"
          @touchend="touchEnd(index, $event)">
          <div class="content">
            <img class="avatar" src="" alt="">
            <div class="message">
              <p class="name">杨科</p>
              <p class="text">可能是阿斯蒂芬可能是阿斯</p>
            </div>
            <div class="time">15:28</div>
          </div>
          <div class="btn-group">
            <div class="btn-delete">删除</div>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>
<script>
import { Search } from 'mint-ui';
import SearchTop from '@/components/searchTop.vue';
export default {
  data() {
    return {
      searchText: '',
      swipeList: {},
    }
  },
  components: {
    [Search.name]: Search,
    SearchTop,
  },
  mounted() {
    this.swipeList = {'0':'','1':'','2':''};
  },
  methods: {
    touchStart(index, e) {
      const pageX = e.touches[0].pageX;
      this.pageX = pageX;
    },
    touchMove(index, e) {
      const currentPageX = e.touches[0].pageX;
      const width = this.pageX - currentPageX;
      this.swipeList[index] = width;
    },
    touchEnd(index, e) {
      console.log(index);
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/css/mixin.scss';
@import './index.scss';
</style>

