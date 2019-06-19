const fs = require('fs')

module.exports = class nickname {
  constructor() {
    this.help = 'Save an action to be performed. Syntax: `!perform [category] [message]`. Include `%user` to add mention to message that will later be substituted with the user. Use the command !perform to later perform it on a user.'
  }

  run(args, msg) {
    if (args.length < 2) {
      msg.channel.send("Not enough arguments. Try `!action [category] [message]`")
      return
    }
    let data = args.splice(1).join(' ')
    fs.writeFile(`./actions/${args[0]}`, data , 'utf-8', () => msg.channel.send(`Action has been saved to '${args[0]}' category.`))
  }
}
