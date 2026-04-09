module.exports = {
  name: 'ready',
  once: true,
  execute(client) {
    console.log(`✅ Bot đã online: ${client.user.tag}`);
    client.user.setActivity('Server Info', { type: 3 }); // 3 = Watching
  },
};
