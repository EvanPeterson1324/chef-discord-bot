
export const parseMessageAndReply = (message) => {
  if (message.content === '!chef') {
    message.channel.send('initial command works as intended.');
  }
};
