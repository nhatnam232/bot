const { REST, Routes } = require('discord.js');
const { TOKEN, CLIENT_ID, GUILD_ID } = require('./config');
const fs = require('fs');
const path = require('path');

const commands = [];
const commandFiles = fs.readdirSync(path.join(__dirname, 'commands')).filter(f => f.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  if ('data' in command) {
    commands.push(command.data.toJSON());
  }
}

const rest = new REST().setToken(TOKEN);

(async () => {
  try {
    console.log(`🔄 Đang deploy ${commands.length} slash commands...`);
    await rest.put(Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), { body: commands });
    console.log('✅ Deploy slash commands thành công!');
  } catch (err) {
    console.error('❌ Lỗi deploy:', err);
  }
})();
