require('dotenv/config');
const express = require('express');
const Discord = require('discord.js');
const { OK } = require('http-status');
const { parseMessageAndReply } = require('./services/botService');

// Health check http route
const app = express();
const { PORT } = process.env;

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

client.on('message', message => {
  parseMessageAndReply(message);
});

client.login(process.env.DISCORD_TOKEN).catch(e => console.log(e.message));
