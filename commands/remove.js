const fs = require('fs')
const path = require('path')
const dataPath = path.join(__dirname, '../data/')

module.exports = class remove {
  constructor() {
    this.help = 'Remove category using the following syntax `!read [category]`. Incidents such as malicious removing of logs will be reported and punished.'
  }

  run(args, msg) {
    if (args.length != 1) {
      msg.channel.send("Invalid arguments. Try `!remove [category]`")
      return
    }
    fs.unlink(path.join(dataPath, args[0]), err => {
      if (!err)
        msg.channel.send(`Deleted '${args[0]}' successfully.`)
      else
        msg.channel.send(`Unable to remove '${args[0]}'`)
    })
  }
}
