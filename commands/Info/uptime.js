const Discord = require('discord.js')
const humanizeDuration = require('humanize-duration')

exports.run = async (bot, WebhookPrivate, WebhookPublic, msg) => {

    if (msg.channel.recipient) return
    if (!bot.config.Owner.includes(msg.author.id)) return

    if (msg.guild.member(bot.user).hasPermission("MANAGE_MESSAGES")) {
        msg.delete(msg.author).catch(e => console.log(bot.ls.warning, "The robot does not have permission to delete the command made by the user."))
    }

    
    msg.channel.send(new Discord.RichEmbed()
        .setColor(bot.config.PrimaryColor)
        .setAuthor("🔌 Uptime", msg.author.displayAvatarURL, "https://github.com/thomasbnt/ghosty")
        .setDescription( humanizeDuration(bot.uptime, {language: 'en', round: true}))
    )

    console.log(bot.ls.info, bot.config.prefix + "uptime " + " by " + msg.author.tag + " (" + msg.author.id + ")")
    WebhookPrivate.send(new Discord.RichEmbed()
        .setColor(bot.config.PrimaryColor)
        .setDescription("** " + bot.config.prefix + "uptime ** — By " + msg.author.tag)
        .setFooter("ID : " + msg.author.id, msg.author.avatarURL)
    )
}