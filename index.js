const discord = require('discord.js');
const bot = new discord.Client();
const { Client, RichEmbed } = require('discord.js');
const PREFIX = "-"

bot.setMaxListeners(20)

// bot start

bot.on('ready', function(){
    console.log("I Ready !");
    bot.user.setActivity(`-help | Membres :${bot.users.size}`)
});





bot.on('ready', () => {
  console.log("Servers:")
  bot.guilds.forEach((guild) => {
      console.log( ` Membres : ${guild.memberCount} - ` + guild.name )

  })
});



bot.on('ready', function(){
    console.log(` Total : ${bot.users.size}`)
});



// info

bot.on('message', message => {
    if (message.content === '$help') {
        const embed = new RichEmbed()
            .setColor('#fe6c78')
            .setTitle('PeakyBot Info')
            .setURL('https://discord.js.org/')
            .setAuthor('Peakybot', '', ' img')
            .setDescription('__| Command List |__')
            .setThumbnail('img')
            .addField('**__🔺Command🔺__**', '____________________')
            .addField('-help', 'Pour voir toutes les info du bot ! ', true)
            .addField('-mdpts', 'Vous montre le mot de pass top secret ! ', true)
            .addField('-recruteur', 'Savoir qui contacter pour se fair recruter !', true)
            .addField('-site', 'le lien du site', true)
            .addField('-vote', 'Crée un vote', true)
            .addField('-report', 'Envoyer un message a ', true)
            .addField('-soon', 'soon', true)
            .addBlankField()
            .setTimestamp()
            .setFooter('SladeBot', ' img');
      message.channel.send(embed);
    }
});


//------------------------commandes----------------------------------




bot.on('message', message => {
  if (message.content === '$sdfsd') {
      const embed = new RichEmbed()
          .setColor('#fe6c78')
          .addField(' text', true)
    message.channel.send(embed);
  }
});

// status

bot.on('message', message => {
    if(message.content[0] === PREFIX)   {
        if(message.content === '$botping') {
            let début = Date.now();
            message.channel.send('Ping : . . .')
                .then((m) => m.edit(`Ping : **${Date.now() - début}**ms`));
        }
    }
});










bot.on('message', message => {
  if (message.content === '$status') {
    function duration(ms) {
      const sec = Math.floor((ms / 1000) % 60).toString()
      const min = Math.floor((ms / (1000 * 60)) % 60).toString()
      const hrs = Math.floor((ms / (1000 * 60 * 60)) % 60).toString()
      const days = Math.floor((ms / (1000 * 60 * 60 * 24)) % 60).toString()
      
        return `**${days.padStart(1, '0')}** jours, **${hrs.padStart(2, '0')}** heurs, **${min.padStart(2, '0')}** minutes, **${sec.padStart(2, '0')}** secondes`

      }
      let début = Date.now();
      const embed = new RichEmbed()
          .setColor('#fe6c78')
          .setTitle('Slade status')
          .setURL('https://discord.js.org/')
          .addField('**Servers**', `**${bot.guilds.size}**`, false)
          .addField('**Membres**', `**${bot.users.size}**`, false)
          .addField('**Uptime**', `${duration(bot.uptime)}`, false)
          .addField('**Ping API**', `**${Date.now() - début}**ms`, false)
    message.channel.send(embed);
  }
});











// join leave

bot.on("guildMemberAdd", member => { 
  const embed = new RichEmbed()
      .setColor('#fe6c78')
      .setTitle(`✅`)
      .setDescription(`${member} a rejoint les mebre de la ${guild.name}`)
      member.guild.channels.find("name", "🎈Join-leave🎈").send(embed)
})

bot.on("guildMemberRemove", member => { 
  const embed = new RichEmbed()
      .setColor('#fe6c78')
      .setTitle(`❌`)
      .setDescription(`${member} a quite les mebre de la ${guild.name}`)
      member.guild.channels.find("name", "🎈join-leave🎈").send(embed)
})




bot.on('message', message => {
  if (message.content === '$install') {
      var server = message.guild;
      server.createChannel(`🎈join-leave🎈`, "text");
  }
});


// role reaction

bot.on('message', message => {
  if (message.content === '$role') {
      const embed = new RichEmbed()
          .setColor('#fe6c78')
          .addField('role test', true)
          message.channel.send(embed).then(function(message){
            message.react("✅")
            
    })
  }
});


bot.login('token')






