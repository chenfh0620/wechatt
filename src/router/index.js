import Auth from '../page/auth/index';
import Register from '../page/auth/register';
import Index from '../page/index';
import Wechat from '../page/index/wechat';
import Book from '../page/index/book';
import Discover from '../page/index/discover';
import Mine from '../page/index/mine';
import Chat from '../page/chat';

export default [
  {
    path: '/login',
    component: Auth,
    meta: {
      needAuth: false
    },
  },
  {
    path: '/register',
    component: Register,
    meta: {
      needAuth: false
    },
  },
  {
    path: '/',
    redirect: '/index',
    component: Index,
    meta: {
      needAuth: true
    },
    children: [
      {
        path: '/index',
        component: Wechat
      },
      {
        path: '/book',
        component: Book
      },
      {
        path: '/discover',
        component: Discover
      },
      {
        path: '/mine',
        component: Mine
      }
    ]
  },
  {
    name: 'chat',
    path: '/chat/:id',
    component: Chat,
    meta: {
      needAuth: true
    },
  }
]