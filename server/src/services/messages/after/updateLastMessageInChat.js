module.exports = () => context => {
  const Chats = context.app.service('chats');
  const message = context.data;

  Chats.patch(message.chat, {
    lastMessage: message.text,
    lastDateMessage: Date.now()
  });

  return context;
};