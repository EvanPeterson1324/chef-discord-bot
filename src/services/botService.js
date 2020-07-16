
export const parseMessageAndReply = ({content, channel}) => {
  const isInitialCommand = (content.substring(0, 5) === '!chef') || false;

  if (isInitialCommand) {
    channel.send('initial command works as intended.');
    return true;
  }

  return false;
};
