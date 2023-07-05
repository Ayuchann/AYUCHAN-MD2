// Hilih

let handler = async (m, { conn }) => {
let ppown = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1]) 
let teksbio = `${htki} *BIODATA* ${htka}`
let biooo =`${htki} *BIODATA* ${htka}
${htjava} *💌 Nama* : AYUCHAN
${htjava} *♂️ Gender* : WANITA
${htjava} *🕋 Agama* : PRIVATE
${htjava} *⏰ Tanggal lahir* : PRIVATE
${htjava} *🎨 Umur* : PRIVATE
${htjava} *🧮 Kelas* : S2
${htjava} *🧩 Hobby* : GAME,AI,CODING
${htjava} *💬 Sifat* : HUMORIS
${htjava} *🗺️ Tinggal* : PRIVATE 
${htjava} *📷 ɪɴsᴛᴀɢʀᴀᴍ* : ${sig}
${htjava} *💌 TY:* ${syt}
•·––––––––––––––––––––––––––·•
`
await conn.sendFile(m.chat, pu, 'menu.jpg', biooo, false, m, adReply)
}

handler.help = ['bioowner']
handler.tags = ['info']
handler.command = /^(bio|ownerbio|bioowner)$/i

export default handler
