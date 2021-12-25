module.exports = {
	name: 'guildMemberRemove',
	async execute(member) {
		const { MessageEmbed } = require('discord.js');
		const exampleEmbed = new MessageEmbed()
			.setTitle(`A bientot ${member.user.tag}`);
		member.guild.channels.cache.get(process.env.DISCORD_WELCOME_CHANNEL_ID).send({ embeds: [exampleEmbed] });
	},
};
