const Client = require('./Structure/Client');
const bot = new Client();
const dotenv = require('dotenv');
dotenv.config()
bot.start(process.env.DISCORD_TOKEN);