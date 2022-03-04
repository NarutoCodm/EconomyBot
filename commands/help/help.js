const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "help",
  description:
    "Get list of all command and even get to know every command detials",
  usage: "help <cmd>",
  category: "info",
  run: async (client, message, args) => {
    
    if (args[0]) {
      const command = await client.commands.get(args[0]);

      if (!command) {
        return message.channel.send("Unknown Command: " + args[0]);
      }

      let embed = new MessageEmbed()
        .setAuthor(command.name, client.user.displayAvatarURL())
        .addField("> ❯ Description", command.description || "Not Provided :(")
        .addField("> ❯ Usage", "`" + command.usage + "`" || "Not Provied")
        .setThumbnail(client.user.displayAvatarURL())
        .setColor("BLUE")
        .setFooter(client.user.username, client.user.displayAvatarURL());

      return message.channel.send(embed);
    } else {
      
      const commands = await client.commands;

      let emx = new MessageEmbed()
        .setDescription('**A fun and moderation bot with 150+ commnds and 10+ category ** \n**If u got any error do ** `qbug` **your bug must be 10 ltters **')
        .setImage('https://cdn.discordapp.com/attachments/939872592817438810/948430373329731594/standard_2.gif')
        .setColor("BLUE")
        .setFooter(client.user.username, client.user.displayAvatarURL())
        
        .setThumbnail(client.user.displayAvatarURL());
          
      let com = {};
      for (let comm of commands.array()) {
        let category = comm.category || "Unknown";
        let name = comm.name;

        if (!com[category]) {
          com[category] = [];
        }
        com[category].push(name);
      }

      for(const [key, value] of Object.entries(com)) {
        let category = key;

        let desc = "`" + value.join("`, `") + "`";

        emx.addField(`${category.toUpperCase()}[${value.length}]`, desc);
      }
     emx.addField('important links ','**:link:  [Support](https://dsc.gg/zerobotdev)**  | **[INVITE](mhttps://discord.com/oauth2/authorize?client_id=933351535109373972&permissions=21411396854&scope=bot%20applications.commands)**')
      return message.channel.send(emx)

    }
  }
};
