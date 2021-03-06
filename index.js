const Discord = require("discord.js");
const { token } = require("./config.json");
const client = new Discord.Client();
const prefix = '!'

client.once("ready", () => {
    console.log("Coucou copain!");
});

client.on('message', message => {
    if (message.content === `${prefix}ping`) {
        message.channel.send('Pong.');
    } else if (message.content === `${prefix}beep`) {
        message.channel.send('Boop.');
    } else if (message.content === `${prefix}server`) {
        message.channel.send(`This server's name is: ${message.guild.name}`);
    } else if (message.content === `${prefix}user-info`) {
        message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
    }
});

client.login(token);