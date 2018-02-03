const Discord = require('discord.js');
const bot = new Discord.Client();




bot.on('message', message => {
  if (message.content === 'nico nico ni') {
   // message.reply('pong');
    message.channel.sendMessage('annyeong');
  }
});

bot.on("ready", () => {
  bot.user.setPresence({game: {name:"FEEDING OFF BLOOD"}})
  console.log('I have jackoo: {SERVERNAME}')
})

bot.on('ready', ()=>{
  console.log(`Logged in as ${bot.user.tag}!`);
  voiceChannel = bot.guilds.find('name', 'DREAMENERG3T1CER').channels.find('name', 'SUCKED IN');
  voiceChannel.join().then(()=>{
      console.log(`Connected to ${voiceChannel.name}!`);
  });
});


// Create an event listener for new guild members
bot.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find('name', 'general');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Welcome to the server, ${member}`);
});


bot.on('message', function(message){
  if (message.content.startsWith ('Cry')) {
    args = message.content.split(' ');
      channel = message.guild.channels.find('name', message.channel.name);
      guild = message.guild;
      moderatorRole = guild.roles.find('name', 'Love Choerry Jungkook');
      moderatorMembers = moderatorRole.members;
      args = message.content.split(' ');
      if (args[1] === undefined){
          args.push('50');
      }
      arg1 = Number(args[1]);
      if (!moderatorMembers.find('id', message.author.id)) {
          message.reply('You don\'t have permission to do that!', message);
          return;
      }
      message.reply('Clearing chat...', message);
      channel.fetchMessages().then(
              function (msg) {
                  msgarr = msg.array();
                  i = 0;
                  msgarr.forEach(function (item) {
                      if(i === arg1){return;}
                      item.delete()
                              .then(console.log(`Deleted message: ${item.content}`))
                              .catch(console.log);
                      i++;
                  });
              }
      );
  }
  //your code here
});

bot.login('NDA4ODY3Njk0MTQyNTU0MTIz.DVWTZA.PfLjmohOgE4pjSk430nHdg25Lx8');
