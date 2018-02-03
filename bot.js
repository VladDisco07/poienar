/*
  A bot that welcomes new guild members when they join
*/

// Import the discord.js module
const Discord = require('discord.js');

// Create an instance of a Discord client
const client = new Discord.Client();

// The token of your bot - https://discordapp.com/developers/applications/me
const token = 'NDA5NDQ5NTc1NDI2OTQ5MTI0.DVexJA.t8Y6Ntoi5iOYvVXbpz88ezj7cho';

// The ready event is vital, it means that your bot will only start reacting to information
// from Discord _after_ ready is emitted
client.on('ready', () => {
  console.log('I am ready!');
});

// Create an event listener for new guild members
client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find('name', 'general');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`:japanese_goblin: **Bine ai venit**, ${member}!
Bun venit pe server-ul Tokyo-Poienarii!
Speram sa iti placa aceast server care este facut cu mare grija, pentru a putea sa te simti bine.
:japanese_goblin: **Ghid noi-veniti**:
Pentru inceput, te rugam sa treci pe aceste canale:
- #regulament - Vezi regulamentul acestui server pe acest canal
- #noutati - Canal destinat informatiilor acestui server`);
});

// Log our bot in
client.login(token);
