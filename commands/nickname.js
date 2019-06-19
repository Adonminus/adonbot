const fs = require('fs')

module.exports = class nickname {
  constructor() {
    this.help = 'Save a nickname for a user. Syntax: `!nickname [@user] [nickname]`'
  }

  run(args, msg) {
    if (args.length !== 2) {
      msg.channel.send("Invalid arguments. Try `!nickname [@user] [nickname]`")
      return
    }
    fs.writeFile(`./nicknames/${args[1]}`, args[0] , 'utf-8', () => msg.channel.send(`'${args[0]}' nicknamed as '${args[1]}'.`))
  }
}
