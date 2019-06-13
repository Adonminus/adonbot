module.exports = class Greet {
  constructor() {
    this.help = 'Greet the bot, and it will respond with a random greeting.'
  }

  run(args, msg) {
    let random = Math.floor(Math.random() * 5)
    switch(random){
      case 0:
          msg.channel.send(`Greetings ${msg.author}! I'm a reaver, rawr owo`)
        break
      case 1:
          msg.channel.send(`Greetings ${msg.author}! I'm a bot, beep boop.`)
        break
      case 2:
          msg.channel.send(`Greetings ${msg.author}! I'm at your service.`)
        break
      default:
          msg.channel.send(`Greetings ${msg.author}! Nice to meet you!`)
    }
  }
}
