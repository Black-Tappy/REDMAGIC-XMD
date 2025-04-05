module.exports = async (context) => {
  const { client, m, prefix } = context; // Destructure 'm' and 'prefix' properly

  // Define the message content
  let p = `

  
 button ✅ Testing...
  `;

  // Define the image URL
  let imagePath = 'https://files.catbox.moe/b8hpsa.jpg';

  // Define the buttons
  const buttons = [
    {
      buttonId: `${prefix}support`, 
      buttonText: { displayText: "Support" },
    },
    {
      buttonId: `${prefix}repo`, 
      buttonText: { displayText: "Repo" },
    },
    {
      buttonId: `${prefix}ping`, 
      buttonText: { displayText: "Speed" },
    },
  ];

 
  const flowActions = [
    {
      buttonId: "action",
      buttonText: { displayText: "Options" },
      type: 4,
      nativeFlowInfo: {
        name: "single_select",
        paramsJson: JSON.stringify({
          title: "MENU",
          sections: [
            {
              title: "Select The Menu",
              highlight_label: "",
              rows: [
                {
                  header: "Keith",
                  title: "MD",
                  description: "Regards Keith",
                  id: `${prefix}menu`, 
                },
                {
                  header: "KEITH MD",
                  title: "Appreciation",
                  description: "Regards to the owner",
                  id: `${prefix}speed`, 
                },
              ],
            },
          ],
        }),
      },
      viewOnce: true,
    },
  ];

 
  const buttonMessage = {
    image: { url: imagePath },
    caption: p,
    footer: "© Keith\n",
    headerType: 1,
    buttons: buttons,
    viewOnce: true,
    contextInfo: {
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterJid: '120363266249040649@newsletter',
        newsletterName: 'Redmagic Support',
      },
      externalAdReply: {
        title: "Redmagic Testing",
        body: "Keith",
        thumbnailUrl: `https://files.catbox.moe/b8hpsa.jpg,
        sourceUrl: "https://whatsapp.com/channel/0029VasHgfG4tRrwjAUyTs10",
        mediaType: 1,
        renderLargerThumbnail: true,
      },
    },
  };


  buttonMessage.buttons.push(...flowActions);

  
  await client.sendMessage(m.key.remoteJid, buttonMessage);
};
