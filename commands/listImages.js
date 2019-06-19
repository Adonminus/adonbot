const fs = require('fs')
const path = require('path')
const imagePath = path.join(__dirname, '../images/')

module.exports = class ImageList {
  constructor() {
    this.help = 'View list of images using the following syntax `!listImages`.'
  }

  run(args, msg) {
    let imageNames = ''
    fs.readdir(imagePath, (err, files) => {
      if(err) {
        msg.channel.send(`Unable to view image list at the moment`)
        return
      }
      files.forEach(file => {
        if(imageNames.length > 0)
          imageNames += ', '
        imageNames += file
      })
      msg.channel.send(`Available images: \`${imageNames}\``)
    })
  }
}
