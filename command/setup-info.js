const {
  SlashCommandBuilder,
  EmbedBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  PermissionFlagsBits,
} = require('discord.js');
const INFO = require('../utils/infoData');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('setup-info')
    .setDescription('Gửi bảng thông tin server vào kênh hiện tại')
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),

  async execute(interaction) {
    // Main embed
    const embed = new EmbedBuilder()
      .setTitle('📋 Thông Tin Server')
      .setDescription('Chọn mục bên dưới để xem thông tin chi tiết 👇')
      .setColor(0x5865F2)
      .setTimestamp()
      .setFooter({ text: 'Thông tin chỉ hiện với bạn khi ấn nút' });

    // Tạo nút từ infoData
    const buttons = Object.entries(INFO).map(([key, data]) =>
      new ButtonBuilder()
        .setCustomId(`info_${key}`)
        .setLabel(data.label)
        .setStyle(ButtonStyle.Secondary)
    );

    // Discord giới hạn 5 nút / 1 hàng
    const rows = [];
    for (let i = 0; i < buttons.length; i += 5) {
      rows.push(new ActionRowBuilder().addComponents(buttons.slice(i, i + 5)));
    }

    await interaction.reply({ content: '✅ Đã gửi!', ephemeral: true });
    await interaction.channel.send({ embeds: [embed], components: rows });
  },
};
