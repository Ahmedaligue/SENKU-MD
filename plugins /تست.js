let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender];
    let name = conn.getName(m.sender);
    let taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
    let message = `⎔⋅• ━ ╼╃ ⌬〔﷽〕⌬ ╄╾ ━ •⋅⎔
>SENKU↳🐢↲𝐁𝐎𝐓
*⌬∙ • ──╾⊱﹝⚜️﹞⊰╼── • ∙⌬*
> ┊ ˼‏🧑‍💻˹ 〕
*⌬∙ • ──╾⊱﹝⚜️﹞⊰╼── • ∙⌬*
           *سينكو🐢 بــ🤖ــوت*
*⌬∙ • ──╾⊱﹝⚜️﹞⊰╼── • ∙⌬*
*مبروك عليك السكريبت شغال يحلو*❤️✌️
*⌬∙ • ──╾⊱﹝⚜️﹞⊰╼── • ∙⌬*
*~⌬ تــ✍︎ــوقــيــع ↡~*🖋️
*⌞⚜️┊SENKU ス 𝐊.𝐠.𝐦┊⚜️⌝*
*⌬∙ • ──╾⊱﹝﹞⊰╼── • `

    conn.sendFile(m.chat, 'https://telegra.ph/file/817e807b798172f5b0399.jpg', 'image.jpg', message, m);
};

handler.customPrefix = /^(قتجربيه)$/i;
handler.command = new RegExp;

export default handler;
