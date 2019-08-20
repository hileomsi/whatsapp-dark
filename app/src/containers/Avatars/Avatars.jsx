import React from 'react';
import { Page, Navbar } from 'framework7-react';
import AvatarsList from '../../components/AvatarsList';
import AvatarKing from '../../assets/avatars/001-king.svg';
import AvatarPrincess from '../../assets/avatars/002-princess.svg';
import AvatarRobot from '../../assets/avatars/003-robot.svg';
import AvatarPilot from '../../assets/avatars/004-pilot.svg';
import AvatarSquirrel from '../../assets/avatars/005-squirrel.svg';
import AvatarSpy from '../../assets/avatars/006-spy.svg';
import AvatarFisherman from '../../assets/avatars/007-fisherman.svg';
import AvatarSiberianHusky from '../../assets/avatars/008-siberian-husky.svg';
import AvatarMermaid from '../../assets/avatars/009-mermaid.svg';
import AvatarGeisha from '../../assets/avatars/010-geisha.svg';
import AvatarHipster from '../../assets/avatars/011-hipster.svg';
import AvatarHippie from '../../assets/avatars/012-hippie.svg';
import AvatarPunk from '../../assets/avatars/013-punk.svg';
import AvatarRapper from '../../assets/avatars/014-rapper.svg';
import AvatarVampire from '../../assets/avatars/015-vampire.svg';

export default function Avatars() {
  const avatars = [
    AvatarKing,
    AvatarPrincess,
    AvatarRobot,
    AvatarPilot,
    AvatarSquirrel,
    AvatarSpy,
    AvatarFisherman,
    AvatarSiberianHusky,
    AvatarMermaid,
    AvatarGeisha,
    AvatarHipster,
    AvatarHippie,
    AvatarPunk,
    AvatarRapper,
    AvatarVampire
  ];

  return (
    <Page colorTheme='green'>
      <Navbar backLink title='Escolha seu avatar' />
      <AvatarsList avatars={avatars} />
    </Page>
  );
};