import Vue from 'vue';
import VueRouter from 'vue-router';

import '@/assets/js/rem';
import routes from './router/index';
import App from './App';

Vue.config.productionTip = false;
Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition){
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
});

router.beforeEach((to, from, next) => {
  const session = localStorage.getItem('session');
  if(to.matched.some(item => item.meta.needAuth) && !session) {
    next({
      path: '/login',
      query: {
        redirect: to.fullPath
      }
    });
  } else {
    next();
  }
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
