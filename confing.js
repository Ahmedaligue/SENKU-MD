import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath, pathToFileURL } from 'url'

global.owner = [['212658594530', '🌩️ ẉa.me//𓆩🕸️SENKU DEV🕸️𓆪‖.peị!‽ 👑', true], ['5217294888993'], ['573155428601'], ['5214531287294'], ['51906662557'], ['5492266466080'], ['593968585383'], ['573026191480'], ['5492266613038'], ['573106040746'], ['5215610314499']]

//BETA: Si quiere evitar escribir el número que será bot en la consola, agregué desde aquí entonces:
//Sólo aplica para opción 2 (ser bot con código de texto de 8 digitos)
global.botNumberCode = '+212626817129' //Ejemplo: +59309090909
global.confirmCode = ''

global.animxscans = ['212658594530']
global.suittag = ['212658594530']
global.mods = []
global.prems = []

global.packname = '『 حقوق عمك سينكو 』'
global.author = '『  𓆩🕸️SENKU🕸️𓆪 』'
global.wm = '『𓆩🕸️SENKU🕸️𓆪  』'
global.wm2 = '『 𓆩🕸️SENKU🕸️𓆪 』'
global.azami = '『 𓆩🕸️SENKU🕸️𓆪 』'
global.cb = '『 𓆩🕸️SENKU🕸️𓆪 』'

global.vs = 'V2 • 1.0.5'
global.library = 'Baileys'
global.baileys = '@whiskeysockets/baileys'
global.lenguaje = 'arabe'
global.menudi = ['⛶','❏','⫹⫺']
global.dev = '© 𓆩🕸️SENKU DEVELOPER🕸️𓆪'
global.devnum = '+212658594530'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => { unwatchFile(file)
console.log(chalk.yellow('Se actualizo el archivo config.js'))
import(`${file}?update=${Date.now()}`)
})
