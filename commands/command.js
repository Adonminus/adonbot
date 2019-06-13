const classes = require('./classes')

module.exports = function command(name, args, msg) {
  if (name in classes)
    (new classes[name]).run(args,msg)
  else  
    help(name, args, msg)
}

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
