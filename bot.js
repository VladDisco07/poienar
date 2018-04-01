/*
  A bot that welcomes new guild members when they join
*/

// Import the discord.js module
const Discord = require('discord.js');

// Create an instance of a Discord client
const client = new Discord.Client();

// The token of your bot - https://discordapp.com/developers/applications/me
const token = 'NDMwMDcyMDAxMTcyODY1MDI1.DaK3jQ.dt3atrv4upv-CpPoQxupza1w4sg';

// The ready event is vital, it means that your bot will only start reacting to information
// from Discord _after_ ready is emitted
bot.on("ready", function () {
	bot.user.setGame("Niscăi servere foarte bune: https://discord.gg/pqtyJ4U şi https://discord.gg/3Jw5wUp");
	console.log("Ready");
});

// Create an event listener for new guild members
client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find('name', 'chatbox');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`** :pushpin: Bun venit ${member} pe WonderGames! :shield: **
`` Nu uita sa vizitezi ``
** #aplicatie-staff - Pentru a fi in staff sa faci o cerere!
#cerere-parteneriat - daca doresti parteneriat cu noi
#magazin-grade - dacxa doresti sa cumperi un grad!
#anunturi - anunturile!
#index - Index-ul server-ului!**
:tools: ``Bun venit si ms de join`` :wink: :heart:`);
});

// Log our bot in
client.login(token);
