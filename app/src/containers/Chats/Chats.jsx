import React from 'react';
import { Page, Navbar, Subnavbar, Searchbar, Link } from 'framework7-react';
import ChatsList from '../../components/ChatsList';
import ChatListLoading from '../../components/ChatsListLoading';
import BlockError from '../../components/BlockError';
import * as storage from '../../helpers/storage';
import { getImageAvatar } from '../../helpers/avatars';
import { useFind } from 'usefeathers';

export default function Chats(props) { 
  const { f7router } = props;
  const user = localStorage.getItem('user');
  const [chats, loading, error] = useFind('chats', {
    $limit: -1,
    $sort: { createdAt: -1 } 
  }, { paginate: false, realtime: true });

  function mappingChat(chat) {
    const friend = chat.users.find(obj => obj._id !== user._id);
    return {
      ...chat,
      name: friend.name,
      avatar: getImageAvatar(friend.avatar)
    };
  }

  function handleSearchChat() {
    f7router.navigate('/searchChat');
  }

  function handleNavigateChat(chatId) {
    f7router.navigate(`/messages/${chatId}`);
  }

  return (
    <Page colorTheme='green'>
      <Navbar
        title='Chats'
        large
      >
        <Link slot='nav-right' color='green' onClick={handleSearchChat}>New chat</Link>
        <Subnavbar inner={false}>
          <Searchbar color='green'></Searchbar>
        </Subnavbar>
      </Navbar>
      {error && (
        <BlockError
          title='Aconteceu um erro'
          message='Erro interno do servidor.'
        />
      )}
      {loading && <ChatListLoading />}
      {!error && (
        <ChatsList
          chats={chats.map(mappingChat)}
          onClickChat={handleNavigateChat}
        />
      )}
    </Page>
  );
}