import AvatarKing from '../assets/avatars/001-king.svg';
import AvatarPrincess from '../assets/avatars/002-princess.svg';
import AvatarRobot from '../assets/avatars/003-robot.svg';
import AvatarPilot from '../assets/avatars/004-pilot.svg';
import AvatarSquirrel from '../assets/avatars/005-squirrel.svg';
import AvatarSpy from '../assets/avatars/006-spy.svg';
import AvatarFisherman from '../assets/avatars/007-fisherman.svg';
import AvatarSiberianHusky from '../assets/avatars/008-siberian-husky.svg';
import AvatarMermaid from '../assets/avatars/009-mermaid.svg';
import AvatarGeisha from '../assets/avatars/010-geisha.svg';
import AvatarHipster from '../assets/avatars/011-hipster.svg';
import AvatarHippie from '../assets/avatars/012-hippie.svg';
import AvatarPunk from '../assets/avatars/013-punk.svg';
import AvatarRapper from '../assets/avatars/014-rapper.svg';
import AvatarVampire from '../assets/avatars/015-vampire.svg';

const avatars = [
  { img: AvatarKing, name: 'king' },
  { img: AvatarPrincess, name: 'princess' },
  { img: AvatarRobot, name: 'robot' },
  { img: AvatarPilot, name: 'pilot' },
  { img: AvatarSquirrel, name: 'squirrel' },
  { img: AvatarSpy, name: 'spy' },
  { img: AvatarFisherman, name: 'fisherman' },
  { img: AvatarSiberianHusky, name: 'siberianHusky' },
  { img: AvatarMermaid, name: 'mermaid' },
  { img: AvatarGeisha, name: 'geisha' },
  { img: AvatarHipster, name: 'hipster' },
  { img: AvatarHippie, name: 'hippie' },
  { img: AvatarPunk, name: 'punk' },
  { img: AvatarRapper, name: 'rapper' },
  { img: AvatarVampire, name: 'vampire' }
];

export function getImageAvatar(name) {
  const current = avatars.find(avatar => avatar.name === name);

  return current ? current.img : AvatarSpy;
};

export default avatars;