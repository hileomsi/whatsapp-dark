import React, { useState, useEffect } from 'react';
import { Page, Navbar, Messages as MessagesF7, Message, Messagebar } from 'framework7-react';
import { useFind, useCreate, useGet } from 'usefeathers';
import * as storage from '../../helpers/storage';
import { getImageAvatar } from '../../helpers/avatars';
import MessagesLoading from '../../components/MessagesLoading';

export default function Messages(props) {
  const { chatId } = props;
  const user = storage.getItem('user');
  const [title, setTitle] = useState("Loading...");
  const [messages, setMessages] = useState([]);
  const [chat] = useGet('chats', chatId);
  const [{ data }, loading] = useFind(
    'messages',
    { chat: chatId },
    { realtime: true, paginate: true }
  );
  const [createMessage] = useCreate(() => 'messages');

  useEffect(() => {
    if(chat && chat.users) {
      const friend = chat.users.find(obj => obj._id !== user._id);
      setTitle(friend ? friend.name : chat.users[0].name);
    }
  }, [chat]);

  useEffect(() => {
    if(data) {
      const messages = data.map(message => ({
        ...message,
        avatar: getImageAvatar(message.user.avatar),
        type: message.user._id === user._id ? 'sent' : 'received'
      }));
      setMessages(messages);
    }
  }, [data]);

  async function handleCreateMessage(text, clear) {
    const message = {
      chat: chatId,
      user: user._id,
      text,
      createdAt: Date.now()
    };
    await createMessage(message);
    clear();
  } 

  return (
    <Page colorTheme='green'>
      <Navbar
        title={title}
        backLink
        backLinkUrl='/'
      />
      <Messagebar
        placeholder=''
        sendLink='Send'
        onSubmit={(value, clear) => handleCreateMessage(value, clear)}
      />
      {loading && <MessagesLoading />}
      <MessagesF7>
        {messages.map(message => (
          <Message
            type={message.type}
            first={true}
            last={true}
            tail={true}
            avatar={message.avatar}
          >
            {message.text}
          </Message>
        ))}
      </MessagesF7>
    </Page>
  );
}