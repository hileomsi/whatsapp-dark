import React from 'react';
import { SkeletonBlock } from 'framework7-react';
import { List, ListItem } from './styles';

export default function ChatsListLoading() {
  const chats = new Array(8).fill('');
  return (
    <List mediaList className='skeleton-text skeleton-effect-fade'>
      {chats.map((chat, index) => (
        <ListItem
          link="#"
          title='quia blanditiis'
          subtitle='Ut aut sunt vero est voluptas.'
          after='DD/MM'
        >
          <SkeletonBlock style={{ width: '40px', height: '40px', 'border-radius': '50%' }} slot="media" />
        </ListItem>
      ))}
    </List>
  );
} 