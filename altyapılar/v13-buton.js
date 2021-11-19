module.exports = {
	name: 'deneme',
	description: 'Bot add command',
	aliases: ['deneme'],
	usage: 'deneme <botid>',
    cooldown: 5,
    /**@param {Discord.Message} messageCreate
     * @param {Array} args
     * @param {Discord.Client} client
     */
    async execute(message, args, client, db) {

        const emebd = new Discord.MessageEmbed()
        .setDescription('miraba')

        const row = new Discord.MessageActionRow().addComponents(
            new Discord.MessageButton()
            .setStyle('PRIMARY')
            .setLabel('Tıkla')
            .setCustomId('m4a')
        )
        const m = await message.channel.send({embeds: [emebd],components: [row]})

        const filter = i => i.user.id ===  message.author.id;

const collector = m.channel.createMessageComponentCollector({ filter});

collector.on('collect', async i => {
	if (i.customId === 'm4a') {
        i.reply('tıkladın')
	}
});
