module.exports = async (context) => {
  const { client, m, url } = context;


  const messageCaption = `
   *Follow my channels and join my  groups for more updates*
  ╭────────────────
  │ *Wachannel:* https://whatsapp.com/channel/0029VasHgfG4tRrwjAUyTs10
    
  │ *wagroup:*  https://chat.whatsapp.com/JLVDDZLpcsk2byRMDWf0IR

  │ *Telegram:*  https:/t.me/blacktappy5
    
  │ *Contact owner:* https://wa.me/254759000340

 ╰─────────────────── 
  `;

  // Prepare the image URL
  const image = {
    url: url
  };

  // Prepare the message object
  const message = {
    image: image,
    caption: messageCaption
  };

  // Send the message
  await client.sendMessage(m.chat, message, { quoted: m });
};

