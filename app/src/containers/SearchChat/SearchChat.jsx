import React from 'react';
import { Page, Navbar, Subnavbar, Searchbar } from 'framework7-react';
import ChatsList from '../../components/ChatsList';

const chats = [
  {
    name: 'Hiléo Andersson',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/imcoding/128.jpg',
    lastMessage: 'Oii moça, dormiu bem?',
    newMessagesCount: 1
  },
  {
    name: 'Hiléo Andersson',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/imcoding/128.jpg',
    lastMessage: 'Oii moça, dormiu bem?',
    newMessagesCount: 0
  }
];

export default function SearchChat() {
  return (
    <Page colorTheme='green'>
      <Navbar title='Nova Conversa' backLink>
        <Subnavbar inner={false}>
          <Searchbar color='green'></Searchbar>
        </Subnavbar>
      </Navbar>
      <ChatsList
        chats={chats}
        onClickChat={chatId => console.log(chatId)}
      />
    </Page>
  );
};