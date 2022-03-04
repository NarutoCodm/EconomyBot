const { MessageEmbed } = require('discord.js')
const disbutpages = require("discord-embeds-pages-buttons")
const Discord = require("discord.js");
const disbut = require("discord-buttons");
const MessageButton = require("discord-buttons");

module.exports = {
  name: "invite",
  aliases: ["inv"],
  description: "Information",

  run: async (client, message, args) => {
    let helpEmbed = new MessageEmbed()
    .setTitle(`Invite Bot`)
      .setDescription(`*Click the buttons Below to invite and join our support server *`)
      .setThumbnail(client.user.displayAvatarURL())
      .setFooter(`Requested by: ${message.author.tag}`)
      .setColor("#FFFFF0")


      let button1 = new disbut.MessageButton()
      .setStyle('url')
      .setLabel('Invite Me') 
      .setURL(`https://discord.com/oauth2/authorize?client_id=933351535109373972&permissions=21411396854&scope=bot%20applications.commands`);
      let button2 = new disbut.MessageButton()
      .setStyle('url')
      .setLabel('Support Server') 
      .setURL(`https://dsc.gg/zerobotdev`);


      return message.channel.send(helpEmbed,{
        button: [button1,button2],
      });

  },
};