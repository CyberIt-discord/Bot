const fs = require('fs');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const dotenv = require('dotenv');
const { readdirSync } = require('fs');
dotenv.config();

const commands = [];
readdirSync('./commands').forEach(dir => {
	const commandFiles = fs.readdirSync(`./commands/${dir}/`).filter(file => file.endsWith('.js'));

	for (const file of commandFiles) {
		const command = require(`./commands/${dir}/${file}`);
		commands.push(command.data.toJSON());
	}
	const rest = new REST({ version: '9' }).setToken(process.env.DISCORD_TOKEN);
	rest.put(Routes.applicationGuildCommands(process.env.DISCORD_CLIENT_ID, process.env.DISCORD_GUILD_ID), { body: commands })
		.then(() => console.log('Successfully registered application commands.'))
		.catch(console.error);
});