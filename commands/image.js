module.exports = class Image {
  constructor() {
    this.help = 'Send an image to be displayed to the channel using the following syntax `!image [imageName]`.'
  }

  run(args, msg) {
    if (args.length != 1) {
      msg.channel.send("Invalid arguments. Try `!image [name]`")
      return
    }
    msg.channel.send('', { files: [`./images/${args[0]}`]}).catch(() => msg.channel.send(`Unable to find image '${args[0]}'`))
  }
}
