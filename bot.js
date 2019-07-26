const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("604070440381710376")
setInterval(function() {
channel.send(`SemoGamerYT`);
}, 30)
})

client.login(process.env.BOT_TOKEN);