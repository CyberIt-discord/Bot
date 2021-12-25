module.exports = {
	name: 'guildMemberAdd',
	async execute(member) {
		member.guild.channels.cache.get(process.env.DISCORD_WELCOME_CHANNEL_ID).send(`Bienvenue ${member.user.username} dans le serveur ${member.guild.name} vous devez avoir lu est approuvé les regles ce trouvant dans ${member.guild.channels.cache.get(process.env.DISCORD_RULES_CHANNEL_ID).toString()}`);
	},
};
