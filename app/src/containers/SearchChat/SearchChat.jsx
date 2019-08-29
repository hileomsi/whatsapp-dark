import React from 'react';
import { Page, Navbar } from 'framework7-react';
import UsersList from '../../components/UsersList';
import ChatListLoading from '../../components/ChatsListLoading';
import * as storage from '../../helpers/storage';
import { getImageAvatar } from '../../helpers/avatars';
import { f7 } from '../../config/f7';
import { useFind, useCreate } from 'usefeathers';

export default function SearchChat(props) {
  const { f7router } = props;
  const user = storage.getItem('user');
  const query = {
    // _id: { $nin: [user._id] },
    $sort: { username: -1 },
    $limit: -1
  };
  const [friends, loading, error] = useFind('users', query, { paginate: false });
  const [createChat] = useCreate(() => 'chats');

  async function handleCreateChat(friendId) {
    try {
      const chat = await createChat({
        users: [friendId, user._id],
        lastMessage: 'Click to start chat.',
        lastDateMessage: Date.now(),
        newMessagesCount: 0
      });
      f7router.navigate(`/messages/${chat._id}`);
    } catch(err) {
      const title = 'Opps';
      const description = 'Existing chat.';

      f7.dialog.alert(description, title).open();
    }
  }

  function mappingFriend(friend) {
    return { ...friend, avatar: getImageAvatar(friend.avatar) };
  }

  return (
    <Page colorTheme='green'>
      <Navbar title='New chat' backLink />
      {loading && <ChatListLoading />}
      {!error && (
        <UsersList
          users={friends.map(mappingFriend)}
          onClickUser={handleCreateChat}
        />
      )}
    </Page>
  );
};