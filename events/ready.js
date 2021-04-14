const chalk = require("chalk");
const moment = require("moment");
const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
const log = message => {
  
    console.log(`${chalk.magenta(moment().format('YYYY-MM h:mm:ss'))} ${message}`)
}

module.exports = async client => {
  let tarih = moment().format('l');
    client.user.setPresence({activity:{name:`I LOVE YOU PARADİSE ❤️`},status: 'online'})
    log(chalk.green(`[BOT] Aktif, Komutlar Yüklendi ${tarih}`))
  }

