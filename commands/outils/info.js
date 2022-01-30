const { SlashCommandBuilder } = require('@discordjs/builders');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('info')
		.setDescription('retrouvez les informations sur l\'utilisateur et le serveur ')
		.addSubcommand(subcommand =>
			subcommand
				.setName('user')
				.setDescription('Information sur l\'utilisateur')
				.addUserOption(option => option.setName('target').setDescription('l\'utilisateur')))
		.addSubcommand(subcommand =>
			subcommand
				.setName('server')
				.setDescription('information sur le serveur')),
	async execute(interaction) {
		if (interaction.options.getSubcommand() === 'user') {
			const user = interaction.options.getUser('target');

			if (user) {
				await interaction.reply(`Nom d'utilisateur: ${user.username}\nID: ${user.id}`);
			}
			else {
				await interaction.reply(`Votre nom d'utilisateur : ${interaction.user.username}\nVotre ID: ${interaction.user.id}`);
			}
		}
		else if (interaction.options.getSubcommand() === 'server') {
			await interaction.reply(`Nom du serveur: ${interaction.guild.name}\nNombre totale de membre: ${interaction.guild.memberCount}`);
		}
	},

};
