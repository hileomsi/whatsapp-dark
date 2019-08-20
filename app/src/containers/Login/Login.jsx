import React from 'react';
import { Page, Navbar } from 'framework7-react';
import FormLogin from '../../components/FormLogin';
import FormRegister from '../../components/FormRegister';

export default function Login(props) {
  const { f7router } = props;

  function handlerRegister(){
    console.log('handlerRegister');
    f7router.navigate('/avatars');
  }

  return (
    <Page colorTheme='green'>
      <Navbar title='Whatsapp' large />
      <FormLogin />
      <FormRegister
        onRegister={handlerRegister}
      />
    </Page>
  );
}