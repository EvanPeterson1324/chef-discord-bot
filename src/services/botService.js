
const parseMessageAndReply = (message) => {
  if (message.content === 'ping') {
    message.channel.send('pong');
  }
};

module.exports = {
  parseMessageAndReply,
};
