import React from 'react';
import { Page, Navbar, Messages as MessagesF7, Message, Messagebar } from 'framework7-react';
import MessagesLoading from '../../components/MessagesLoading';

export default function Messages() {
  return (
    <Page colorTheme='green'>
      <Navbar title='Hiléo Andersson' backLink />
      <Messagebar
        placeholder=''
        sendLink='Enviar'
        onSubmitSend={(value, clear) => console.log(value)}
      />
      <MessagesLoading />
      {/* <MessagesF7>
        <Message
          type="received"
          first={true}
          last={true}
          tail={true}
          avatar='https://s3.amazonaws.com/uifaces/faces/twitter/stefanozoffoli/128.jpg'
        >
          Hello World, how are you?
        </Message>
      </MessagesF7> */}
    </Page>
  );
}