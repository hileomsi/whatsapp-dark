import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, Avatar } from './styles';

export default function ChatsList(props) {
  const { users, onClickUser } = props;

  return (
    <List mediaList>
      {users.length === 0 && (
        <ListItem
          title='Users empty'
          subtitle='Try more after.'
        />
      )}
      {users.map(user => (
        <ListItem
          link="#"
          title={user.name}
          subtitle={user.username}
          onClick={() => onClickUser(user._id)}
        >
          <Avatar slot='media' src={user.avatar} />
        </ListItem>
      ))}
    </List>
  );
}

ChatsList.propTypes = {
  chats: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.func.isRequired,
      username: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onClickUser: PropTypes.func.isRequired
};