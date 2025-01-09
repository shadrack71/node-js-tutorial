const fs = require('fs')


const rs =fs.createReadStream('./files/lorem.txt',{encoding: 'utf8'})

const ws = fs.createWriteStream('./files/lorem-new.txt')

// rs.on('data',(dataChuck) => ws.write(dataChuck))
rs.pipe(ws)