import Chats from './containers/Chats';
import SearchChat from './containers/SearchChat';
import Messages from './containers/Messages';
import Login from './containers/Login';
import Avatars from './containers/Avatars';

export default [
  {
    path: '/',
    component: Chats,
  },
  {
    path: '/searchChat',
    component: SearchChat 
  },
  {
    path: '/messages/:chatId',
    component: Messages
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/avatars',
    component: Avatars
  }
];