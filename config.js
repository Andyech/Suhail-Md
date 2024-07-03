const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_41_07_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDMxLFxuICAgICAgICAzNSxcbiAgICAgICAgMzEsXG4gICAgICAgIDgwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDk5LFxuICAgICAgICAxMTksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDgxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTAzLFxuICAgICAgICA4NCxcbiAgICAgICAgNzAsXG4gICAgICAgIDkyLFxuICAgICAgICAxMixcbiAgICAgICAgNzMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTEyLFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NSxcbiAgICAgICAgOCxcbiAgICAgICAgMjAsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMzUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxOSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxOSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNTMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNzQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTc3LFxuICAgICAgICAxODUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMixcbiAgICAgICAgMTM0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMixcbiAgICAgICAgMTk0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDExLFxuICAgICAgICA3NCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDM2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDYzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTE0LFxuICAgICAgICA2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNDYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTgzLFxuICAgICAgICA2MSxcbiAgICAgICAgODAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDI4LFxuICAgICAgICAyMyxcbiAgICAgICAgMTQyLFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NixcbiAgICAgICAgMzMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxOSxcbiAgICAgICAgMTUxLFxuICAgICAgICA3MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDc5LFxuICAgICAgICAxNzksXG4gICAgICAgIDk5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDM1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDExMyxcbiAgICAgICAgNixcbiAgICAgICAgMjM4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNzAsXG4gICAgICAgIDkwLFxuICAgICAgICA3NixcbiAgICAgICAgMjM4LFxuICAgICAgICAxOCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNzEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMzksXG4gICAgICAgIDkyLFxuICAgICAgICAxNyxcbiAgICAgICAgOTQsXG4gICAgICAgIDcxLFxuICAgICAgICAzMSxcbiAgICAgICAgMTYsXG4gICAgICAgIDkwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDcwLFxuICAgICAgICAxNjksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjE1LFxuICAgICAgICA5OCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNzEsXG4gICAgICAgIDczLFxuICAgICAgICAzOSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA1NCxcbiAgICAgICAgODEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDczLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgODIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjE1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDg0LFxuICAgICAgICA1MSxcbiAgICAgICAgMTY1LFxuICAgICAgICA4MyxcbiAgICAgICAgNDgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNjksXG4gICAgICAgIDEyLFxuICAgICAgICAyMCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDk1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTYxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTU2LFxuICAgICAgICA1NixcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgODksXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA5NixcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExMVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjEsXG4gICAgICAgIDQxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNSxcbiAgICAgICAgNDMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE5MixcbiAgICAgICAgNjgsXG4gICAgICAgIDMwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNDksXG4gICAgICAgIDE0MixcbiAgICAgICAgNzQsXG4gICAgICAgIDYsXG4gICAgICAgIDc1LFxuICAgICAgICA2LFxuICAgICAgICA1OCxcbiAgICAgICAgMTQxLFxuICAgICAgICA5NCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyNCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxODgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDcwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTMwLFxuICAgICAgICA0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDgyLFxuICAgICAgICAxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDMsXG4gICAgICAgIDQ3LFxuICAgICAgICA2MixcbiAgICAgICAgMTM2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDY0LFxuICAgICAgICA5NixcbiAgICAgICAgMTI5LFxuICAgICAgICA5NCxcbiAgICAgICAgMTExLFxuICAgICAgICAxMjcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjQwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDgxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTkxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkRsNWRkT2NjRk5SVE01dDN2ak9lbEdWRFk2TkEyOEpCNkVnQ0UzVmZnMHc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogdHJ1ZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiU0poVF9sNldSNnV0NG9XaFlybnRwZ1wiLFxuICBcInBob25lSWRcIjogXCJjZjg5YWFhNy02ZjI5LTQ4ZDMtOTNjYS05MzhiOGUyZTcxMzhcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjA2LFxuICAgICAgOCxcbiAgICAgIDQwLFxuICAgICAgOTksXG4gICAgICAxMyxcbiAgICAgIDE3MixcbiAgICAgIDk3LFxuICAgICAgMCxcbiAgICAgIDIzOSxcbiAgICAgIDY2LFxuICAgICAgOTAsXG4gICAgICAxNzIsXG4gICAgICAxMjIsXG4gICAgICAxMDgsXG4gICAgICAyMTYsXG4gICAgICA3NCxcbiAgICAgIDE0MCxcbiAgICAgIDQwLFxuICAgICAgMzIsXG4gICAgICAyMDBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzcsXG4gICAgICAxMDUsXG4gICAgICA4NixcbiAgICAgIDk3LFxuICAgICAgMzMsXG4gICAgICAxNjIsXG4gICAgICAxNzEsXG4gICAgICA1MyxcbiAgICAgIDQzLFxuICAgICAgMjI3LFxuICAgICAgNTIsXG4gICAgICAxMzQsXG4gICAgICA1OCxcbiAgICAgIDU0LFxuICAgICAgODgsXG4gICAgICA0OCxcbiAgICAgIDI0LFxuICAgICAgMzAsXG4gICAgICAxMjUsXG4gICAgICAxMThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQTRIQUdDNjdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NjcwNTM5ODEyOTo3MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkFORFkgQUlcIixcbiAgICBcImxpZFwiOiBcIjI1OTA0Mjc5ODc4NDczNjo3MEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLenI1ZjRHRU1lZGxMUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjNEWDJSbkNlZkswSGJ1NVVLVjkzUXl3ZGtjSVdsaFpSMUxkSUFZQk9TRlE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiVHVoSnJEalN4Y3BzR2VTbmlENENUR0dZTVdrc3djQzN1YStBdzh0NUtZUDFlWEl5b1lsVHBhSitlTHZTTHlJMnpjVHdYNXBoUXlQMXRvTTk2TytwQWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiZ243SERZbGJpQkdpY3V2UmhDT3ljMkVQTDlDMUN2THU0amZxbVZlbS94ZHhjM29LU2tmZCtGYXdha2NlL3piNG9RZ2NSWHB3d0xzYVR1emJVVkxvQUE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU2NzA1Mzk4MTI5OjcwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDg0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTk5OTYxMDYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFKQ0NcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUpDQy5qc29uIjogIntcImtleURhdGFcIjpcInZaR21kMzB6YlpGREttOW92amRmenlFR01Ic2FaWnpFTHUvUlhRT2ttbms9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTg3NjUyMjQxMSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcxOTk5NTEyODg5MVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
