module.exports = {
	name: 'guildMemberAdd',
	async execute(member) {
		const { MessageEmbed } = require('discord.js');
		const exampleEmbed = new MessageEmbed()
			.setTitle(`Bienvenue ${member.user.tag}`);
		member.guild.channels.cache.get(process.env.DISCORD_WELCOME_CHANNEL_ID).send({ embeds: [exampleEmbed] });
	},
};
