import Index from '../page/index';
import Wechat from '../page/index/wechat';
import Book from '../page/index/book';
import Discover from '../page/index/discover';
import Mine from '../page/index/mine';
import Chat from '../page/chat';

export default [
  {
    path: '/',
    redirect: '/index',
    component: Index,
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
    component: Chat
  }
]