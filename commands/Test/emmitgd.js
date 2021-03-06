const Discord = require('discord.js')

exports.run = (bot, WebhookPrivate, WebhookPublic, msg) => {

    if (msg.channel.recipient) return
    if (!bot.config.Owner.includes(msg.author.id)) return

    if (msg.guild.member(bot.user).hasPermission("MANAGE_MESSAGES")) {
        msg.delete(msg.author).catch(e => console.log(bot.ls.warning, "The bot does not have permission to delete the command made by the user."))
    }

    bot.emit("guildDelete")

    console.log(bot.ls.info, bot.config.prefix + "emmitgd " + " by " + msg.author.tag + " (" + msg.author.id + ")")

    WebhookPrivate.send(new Discord.RichEmbed()
        .setColor(bot.config.PrimaryColor)
        .setDescription("** " + bot.config.prefix + "emmitgd ** - By " + msg.author)
        .setFooter("ID : " + msg.author.id, msg.author.avatarURL)
    )
}