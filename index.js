require("http").createServer((req, res) => res.end("Self Coded By Neox And NarutoCodm")).listen(process.env.PORT || 8000)
const fs = require("fs")
const {Client, 
      Collection, 
       Discord
      } = require("discord.js");
const client = new Client({
  disableEveryone: true
});
const { default_prefix } = require("./config.json")
const { config } = require('dotenv')
const { prefix } = require("./config.json")
const bot = new Client({
  disableEveryone: true
});
 require('discord-buttons')(client);
const emote = require("./config/emotes.json");
const math = require("mathjs")
const { MessageEmbed } = require('discord.js');
const ms = require("ms");
const fetch = require("fetch");
const db = require("quick.db")
let number = 69
console.log(`Number = ${number}`) //correct method

//
client.commands = new Collection();
client.aliases = new Collection();

['command'].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});


//-------Ping------------
 const express = require("express");
 const app = express();

 app.get("/", (req, res) => {
     res.send("Hello Neox And NarutoCodm");

 });

 app.listen(3000, () => {
     console.log("server started https://discord.gg/f36AemJdNn%22");
 });



//--------Message-------
client.on('message', async message => {
  if (message.author.bot) return;
  if (!message.guild) return;
  
  if (!message.content.startsWith(prefix)) return;

  // If message.member is uncached, cache it.
  if (!message.member)
    message.member = await message.guild.fetchMember(message);

  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);

  const cmd = args.shift().toLowerCase();

  if (cmd.length === 0) return;

  // Get the command
  let command = client.commands.get(cmd);
  // If none is found, try to find it by alias
  if (!command) command = client.commands.get(client.aliases.get(cmd));
  if (!command) return;
  if (command) command.run(client, message, args);});

client.on("message", message => {
  if (message.content === "hello") {
    return message.channel.send("Hello");
  }
});


//
client.on('message', async (message) => {
  if(message.content.includes(client.user.id)) {
    const embed = new MessageEmbed()
    .setTitle(`Huh? I was Pinged?!`)
    .setDescription(`Hello, my prefix is \`${prefix}\` Use \`${prefix}help\` to see my commands!`)
    .setColor(`#0x2f3136`)
    .setFooter(`This bot was made by NarutoCodm and Neox`)
  return message.channel.send(embed);
}
})

    


client.on("guildCreate", guild => {

  const { MessageEmbed } = require("discord.js");

//Subscribe to Atreya YT
  const ID = "939872598156791858"; 
//Subscribe to Atreya YT

  const channel = client.channels.cache.get(ID);

  const sowner = guild.owner.user;

  if (!channel) return;

  const embed = new MessageEmbed()

    .setTitle("**I Joined a Server!**")

    .addField(`**SERVER NAME**`, `\`\`\`${guild.name}\`\`\``)

    .addField(`**SERVER ID**`, `\`\`\`${guild.id}\`\`\``)

    .addField(`**SERVER OWNER**`, `\`\`\`${sowner.tag}\`\`\``)

    .addField(`**OWNER ID**`, `\`\`\`${sowner.id}\`\`\``)
 
    .addField(`**CREATED ON**`, `\`\`\`${guild.createdAt}\`\`\``)
  
    .addField(`**MEMBERS**`, `\`\`\`${guild.memberCount}\`\`\``)
  
    .setTimestamp()

    .setColor("32CD32")

    .setFooter(`Servers Count - ${client.guilds.cache.size}`);

  channel.send(embed);

});
 


//------status
client.on("ready", () => {
  console.log(`Hey user ${client.user.tag} has logged in. is online`)
  console.log(`==================================================================
* code by NarutoCodm ✔️
* © 2022 zerobot development ✔. All Rights Reserved To  Naruto Codm.
==================================================================`)
console.log(`[NAME] ${client.user.tag}`)
console.log(`[ID] ${client.user.id}`)
console.log(`[GUILDS] ${client.guilds.cache.size}`)
console.log(`[PING] ${client.ws.ping}`);
  client.user.setPresence({
    activity : {
      name: "$help | ZeroBot", 
      
      // -----ALL TYPES----
      // PLAYING
      // WATCHING
      // STREAMING
      // LISTENING
      
      type: "STREAMING"
    },
    
    //TYPES
    // -- dnd ( do not disturb )
    // -- idle
    // -- invisible
    // -- online
    
    status : 'dnd'
  })
})

client.login(process.end.TOKEN);