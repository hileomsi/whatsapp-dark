import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { List, ListItem, Avatar } from './styles';

export default function ChatsList(props) {
  const { chats, onClickChat } = props;

  return (
    <List mediaList>
      {chats.map(chat => (
        <ListItem
          link="#"
          title={chat.name}
          subtitle={chat.lastMessage}
          newMessagesCount={chat.newMessagesCount}
          after={chat.lastDateMessage ? moment(chat.lastDateMessage).format('HH:MM') : ''}
          onClick={() => onClickChat(chat._id)}
        >
          <Avatar slot='media' src={chat.avatar} />
        </ListItem>
      ))}
    </List>
  );
}

ChatsList.propTypes = {
  chats: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      avatar: PropTypes.func.isRequired,
      lastMessage: PropTypes.string.isRequired,
      lastDateMessage: PropTypes.string,
      newMessagesCount: PropTypes.number.isRequired
    }).isRequired
  ).isRequired,
  onClickChat: PropTypes.func.isRequired
};