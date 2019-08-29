import React from 'react';
import { Page, Navbar, Preloader } from 'framework7-react';
import AvatarsList from '../../components/AvatarsList'
import avatars from '../../helpers/avatars';
import * as storage from '../../helpers/storage';
import { usePatch } from 'usefeathers';

export default function Avatars(props) {
  const { f7router } = props;
  const [patchUser, user, loading] = usePatch(() => 'users');

  async function handleSelectAvatar(avatar) {
    const { _id } = storage.getItem('user');
    const response = await patchUser(_id, { avatar: avatar.name });
    storage.setItem('user', response);
    f7router.navigate('/');
  }

  return (
    <Page colorTheme='green'>
      <Navbar backLink title='Escolha seu avatar'>
        {loading && <Preloader slot='nav-right' />}
      </Navbar>
      <AvatarsList
        avatars={avatars}
        onSelectAvatar={handleSelectAvatar}
      />
    </Page>
  );
};