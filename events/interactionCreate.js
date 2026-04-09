module.exports = {
  name: 'interactionCreate',
  async execute(interaction, client) {

    // ===== SLASH COMMANDS =====
    if (interaction.isChatInputCommand()) {
      const command = client.commands.get(interaction.commandName);
      if (!command) return;
      try {
        await command.execute(interaction);
      } catch (err) {
        console.error(err);
        const msg = { content: '❌ Có lỗi xảy ra!', ephemeral: true };
        if (interaction.replied || interaction.deferred) {
          await interaction.followUp(msg);
        } else {
          await interaction.reply(msg);
        }
      }
    }

    // ===== BUTTONS =====
    if (interaction.isButton()) {
      const { handleButton } = require('../utils/buttonHandler');
      await handleButton(interaction);
    }
  },
};
