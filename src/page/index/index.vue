<template>
<div>
  <mt-header 
    :title="showTitle"
    fixed>
    <i 
      v-if="currentTab=='/index'"
      class="iconfont icon-add" 
      slot="right"
      @click="moreFun"></i>
    <i 
      v-if="currentTab=='/book'"
      class="iconfont icon-addpeople_fill" 
      slot="right"
      @click="addPeople"></i>
    </mt-header>
  <router-view></router-view>
  <mt-tabbar v-model="currentTab" fixed>
    <mt-tab-item id="/index">
      <i 
        :class="['iconfont', currentTab == '/index' ? 'icon-interactive_fill' : 'icon-interactive']" 
        slot="icon"></i>
      微信
    </mt-tab-item>
    <mt-tab-item id="/book">
      <i 
        :class="['iconfont', currentTab == '/book' ? 'icon-addressbook_fill' : 'icon-addressbook']" 
        slot="icon"></i>
      通讯录
    </mt-tab-item>
    <mt-tab-item id="/discover">
      <i 
        :class="['iconfont', currentTab == '/discover' ? 'icon-manage_fill' : 'icon-manage']" 
        slot="icon"></i>
      发现
    </mt-tab-item>
    <mt-tab-item id="/mine">
      <i 
        :class="['iconfont', currentTab == '/mine' ? 'icon-mine_fill' : 'icon-mine']" 
        slot="icon"></i>
      我
    </mt-tab-item>
  </mt-tabbar>
</div>
</template>
<script>
import { 
  Header, 
  Button,
  Tabbar,
  TabItem
} from 'mint-ui';
export default {
  data() {
    return {
      title: '微信',
      totalNum: 92,
      currentTab: '/index'
    }
  },
  components: {
    [Header.name]: Header,
    [Button.name]: Button,
    [Tabbar.name]: Tabbar,
    [TabItem.name]: TabItem
  },
  computed: {
    showTitle() {
      if (this.$route.path === '/index') {
        return `${this.title}(${this.totalNum})`;
      } else {
        return `${this.title}`;
      }
    }
  },
  watch: {
    currentTab(val) {
      this.$router.replace(val);
      let title = this.title;
      switch(val){
        case '/index':
          title = '微信';
          break;
        case '/book':
          title = '通讯录';
          break;
        case '/discover':
          title = '发现';
          break;
        case '/mine':
          title = '我';
          break;
      }
      this.title = title;
    }
  },
  created() {
  },
  methods: {
    moreFun() {},
    addPeople() {}
  }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/css/mixin.scss';
@import './index.scss';
</style>
