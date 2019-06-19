const fs = require('fs')
const path = require('path')
const dataPath = path.join(__dirname, '../data/')
const imagePath = path.join(__dirname, '../images/')
const namePath = path.join(__dirname, '../nicknames/')
const actionPath = path.join(__dirname, '../actions/')

module.exports = class list {
  constructor() {
    this.help = 'View list of logged categories using the following syntax `!list [folder]`. Available folders: messages, images, actions, nicknames.'
  }

  run(args, msg) {
    if (args.length != 1) {
      msg.channel.send("Invalid arguments. Try `!list [folder]`")
      return
    }

    let listPath

    switch(args[0]) {
      case 'messages':
          listPath = dataPath
        break
      case 'images':
          listPath = imagePath
        break
      case 'actions':
          listPath = actionPath
        break
      case 'nicknames':
          listPath = namePath
        break
      default:
          msg.channel.send(`Invalid folder. Available folders: messages, images, actions, nicknames.`)
          return
    }

    let categories = ''
    fs.readdir(listPath, (err, files) => {
      if(err) {
        msg.channel.send(`Unable to view ${args[0]} list at the moment`)
        return
      }
      files.forEach(file => {
        if(categories.length > 0)
          categories += ', '
        categories += file
      })
      msg.channel.send(`Available ${args[0]}: \`${categories}\``)
    })
  }
}
