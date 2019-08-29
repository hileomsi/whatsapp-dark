module.exports = () => async context => {
  const Chats = context.app.service('chats');
  const { users } = context.data;

  const query = {
    users,
    $limit: 0
  };
  const { total } = await Chats.find({ query });
  
  if(total > 0) {
    throw new Error('existing-chat');
  }

  return context;
};
