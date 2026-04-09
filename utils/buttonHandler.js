const { EmbedBuilder } = require('discord.js');
const INFO = require('./infoData');

async function handleButton(interaction) {
  const id = interaction.customId;
  if (!id.startsWith('info_')) return;

  const key = id.replace('info_', '');
  const data = INFO[key];

  if (!data) {
    return interaction.reply({ content: '❌ Không tìm thấy thông tin!', ephemeral: true });
  }

  const fields = data.fields || [];
  const CHUNK_SIZE = 25;
  const embeds = [];

  for (let i = 0; i < Math.max(1, fields.length); i += CHUNK_SIZE) {
    const chunk = fields.slice(i, i + CHUNK_SIZE);
    const embed = new EmbedBuilder().setColor(data.color).setTimestamp();

    if (i === 0) {
      embed.setTitle(data.title);
      if (data.thumbnail) embed.setThumbnail(data.thumbnail);
    }

    if (i + CHUNK_SIZE >= fields.length) {
      if (data.footer) embed.setFooter({ text: data.footer });
    }

    if (chunk.length) embed.addFields(chunk);
    embeds.push(embed);
  }

  await interaction.reply({ embeds, ephemeral: true });
}

module.exports = { handleButton };