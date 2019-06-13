const fs = require('fs')
const path = require('path')
const dataPath = path.join(__dirname, '../data/')

module.exports = class list {
  constructor() {
    this.help = 'View list of logged categories using the following syntax `!log`. Use !log command to save a message or !read to read the message inside the category.'
  }

  run(args, msg) {
    let categories = ''
    fs.readdir(dataPath, (err, files) => {
      if(err) {
        msg.channel.send(`Unable to view category list at the moment`)
        return
      }
      files.forEach(file => {
        if(categories.length > 0)
          categories += ', '
        categories += file
      })
      msg.channel.send(`Available categories: \`${categories}\``)
    })
  }
}
