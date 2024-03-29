// Dependencies
const { MessageEmbed } = require('discord.js'),
	Command = require('../../structures/Command.js');

module.exports = class DM extends Command {
	constructor(bot) {
		super(bot, {
			name: 'dm',
			ownerOnly: true,
			dirname: __dirname,
			aliases: ['direct-message', 'dmsg'],
			botPermissions: [ 'SEND_MESSAGES', 'EMBED_LINKS'],
			description: 'DM a user',
			usage: 'dm <user> <reason>',
			cooldown: 3000,
		});
	}

	// Run command
	async run(bot, message, args, settings) {
		// Get user
		const member = message.guild.getMember(message, args);
		// send message
		try {
			const embed = new MessageEmbed()
				.setTitle('DM recieved')
				.setDescription(args.join(' ').slice(args[0].length))
				.setTimestamp()
				.setFooter(member[1].user.tag, member[1].user.displayAvatarURL({ format: 'png', size: 1024 }));
			member[0].user.send(embed);
		} catch (err) {
			if (message.deletable) message.delete();
			bot.logger.error(`Command: '${this.help.name}' has error: ${err.message}.`);
			message.error(settings.Language, 'ERROR_MESSAGE').then(m => m.delete({ timeout: 5000 }));
		}
	}
};
