const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || "drakonis~YuUUzJJQ#LDuIKz-38lhfaNKyuga9w0-v5Mxjs66FgLL8ANDgjkA",
    // add your Session Id make sure it starts with suho~

    PREFIX: process.env.PREFIX || ".",
    // add your prefix for bot

    BOT_NAME: process.env.BOT_NAME || "༄༒𓂆𝐂𝐑𝐘𝐗𝐄𝐍²¹⁰⁹𓂆༒༄ 𝐁𝐋𝐎𝐎𝐃 𝐀𝐍𝐎𝐗",
    // add bot name here for menu

    MODE: process.env.MODE || "private",
    // make bot public-private-inbox-group 

    LINK_WHITELIST: "youtube.com,github.com",

    LINK_WARN_LIMIT: 3, // Number of warnings before action

    LINK_ACTION: "kick", // "kick", "mute", or "none"

    AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
    // make true or false status auto seen

    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
    // make true if you want auto reply on status 

    AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
    // make true if you want auto reply on status 

    AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "𝐉𝐞 𝐬𝐮𝐢𝐬 𝐥𝐞 𝐬𝐞𝐮𝐥𝐞 𝐚 𝐞̂𝐭𝐫𝐞 𝐚𝐝𝐨𝐫𝐞́ 𝐬𝐮𝐫 𝐭𝐞𝐫𝐫𝐞 𝐜𝐨𝐦𝐦𝐞 𝐝𝐚𝐧𝐬 𝐥𝐞𝐬 𝐜𝐢𝐞𝐮x ༄༒𓂆𝐂𝐑𝐘𝐗𝐄𝐍²¹⁰⁹𓂆༒༄ 𝐁𝐋𝐎𝐎𝐃 𝐀𝐍𝐎𝐗 𝐯𝐨𝐮𝐬 𝐨𝐛𝐬𝐞𝐫𝐯𝐞 ☆👁️",
    // set the auto reply message on status reply  

    WELCOME: process.env.WELCOME || "false",
    // true if want welcome and goodbye msg in groups 

    ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
    // make true to know who dismiss or promoted a member in group

    ANTI_LINK: process.env.ANTI_LINK || "false",
    // make anti link true,false for groups 

    MENTION_REPLY: process.env.MENTION_REPLY || "false",
    // make true if want auto voice reply if someone mention you 

    MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/tuzcp7.png",
    // add custom menu and mention reply image url

    ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/tuzcp7.png",
    // add img for alive msg

    LIVE_MSG: process.env.LIVE_MSG || 
`𝐄́𝐩𝐫𝐨𝐮𝐯𝐞 𝐝𝐞 𝐥𝐚 𝐬𝐨𝐮𝐟𝐟𝐫𝐚𝐧𝐜𝐞, 𝐥𝐚 𝐬𝐨𝐮𝐟𝐟𝐫𝐚𝐧𝐜𝐞 𝐟𝐚𝐢𝐭 𝐫𝐞́𝐟𝐥𝐞́𝐜𝐡𝐢𝐫 𝐚𝐜𝐜𝐮𝐞𝐢𝐥𝐥𝐞 𝐥𝐚 𝐞𝐧 𝐭𝐨𝐢 𝐬𝐞𝐧𝐬 𝐫𝐞́𝐬𝐞𝐫𝐯𝐞 𝐩𝐨𝐮𝐫 𝐚𝐩𝐩𝐫𝐞𝐧𝐝𝐫𝐞 𝐚 𝐦𝐢𝐞𝐮𝐱 𝐭𝐞 𝐜𝐨𝐧𝐧𝐚𝐢̂𝐫𝐞, 𝐜𝐞𝐥𝐮𝐢 𝐪𝐮𝐢 𝐧𝐚 𝐩𝐚𝐬 𝐜𝐨𝐧𝐧𝐮𝐞 𝐥𝐚 𝐬𝐨𝐮𝐟𝐟𝐫𝐚𝐧𝐜𝐞 𝐧𝐞 𝐩𝐞𝐮𝐭 𝐩𝐚𝐬 𝐝𝐞́𝐬𝐢𝐫𝐞𝐫 𝐥𝐚 𝐩𝐚𝐢𝐱 𝐯𝐞́𝐫𝐢𝐭𝐚𝐛𝐥𝐞

༄༒𓂆𝐂𝐑𝐘𝐗𝐄𝐍²¹⁰⁹𓂆༒༄ 𝐁𝐋𝐎𝐎𝐃 𝐀𝐍𝐎𝐗`,
    // add alive msg here 

    STICKER_NAME: process.env.STICKER_NAME || "༄༒𓂆𝐂𝐑𝐘𝐗𝐄𝐍²¹⁰⁹𓂆༒༄ 𝐁𝐋𝐎𝐎𝐃 𝐀𝐍𝐎𝐗",
    // type sticker pack name 

    CUSTOM_REACT: process.env.CUSTOM_REACT || "true",
    // make this true for custom emoji react  

    CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "👾,🕳️,⛓️,😌,😎,🥷,🍓,🎭,🏮,🧿,☣️,🚸,🔱,⚜️,✅,▪️,🇨🇮",
    // choose custom react emojis by yourself 

    DELETE_LINKS: process.env.DELETE_LINKS || "false",
    // automatic delete links without removing member 

    OWNER_NUMBER: process.env.OWNER_NUMBER || "2250545477175",
    // add your bot owner number

    OWNER_NAME: process.env.OWNER_NAME || "༄༒𓂆𝐂𝐑𝐘𝐗𝐄𝐍²¹⁰⁹𓂆༒༄ 𝐁𝐋𝐎𝐎𝐃 𝐀𝐍𝐎𝐗",
    // add bot owner name

    DESCRIPTION: process.env.DESCRIPTION || "*© ༄༒𓂆𝐂𝐑𝐘𝐗𝐄𝐍²¹⁰⁹𓂆༒༄ 𝐁𝐋𝐎𝐎𝐃 𝐀𝐍𝐎𝐗*",
    // add bot owner description  

    READ_MESSAGE: process.env.READ_MESSAGE || "false",
    // Turn true or false for automatic read msgs

    AUTO_REACT: process.env.AUTO_REACT || "true",
    // make this true or false for auto react on all msgs

    ANTI_BAD: process.env.ANTI_BAD || "false",
    // false or true for anti bad words  

    ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "true",
    // make anti link true,false for groups 

    AUTO_STICKER: process.env.AUTO_STICKER || "false",
    // make true for automatic stickers 

    AUTO_REPLY: process.env.AUTO_REPLY || "false",
    // make true or false automatic text reply 

    ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
    // make true for always online 

    PUBLIC_MODE: process.env.PUBLIC_MODE || "false",
    // make false if want private mode

    AUTO_TYPING: process.env.AUTO_TYPING || "false",
    // true for automatic show typing  

    READ_CMD: process.env.READ_CMD || "false",
    // true if want mark commands as read  

    DEV: process.env.DEV || "2250545477175",
    // replace with your whatsapp number  

    ANTI_VV: process.env.ANTI_VV || "true",
    // true for anti once view 

    ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox",
    // change it to 'inbox' or 'same' if you want to resend deleted message in same chat 

    AUTO_RECORDING: process.env.AUTO_RECORDING || "false",
    // make it true for auto recording 

    version: process.env.version || "1.0.0-alpha"

    
};
