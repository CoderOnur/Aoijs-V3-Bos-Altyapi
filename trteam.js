const aoijs = require("aoi.js")
var fs = require("fs")
const bot = new aoijs.Bot({
  token: process.env.token,
  prefix: "$getUserVar[prefix]"
  })

bot.onMessage()
bot.onJoined()
bot.onLeave()

var reader = fs.readdirSync("./komutlar/").filter(file => file.endsWith(".js"))
for(const  file of reader){const command = require(`./komutlar/${file}`)
bot.command({
  name: command.name,
  code: command.code
  })
 }

bot.command({
  name: "ping",
  code: `Pingim: **$botPing**`
  })

bot.status({
  text: "Durum",
  type: "PLAYING", //WATCHING=İzliyor,PLAYING=Oynuyor,LISTENING=Dinliyor,STREAMING=Yayın Yapiyor//
  status: "online", //idle=Boşta,dnd=Rahatsız Etmeyin,online=Aktif//
  time: 12
  })

bot.variables({
  değişken: "Değer",
  prefix: "!",
  })
