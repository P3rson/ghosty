const Discord = require('discord.js')

exports.run = async (bot, WebhookPrivate, WebhookPublic, msg) => {

    if (msg.channel.recipient) return
    if (msg.guild.member(bot.user).hasPermission("MANAGE_MESSAGES")) {
        msg.delete(msg.author).catch(e => console.log(bot.ls.warning, "The robot does not have permission to delete the command made by the user."))
    }

    msg.channel.send(new Discord.RichEmbed()
        .setColor(bot.config.PrimaryColor)
        .addField("**" + bot.guilds.reduce((mem, g) => mem += g.memberCount, 0) + "** Users who will be ghosts","**" + bot.guilds.size.toLocaleString() + "** Servers connected to the hell", true)
        .setFooter("I'm a Ghost-y, my role? I must be scary.", msg.author.avatarURL)
    )

    console.log(bot.ls.info, bot.config.prefix + "stats " + " by " + msg.author.tag + " (" + msg.author.id + ")")
    WebhookPrivate.send(new Discord.RichEmbed()
        .setColor(bot.config.PrimaryColor)
        .setDescription("** " + bot.config.prefix + "stats ** - By " + msg.author)
        .setFooter("ID : " + msg.author.id, msg.author.avatarURL)
    )

}