import React from 'react';
import { Page, Navbar, Subnavbar, Searchbar, Link } from 'framework7-react';
import ChatsList from '../../components/ChatsList';
import ChatListLoading from '../../components/ChatsListLoading';
import BlockError from '../../components/BlockError';

const chats = [
  {
    name: 'Hiléo Andersson',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/imcoding/128.jpg',
    lastMessage: 'Oii moça, dormiu bem?',
    newMessagesCount: 1,
    lastDateMessage: Date.now()
  },
  {
    name: 'Hiléo Andersson',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/imcoding/128.jpg',
    lastMessage: 'Oii moça, dormiu bem?',
    newMessagesCount: 0,
    lastDateMessage: Date.now()
  },
  {
    name: 'Hiléo Andersson',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/imcoding/128.jpg',
    lastMessage: 'Oii moça, dormiu bem?',
    newMessagesCount: 0,
    lastDateMessage: Date.now()
  },
  {
    name: 'Hiléo Andersson',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/imcoding/128.jpg',
    lastMessage: 'Oii moça, dormiu bem?',
    newMessagesCount: 4,
    lastDateMessage: Date.now()
  }
];

export default function Chats(props) { 
  const { f7router } = props;

  function handleSearchChat() {
    f7router.navigate('/searchChat');
  }

  function handleNavigateChat(chatId) {
    f7router.navigate('/messages');
  }

  return (
    <Page colorTheme='green'>
      <Navbar
        title='Chats'
        large
      >
        {/* <Link slot='nav-left'>Light</Link> */}
        <Link slot='nav-right' color='green' onClick={handleSearchChat}>Nova Conversa</Link>
        <Subnavbar inner={false}>
          <Searchbar color='green'></Searchbar>
        </Subnavbar>
      </Navbar>

      {/* <BlockError
        title='Aconteceu um erro'
        message='Erro interno do servidor.'
      /> */}
      {/* <ChatListLoading /> */}
      <ChatsList
        chats={chats}
        onClickChat={handleNavigateChat}
      />
    </Page>
  );
}