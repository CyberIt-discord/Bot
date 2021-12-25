module.exports = {
	name: 'guildMemberRemove',
	async execute(member) {
		member.guild.channels.cache.get(process.env.DISCORD_WELCOME_CHANNEL_ID).send(` ${member.user.username} a quitté le serveur ${member.guild.name} `);
	},
};
