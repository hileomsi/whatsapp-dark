import React, { useState, useEffect } from 'react';
import { Page, Navbar, Link } from 'framework7-react';
import FormLogin from './FormLogin';
import FormRegister from './FormRegister';
import { useCreate, useAuthenticate } from 'usefeathers';
import { f7 } from '../../config/f7';
import * as storage from '../../helpers/storage';

export default function Login(props) {
  const { f7router } = props;
  const [authenticate, dataAuth, authenticated, loadingAuth, errorAuth] = useAuthenticate();
  const [createUser, user, loadingCreateUser, errorCreateUser] = useCreate(() => 'users');
  const [mode, setMode] = useState('login');

  useEffect(() => {
    checkAuthenticate();
  }, []);

  function checkAuthenticate() {
    auth()
    .then(response => {
      if(response) f7router.navigate('/');
    });
  }

  async function handlerRegister(data) {
    try {
      await createUser({ ...data, avatar: 'spy' });
      await auth(data);
      f7router.navigate('/avatars');
    } catch(err) {
      const title = 'Error';
      const description = 'Username exists.';

      f7.dialog.alert(description, title).open();
    }
  }

  async function handleLogin(data) {
    try {
      await auth(data);
      f7router.navigate('/');
    } catch(err) {
      const title = 'Error';
      const description = 'Your datas are incorrect.';

      f7.dialog.alert(description, title).open();
    }
  }

  async function auth(data) {
    const response = await authenticate(data ? {
      strategy: 'local',
      username: data.username,
      password: data.password
    } : undefined);
    
    if(response) {
      storage.setItem('user', response.user);
      return response;
    }
  }

  function handleToggleMode() {
    setMode(mode === 'login' ? 'register' : 'login');
  }

  return (
    <Page colorTheme='green'>
      <Navbar title='Whatsapp' large>
        <Link slot='nav-right' color='green' onClick={handleToggleMode}>
          {mode === 'login' ? 'Register' : 'Login'}
        </Link>
      </Navbar>
      {mode === 'login' && (
        <FormLogin
          onLogin={handleLogin}
          loading={loadingAuth}
          error={errorAuth}
        />
      )}
      {mode === 'register' && (
        <FormRegister
          onRegister={handlerRegister}
          loading={loadingCreateUser}
          error={errorCreateUser}
        />
      )}
    </Page>
  );
}