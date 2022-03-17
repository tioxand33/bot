const { WAConnection } = require('@adiwajshing/baileys')
const fs = require('fs')

const conn = new WAConnection() 

conn.on ('open', () => {
    console.log (`credentials updated!`)
    const authInfo = conn.base64EncodedAuthInfo()
    fs.writeFileSync('./auth_info.json', JSON.stringify(authInfo, null, '\t'))
})
conn.connect()