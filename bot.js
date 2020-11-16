const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');

var prefix = ayarlar.prefix;

client.on('ready', () => {
  console.log(`botun ${client.user.tag}sunucuya giriş yaptı!`);
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.reply('aleykümselam');
  }
});

client.on('message', message => {
  if (message.content.toLowerCase() === 'profilimi göster') {
    message.reply(message.author.displayAvatarURL());
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'selamınaleyküm') {
    msg.reply('aleykümselam');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'merhaba') {
    msg.reply('merhaba');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'günaydın') {
    msg.reply('günaydın');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'nasılsınız') {
    msg.reply('iyiyim sen nasılsın');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix + 'yardım') {
    msg.reply('Avatırını görmek istiyorsan profilimi göster demen yeterli ');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === prefix + 'sahibin kim') {
    msg.reply('35SHAD0W35#4524');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'iyi akşamlar') {
    msg.reply('iyi akşamlar');
  }
});

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.cache.find(ch => ch.name === 'member-log');
  if (!channel) return;
  channel.send(`Sunucuya hoş geldin, ${member}`);
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'good bot') {
    msg.reply('teşekkür ederim');
  }
});

client.login('NzIwMjQ0OTg4NTkxNDcyNjQx.XuDKag.yiIh5Bns74bh9Q_vvG6nCZGecc8');
