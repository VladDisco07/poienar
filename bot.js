//outdated (editing this in 2021)

const Discord = require('discord.js');

const client = new Discord.Client();

const token = 'NDMwMDcyMDAxMTcyODY1MDI1.DaK3jQ.dt3atrv4upv-CpPoQxupza1w4sg';

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find('name', 'chatbox');
  if (!channel) return;
  channel.send(`Bine ai venit pe **« WonderGames ϟ »**, ${member}`);
});

// Log our bot in
client.login(token);
