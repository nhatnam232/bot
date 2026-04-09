// ===================================================================

// ===================================================================

module.exports = {

  // ===================================================================
  // 🎭 DANH SÁCH ROLE (DÙNG CHO LỆNH /help roles HOẶC /roles)
  // ===================================================================
  roles: {
    label: '🎭 Hệ Thống Role',   // Tên hiển thị trên menu lệnh
    emoji: '🎭',                 // Icon đi kèm
    color: 0x5865F2,            // Màu xanh Discord chuẩn
    title: '🎭 DANH SÁCH ROLE TRÊN SERVER',
    thumbnail: 'https://media.discordapp.net/attachments/1491501603860250815/1491680544977850468/roleinfo.gif?ex=69d89344&is=69d741c4&hm=7de5e05ff358388463df8d33142a18718bfa28efb35082bf59ff032682f2c3be&=',              // 👈 Thêm URL ảnh (nếu muốn) - ví dụ: 'https://i.imgur.com/xxx.png'
    fields: [
      // ---------- NHÓM QUẢN TRỊ ----------
{ name: '━━━━━━<a:KING:1491717457851977728> QUẢN TRỊ <a:KING:1491717457851977728>━━━━━━', value: '\u200b', inline: false },
      {
        name: '\u200b',
        value: '<@&1491468552081772775> — Chủ server, quyền cao nhất.',
        inline: false,
      },
      {
        name: '\u200b',
        value: '<@&1491174689027133461> — Quản lý toàn bộ server.',
        inline: false,
      },
      {
        name: '\u200b',
        value: '<@&1491394405998002196> — Kiểm duyệt nội dung, xử lý vi phạm.',
        inline: false,
      },
      {
        name: '\u200b',
        value: '<@&1491469328065892573> — Thực tập moderator / quản lý.',
        inline: false,
      },
      {
        name: '\u200b',
        value: '<@&1491469535365169273> — Hỗ trợ thành viên.',
        inline: false,
      },
      {
        name: '\u200b',
        value: '<@&1491178442551722004> — Bot của server.',
        inline: false,
      },

      // ---------- NHÓM THÀNH VIÊN ----------
      { name: '━━━━━━f<a:sao:1491714645596045334>THÀNH VIÊN<a:sao:1491714645596045334> ━━━━━━', value: '\u200b', inline: false },
      {
        name: '\u200b',
        value: '<@&1491429396127416320> — Thành viên chính thức',
        inline: false,
      },

      // ---------- NHÓM ROLE ĐẶC BIỆT ----------
      { name: '━━━━━━<a:yellowsparklies:1491715912061943898> ĐẶC BIỆT <a:yellowsparklies:1491715912061943898>━━━━━━', value: '\u200b', inline: false },
      {
        name: '\u200b',
        value: '<a:booster1:1491699720446414938><@&1491149087200772247><a:booster1:1491699720446414938> — Server Booster (Thần tài)',
        inline: false,
      },
      {
        name: '\u200b',
        value: '<a:Partnered_Server_Owner_a:1491716308054835222> <@&1491470380404183242> — Partner - Đối tác của server.',
        inline: false,
      },
      {
        name: '\u200b',
        value: '<a:HeartMitten:1491716755993661490><@&1491447602984648835> — Princess - Công chúa của server.',
        inline: false,
      },
      {
        name: '\u200b',
        value: '<a:Arrw:1491501986208551054><@&1491424886290120896> — DJ - Quản lý âm nhạc, chuyên làm nhạc v.v...',
        inline: false,
      },
      {
        name: '\u200b',
        value: '<a:Arrw:1491501986208551054><@&1491469808900902942> — Member đời đầu - Gắn bó từ những ngày đầu.',
        inline: false,
      },
      {
        name: '\u200b',
        value: '<a:Arrw:1491501986208551054><@&1491470093480100055> — Khuấy đảo chat - Thành viên năng nổ.',
        inline: false,
      },
      {
        name: '\u200b',
        value: '<a:Arrw:1491501986208551054><@&1491470182084902943> — Cú đêm - Hoạt động về đêm.',
        inline: false,
      },
      {
        name: '\u200b',
        value: '<a:Arrw:1491501986208551054><@&1491472922341019728> — Baller - Dân chơi thể thao.',
        inline: false,
      },
      {
        name: '\u200b',
        value: '<a:Arrw:1491501986208551054><@&1491473503457902712> — Gamer - Đam mê game.',
        inline: false,
      },
      {
        name: '\u200b',
        value: '<a:Arrw:1491501986208551054><@&1491473568310100080> — Vibe Checker - Lan tỏa năng lượng tích cực.',
        inline: false,
      },
      {
        name: '\u200b',
        value: '<a:Arrw:1491501986208551054><@&1491473790503358555> — AFK Master - Vua offline nhưng vẫn online.',
        inline: false,
      },

      // ---------- NHÓM ROLE LEVEL ----------
      { name: '━━━━━━<a:GrandmasterAnimated:1491718000846442567> LEVEL REWARD <a:GrandmasterAnimated:1491718000846442567>━━━━━━', value: '\u200b', inline: false },
      {
        name: '\u200b',
        value: '<a:Rarrow_wes:1491699724384735292><@&1491472807337394429> — Level 100',
        inline: false,
      },
      {
        name: '\u200b',
        value: '<a:Rarrow_wes:1491699724384735292><@&1491472649770237952> — Level 70',
        inline: false,
      },
      {
        name: '\u200b',
        value: '<a:Rarrow_wes:1491699724384735292><@&1491472522829631691> — Level 50',
        inline: false,
      },
      {
        name: '\u200b',
        value: '<a:Rarrow_wes:1491699724384735292><@&1491472434295996577> — Level 40 (Bỏ giới hạn cooldown 5s)',
        inline: false,
      },
      {
        name: '\u200b',
        value: '<a:Rarrow_wes:1491699724384735292><@&1491471963955138602> — Level 30',
        inline: false,
      },
      {
        name: '\u200b',
        value: '<a:Rarrow_wes:1491699724384735292><@&1491471861534691389> — Level 20',
        inline: false,
      },
      {
        name: '\u200b',
        value: '<a:Rarrow_wes:1491699724384735292><@&1491471765413564469> — Level 10',
        inline: false,
      },
      {
        name: '\u200b',
        value: '<a:Rarrow_wes:1491699724384735292><@&1491471504838361231> — Level 5',
        inline: false,
      },
      {
        name: '\u200b',
        value: '<a:Rarrow_wes:1491699724384735292><@&1491470549870710866> — Level 1',
        inline: false,
      },
    ],
    footer: '✨ Role được cấp tự động khi tham gia server và đạt cấp độ.',
  },

  // ===================================================================
  // 🏠 THÔNG TIN SERVER (LỆNH /serverinfo)
  // ===================================================================
  server: {
    label: '🏠 Thông Tin Server',
    emoji: '🏠',
    color: 0x4ADE80,            // Màu xanh lá
    title: '🏠 THÔNG TIN SERVER',
    thumbnail: 'https://media.discordapp.net/attachments/1491501603860250815/1491681217043496991/519a1d5be60a56fd245320d93437c635.jpg?ex=69d893e4&is=69d74264&hm=971c4696521d473f7a0c426cbfd3775a586eb77c122ed307a543321a8659af25&=&format=webp',              // 👈 Thêm URL logo server (ví dụ: ảnh icon server)
    fields: [
      { name: '━━━━━━📌 THÔNG TIN CƠ BẢN 📌━━━━━━', value: '\u200b', inline: false },
      {
        name: '📛 Tên Server',
        value: '**BLV Bún Chả**', // 👈 SỬA TẠI ĐÂY
        inline: true,
      },
      {
        name: '📅 Ngày Thành Lập',
        value: '08/04/2026',             // 👈 SỬA TẠI ĐÂY
        inline: true,
      },
      {
        name: '🌏 Khu Vực',
        value: 'Việt Nam',               // 👈 SỬA TẠI ĐÂY
        inline: true,
      },
      { name: '━━━━━━ CHỦ ĐỀ & LIÊN KẾT ━━━━━━', value: '\u200b', inline: false },
      {
        name: '<a:ffw48:1491501981989208377> Chủ Đề <a:ffw48:1491501981989208377>',
        value: 'Nơi giao lưu cộng đồng cùng BLV bún chả', // 👈 SỬA
        inline: false,
      },
      {
        name: '🔗 Link Tham Gia',
        value: '[Bấm vào đây để tham gia](https://discord.gg/SVYDuxNdqF)', // 👈 SỬA
        inline: false,
      },
    ],
    footer: '💖 Cảm ơn bạn đã là một phần của server!',
  },

  // ===================================================================
  // 🎙️ THÔNG TIN BLV / STREAMER (LỆNH /blv)
  // ===================================================================
  blv: {
    label: '🎙️ BLV Bún Chả',
    emoji: '🎙️',
    color: 0xF97316,            // Màu cam
    title: '🎙️ THÔNG TIN BLV BÚN CHẢ',
    thumbnail: 'https://media.discordapp.net/attachments/1491501603860250815/1491681534640394311/658376025_893003180402872_7663193099816201561_n.jpg?ex=69d8942f&is=69d742af&hm=73a51956fff9d5aaddc8195be4c83c062cff5106a91b89016f39687a327277cc&=&format=webp',              // 👈 Thêm URL avatar của BLV
    fields: [
  { name: '━━━━━━👤 THÔNG TIN CÁ NHÂN ━━━━━━', value: '\u200b', inline: false },
  {
    name: '<a:ffw48:1491501981989208377> Biệt danh / Nickname <a:ffw48:1491501981989208377>',
    value: 'Bún Chả',                
    inline: true,
  },
  {
    name: '<a:stackcolor:1491699716231139388> Chuyên môn',
    value: 'Bình luận viên bóng đá',
    inline: true,
  },
  {
    name: '<a:ffw48:1491501981989208377>🏆 Các giải đấu phụ trách <a:ffw48:1491501981989208377>',
    value: 'Champions League, Laliga, Premier League, và những trận thể thao nổi tiếng của thế giới',
    inline: false,
  },
  { name: '━━━━━━📺 STREAM & GIỚI THIỆU ━━━━━━', value: '\u200b', inline: false },
  {
    name: '📺 Kênh Youtube',
    value: '[Ấn vào đây](https://www.youtube.com/@blvbuncha11)', 
    inline: false,
  },
  {
    name: '📝 Giới Thiệu',
    value: 'BLV Bún Chả là một bình luận viên bóng đá trực tuyến nổi tiếng trên các nền tảng TikTok và Facebook, được biết đến với phong cách bình luận hài hước và cá tính.',
    inline: false,
  },
  { name: '━━━━━━📅 LỊCH & THÀNH TÍCH ━━━━━━', value: '\u200b', inline: false },
  {
    name: '📅 Lịch Stream',
    value: '...', 
    inline: false,
  },
  {
    name: '🏆 Thành Tích',
    value: '• Sở hữu kênh youtube hơn 7.5k Subscribe\n• Sở hữu kênh tiktok với tên blvbuncha11 với tổng follow hơn 300K\n• Sở hữu Group Facebook 41k+ thành viên',
    inline: false,
  },
],
},

  // phan admin //

  admin: {
    label: '👥 Đội Ngũ Admin',
    emoji: '👥',
    color: 0xF87171,          
    title: '👥 ĐỘI NGŨ ADMIN HIỆN TẠI',
    thumbnail: 'https://i.pinimg.com/1200x/cd/0c/18/cd0c1858c432416c80f04b9d9dc89c3a.jpg',
    fields: [
      { name: '━━━━━━ OWNER ━━━━━━', value: '\u200b', inline: false },
      {
        name: '',
        value: '<a:ffw48:1491501981989208377><@&1491468552081772775>\n <@1237803072630165594> — Chủ sáng lập, chịu trách nhiệm chung.<a:ffw48:1491501981989208377>', // 
        inline: false,
      },
      { name: '━━━━━━ ADMIN ━━━━━━', value: '\u200b', inline: false },
      {
        name: '',
        value: '<a:ffw48:1491501981989208377> <@&1491174689027133461>\n  <@719203090968084541> , <@1281569606980341762> — Quản lý kỹ thuật\n<@865871460223549440> , <@950030382064083024> , <@1119348535201124425> — Quản lý cộng đồng <a:ffw48:1491501981989208377>', // 👈 SỬA
        inline: false,
      },
      { name: '━━━━━━ MODERATOR ━━━━━━', value: '\u200b', inline: false },
      {
        name: '',
        value: '<a:ffw48:1491501981989208377> <@&1491394405998002196>\n <@1469756571499233457> , <@853895664119709717> , <@659680379581497364> — Duyệt bài, xử lý báo cáo <a:ffw48:1491501981989208377>',
        inline: false,
      },
    ],
    footer: '💬 Cần hỗ trợ? Hãy tag trực tiếp admin hoặc tạo ticket!',
  },
};
