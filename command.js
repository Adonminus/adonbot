const fs = require('fs')
var classes = {}

module.exports = function command(name, args, msg) {
  if (name in classes)
    (new classes[name]).run(args,msg)
  else  
    help(name, args, msg)
}

fs.readdir("./commands/", (err, files) => {
    if (err) return
    files.forEach(file => {
        if (!file.endsWith(".js")) return;
         classes[file.split(".")[0]] = require(`./commands/${file}`)
    })
})

function help(name, args, msg) {
  if(args[0] in classes && name === 'help')
    msg.channel.send((new classes[args[0]]).help)
  else
    listHelp(msg)
}

function listHelp(msg) {
  let list = ''
  for(var cmd in classes) {
    if(list.length > 0)
      list += ', '
    list += cmd
  }
  msg.channel.send("Type `!help [topic]`. Here are the available topics: `" + list + "`")
}
