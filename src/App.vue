<template>
  <div id="app">
    <transition :name="routerTransition">
      <router-view class="wrap-router"></router-view>
    </transition>
  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
      routerTransition: ''
    };
  },
  components: {
  },
  watch: {
    '$route' (to, from) {
      if (to.path==='/index') {
        this.routerTransition = 'router-back-silde';
      } else {
        this.routerTransition = 'router-to-silde';
      }
    }
  },
  mounted() {
    console.log(this)
  },
}
</script>

<style lang="scss" scoped>
@import '~@/assets/css/reset.css';
@import '~@/assets/css/mixin.scss';
#app {
  width: 7.5rem;
  overflow-x: hidden;
}
.wrap-router {
  position: fixed;
  top: 0;
  width: 7.5rem;
}
.router-to-silde-enter {
  transform: translateX(100%);
}
.router-to-silde-enter-active {
  transition: all .3s linear;
}
.router-to-silde-leave-active {
  transition: all .5s linear;
  transform: translateX(-80%);
}
.router-back-silde-enter {
  transform: translateX(-100%);
}
.router-back-silde-enter-active {
  transition: all .3s linear;
}
.router-back-silde-leave-active {
  transition: all .3s linear;
  transform: translateX(100%);
}
</style>
