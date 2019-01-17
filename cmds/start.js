const Discord = require('discord.js');
const Listing = require('./../modules/Listing');


module.exports.run = async (bot, message, args) => {
   let SnipeChannel = message.channel;
   const filter = m => !m.author.bot;
   let game = new Listing();

   let editLast3 = null;

   let startMessage = new Discord.RichEmbed()
       .setTitle("Codes Parties")
       .setDescription("Veuillez écrire vos trois dérniers chiffres")
       .setColor("#00FFFF")
       .setFooter("Maestro");

    message.channel.send({embed: startMessage});

    let time = 25;
    let editTime = "";

    let timeEmbed = newDiscord.RichEmbed()
        .setTitle("Prochaine game dans...")
        .setDescription(time +" minutes")
        .setColor("#9A2EFE");
        
        setTimeout(async () => {
            editLast3 = await snipeChannel.send({embed: last3});
        }, 10);
  

  let timeInterval = setInterval(() => {
      if (time === 1){
          time -= 1;
          timeEmbed.setDescription(time + "minutes");
          clearInterval(timeInterval);
        }else {
            time -= 1;
            timeEmbed.setDescription(time + " minutes"); 
      }

      editTime.edit({embed: timeEmbed}).catch((err) => {
          console.log("cant edit");
          clearInterval(timeInterval);
      });

  },60000);

  let last3 = new Discord.RichEmbed()
      .setTitle("3 derniers chiffres")
      .setColor("#80FF00");

    setTimeout(async () => {
        editLast3 = await message.channel.send({embed: last3});
    }, 10)

    const collector = snipeChannel.createMessageCollector(filter, {max: 200, maxMatches: 200, time: 180000});

    collector.on('collect', m => {
        console.log('Collected ${m.content} | ${m.author.username}');

        if (game.data.length === 0 && m.content.length === 3){
            game.addID(m.content.toUpperCase(), m.author.username);
        }else if (m.content.length === 3){
            if (game.usersPresent(m.author.username)){
                game.deleteUserEntry(m.author.username);

                if (game.ifPresent(m.content,toUpperCase())){
                    game.addUser(m.content.toUpperCase(), m.author.username);
                    }else {
                        game.addID(m.content.toUpperCase(),m.author.username);
                }
            }
        }
    })


}




module.exports.help = {
    name: "start"
}
