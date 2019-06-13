const Discord = require('discord.js')
const client = new Discord.Client()
const command = require('./command')
const secrets = require('./secrets')

client.on('message', (msg) => {
  if (msg.content.startsWith("!") && msg.author != client.user)
    command(msg.content.substr(1).split(" ")[0], msg.content.substr(1).split(" ").slice(1), msg)
})

client.login(secrets.token)