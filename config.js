require('dotenv').config();

module.exports = {
  TOKEN: process.env.BOT_TOKEN,
  CLIENT_ID: process.env.CLIENT_ID,
  GUILD_ID: process.env.GUILD_ID,

  COLORS: {
    primary: 0x5865F2,   // Discord Blurple
    success: 0x4ade80,   // Green
    warning: 0xfbbf24,   // Yellow
    danger:  0xf87171,   // Red
    info:    0x38bdf8,   // Blue
  },
};
