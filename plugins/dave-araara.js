import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
let vn = './mp3/ara-araa-maa-maa.mp3'
conn.sendFile(m.chat, vn, './mp3/ara-araa-maa-maa.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /^(ara ara|ara|maa|ma|araa ara|cukup|sayang|syg)$/i
handler.command = new RegExp

handler.fail = null

handler.limit = false
handler.mods = false 
handler.premium = false
handler.group = false
handler.private = false

export default handler
