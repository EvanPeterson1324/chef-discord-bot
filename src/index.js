
require('dotenv').config();
const express = require('express');
const Discord = require('discord.js');
const { OK } = require('http-status');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => res.status(OK).json({
  message: 'healthy!',
  timestamp: new Date(),
}));

app.listen(PORT, () => console.log(`listening at port ${PORT}`));

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


