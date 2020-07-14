import { config as importEnvs } from 'dotenv';
import express from 'express';
import Discord from 'discord.js';
import { OK } from 'http-status';

importEnvs();

// Health check http route
const app = express();
const PORT = 3000;

app.get('/', (req, res) => res.status(OK).json({
  message: 'healthy!',
  timestamp: new Date(),
}));

app.listen(PORT, () => console.log(`listening at port ${PORT}`));

// Discord bot setup/listeners
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.channel.send('pong');
  }
});

client.login(process.env.DISCORD_TOKEN).catch(e => console.log(e.message));
