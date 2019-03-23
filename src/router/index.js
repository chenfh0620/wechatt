import index from '../page/index';
import wechat from '../page/index/wechat';
import book from '../page/index/book';
import discover from '../page/index/discover';
import mine from '../page/index/mine';

export default [
  {
    path: '/',
    redirect: '/index',
    component: index,
    children: [
      {
        path: '/index',
        component: wechat
      },
      {
        path: '/book',
        component: book
      },
      {
        path: '/discover',
        component: discover
      },
      {
        path: '/mine',
        component: mine
      }
    ]
  }
]