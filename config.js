import {watchFile, unwatchFile} from 'fs';
import chalk from 'chalk';
import {fileURLToPath} from 'url';
import fs from 'fs'; 
import moment from 'moment-timezone';

global.botnumber = "254111728536"
global.confirmcode = ""
global.authFile = `BumbleSession`;

global.owner = [
  ['254794597254', '👑 𝐒𝐔𝐏𝐄𝐑 𝐁𝐎𝐓 𝐂𝐑𝐄𝐀𝐓𝐎𝐑👑', true],
  ['254101003655', '🐉Confronter', true],
  ['254111728536', 'Dragon Killer', true],
  ['254796283064', '❗️Confronter', true],
  ['254743776612', '💫 𝐒𝐔𝐏𝐄𝐑 𝐁𝐎𝐓💫', true],
];

global.suittag = ['254794597254'];
global.prems = ['254794597254'];

global.packname = '𒁂⃝ᰲĴΔ¥Đ€Ň ƤΔƤƗƗ™ ͟͞';
global.author = '★𝐒𝐔𝐏𝐄𝐑 𝐁𝐎𝐓★';
global.wm = '★𝐒𝐔𝐏𝐄𝐑 𝐁𝐎𝐓★';
global.igfg = '★𝐒𝐔𝐏𝐄𝐑 𝐁𝐎𝐓★';
global.wait = '*[❗] 𝐒𝐔𝐏𝐄𝐑 𝐁𝐎𝐓 𝐈𝐒 𝐋𝐎𝐀𝐃𝐈𝐍𝐆...*';

global.imagen1 = fs.readFileSync('./Menu2.jpg');
global.imagen2 = fs.readFileSync('./src/nuevobot.jpg');
global.imagen3 = fs.readFileSync('./src/Pre Bot Publi.png');
global.imagen4 = fs.readFileSync('./Menu.png');
global.imagen5 = fs.readFileSync('./src/+18.jpg');
global.imagen6 = fs.readFileSync('./Menu3.png');

global.mods = [];

//* *******Tiempo***************
global.d = new Date(new Date + 3600000);
global.locale = 'es';
global.dia = d.toLocaleDateString(locale, {weekday: 'long'});
global.fecha = d.toLocaleDateString('es', {day: 'numeric', month: 'numeric', year: 'numeric'});
global.mes = d.toLocaleDateString('es', {month: 'long'});
global.año = d.toLocaleDateString('es', {year: 'numeric'});
global.tiempo = d.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true});
//* ****************************
global.wm2 = `▸ ${dia} ${fecha}\n▸ 𝐒𝐔𝐏𝐄𝐑 𝐁𝐎𝐓`;
global.gt = '★𝐒𝐔𝐏𝐄𝐑 𝐁𝐎𝐓★';
global.mysticbot = '★𝐒𝐔𝐏𝐄𝐑 𝐁𝐎𝐓★';
global.md = 'https://github.com/jayden-official';
global.mysticbot = 'https://github.com/jayden-official';
global.waitt = '*[❗] 𝐒𝐔𝐏𝐄𝐑 𝐁𝐎𝐓 𝐈𝐒 𝐋𝐎𝐀𝐃𝐈𝐍𝐆...*';
global.waittt = '*[❗]𝐒𝐔𝐏𝐄𝐑 𝐁𝐎𝐓 𝐈𝐒 𝐋𝐎𝐀𝐃𝐈𝐍𝐆...*';
global.waitttt = '*[❗]𝐒𝐔𝐏𝐄𝐑 𝐁𝐎𝐓 𝐈𝐒 𝐋𝐎𝐀𝐃𝐈𝐍𝐆...*';
global.nomorown = '254794597254';
global.pdoc = ['application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.ms-excel', 'application/msword', 'application/pdf', 'text/rtf'];
global.cmenut = '❖––––––『';
global.cmenub = '┊✦ ';
global.cmenuf = '╰━═┅═━––––––๑\n';
global.cmenua = '\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     ';
global.dmenut = '*❖─┅──┅〈*';
global.dmenub = '*┊»*';
global.dmenub2 = '*┊*';
global.dmenuf = '*╰┅────────┅✦*';
global.htjava = '⫹⫺';
global.htki = '*⭑•̩̩͙⊱•••• ☪*';
global.htka = '*☪ ••••̩̩͙⊰•⭑*';
global.comienzo = '• • ◕◕════';
global.fin = '════◕◕ • •';
global.botdate = `⫹⫺ Date :  ${moment.tz('America/Los_Angeles').format('DD/MM/YY')}`; // Asia/Jakarta
global.bottime = `𝗧 𝗜 𝗠 𝗘 : ${moment.tz('America/Los_Angeles').format('HH:mm:ss')}`;// America/Los_Angeles
global.fgif = {key: {participant: '0@s.whatsapp.net'}, message: {'videoMessage': {'title': wm, 'h': `Hmm`, 'seconds': '999999999', 'gifPlayback': 'true', 'caption': bottime, 'jpegThumbnail': fs.readFileSync('./Menu.png')}}};
global.multiplier = 99;
global.flaaa = [
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=',
];
//* ************************

const file = fileURLToPath(import.meta.url);
watchFile(file, () => {
  unwatchFile(file);
  console.log(chalk.redBright('Update \'config.js\''));
  import(`${file}?update=${Date.now()}`);
});

