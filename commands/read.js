const fs = require('fs')
const path = require('path')
const dataPath = path.join(__dirname, '../data/')

module.exports = class read {
  constructor() {
    this.help = 'Read a message using the following syntax `!read [category]`. Use !log command to save a message or !list to see available categories.'
  }

  run(args, msg) {
    if (args.length != 1) {
      msg.channel.send("Invalid arguments. Try `!read [category]`")
      return
    }
    fs.readFile(path.join(dataPath, args[0]), (err, data) => {
      if (!err)
        msg.channel.send(`${data}`)
      else 
        msg.channel.send(`Unable to read '${args[0]}'`)
    })
  }
}
