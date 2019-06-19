const fs = require('fs')

module.exports = class log {
  constructor() {
    this.help = 'Save a message using the following syntax `!log [category] [message]`. Use !read command to later read them or !list to see available categories.'
  }

  run(args, msg) {
    if (args.length < 2) {
      msg.channel.send("Not enough arguments. Try `!log [category] [message]`")
      return
    }
    let data = args.splice(1).join(' ')
    fs.writeFile(`./data/${args[0]}`, data , 'utf-8', () => msg.channel.send(`Message has been saved to '${args[0]}' category.`))
  }
}
