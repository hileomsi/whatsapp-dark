import React from 'react';
import { Messages, Message } from 'framework7-react';

export default function MessagesLoading() {
  const messages = ['received', 'received', 'received', 'sent', 'received', 'sent', 'sent', 'received', 'sent', 'sent', 'received', 'received'];
  return (
    <Messages className='skeleton-text skeleton-effect-fade'>
      {messages.map((type, index) => (
        <Message
          key={index}
          type={type}
          first={true}
          last={true}
          tail={true}
        >
          fugiat non distinctio
        </Message>
      ))}
    </Messages>
  );
}