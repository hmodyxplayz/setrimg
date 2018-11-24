const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});




client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : 3zozHuler`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : 3zozHuler `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`اtest`,"http://twitch.tv/S-F")
client.user.setStatus("dnd")
});



 client.login("MzA3MTg3MTA2OTkwNjUzNDQx.Dtr1IQ.nH4BCTD98PLFvBNAWzEPCo5oGq0");
