const db = require('quick.db');

module.exports = {
    config: {
        name: "setprefix",
        aliases: ['sp'],
        category: "moderation",
        description: "Sets Custom Prefix",
        usage: "[prefix]",
        accessableby: 'Administrators'
    },
    run: async (bot, message, args) => {
        if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("**You Do Not Have Sufficient Permissions! - ADMINISTRATOR**")

        if (!args[0]) return message.channel.send("**Please Enter A Prefix!**")
        try {

            let a = args.join(' ');
            let b = await db.fetch(`prefix_${message.guild.id}`)

            if (a === b) {
                return message.channel.send('**This is Already The Server Prefix!**')
            } else {
                db.set(`prefix_${message.guild.id}`, a)

                return message.channel.send(`**Successfuly Set Server Prefix To \`${a}\`**`)
            }
        } catch (e) {
            console.log(e)
        }
    }
}