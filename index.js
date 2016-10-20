// import external modules necessary for this project
var Discord = require("Discord.js")
, colors = require("colors/safe")
, fs = require("fs-extra")
, wikijs = require("wikijs");

// import external files, such as the config
var config = require("./config.json");

// initiate a new client from the Discord.js library
var client = new Discord.Client({ forceFetchUsers: true });

// set the theme for the console to make it less confusing
colors.setTheme({
    log: 'cyan',
    output: 'green',
    info: 'yellow',
    warn: 'red',
    error: 'red'
});

client.on("ready", function()
{
    console.log(colors.log("Logged in and ready to go!\nCurrently serving " + client.guilds.size + " guilds and " + client.users.size + " users."));
})

client.on("message", function(msg)
{
    let output = (msg.guild ? `${new Date()}\n@${msg.author.username}: "${msg.content}"\n${msg.guild.name} #${msg.channel.name}` : `${new Date()}\n@${msg.author}: "${msg.content}"\nDM: #${msg.channel.recipient}`);
    console.log(colors.log("\n" + output));

    if (msg.author.id === client.user.id) return;
})

client.login(config.token);
