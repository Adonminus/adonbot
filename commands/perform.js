const fs = require('fs')
const path = require('path')
const pathIsInside = require('path-is-inside')
const actionPath = path.join(__dirname, '../actions/')
const namePath = path.join(__dirname, '../nicknames/')

module.exports = class read {
  constructor() {
    this.help = 'Perform an action on a user. Syntax: `!perform [action] on [nickname]`.'
  }

  run(args, msg) {
    if (args.length != 3) {
      msg.channel.send("Invalid arguments. Try `!perform [action] on [nickname]`")
      return
    }
    if(args[1] !== 'on' && args[1] !== 'of'){
      msg.channel.send("Invalid syntax. Try `!perform [action] on [nickname]`")
      return
    }

    let readPath = path.join(namePath, args[2])
    if(pathIsInside(readPath, namePath))
      fs.readFile(readPath, (err, data) => {
        if (!err) 
          this.performAction(msg, args[0], `${data}`)
        else
          msg.channel.send(`Unable to find nickname '${args[2]}'`)
      })
    else
      msg.channel.send(`Trying to read file outside of scope.`)
  }

  performAction(msg, action, nickname) {
    let readPath = path.join(actionPath, action)
    if(pathIsInside(readPath, actionPath))
      fs.readFile(readPath, (err, data) => {
        if (!err)
          msg.channel.send(`${data}`.replace('%user', `${nickname}`))
        else 
          msg.channel.send(`Unable to find action '${action}'`)
      })
    else 
      msg.channel.send(`Trying to read file outside of scope.`)
  }
}
