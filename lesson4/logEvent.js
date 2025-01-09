const { format }  = require('date-fns')
const { v4:uuid }  = require('uuid')

const fs = require('fs')
const fsPromise = require('fs').promises
const path = require('path')


const logEvent = async (message)=>{
    const dateTime  = `${format(new Date(),'yyyy-MM-dd\tHH:mm:ss')}`
    const logMessage = `${dateTime}\t${uuid()}\t${message}\n`
    console.log(logMessage)
    try{
        if (!fs.existsSync(path.join(__dirname,'logs'))){
            await fsPromise.mkdir(path.join(__dirname,'logs'))
        }
        //tesing  ttt 
        await fsPromise.appendFile(path.join(__dirname,'logs','eventLog.txt'),logMessage)

    }catch(err){
        console.log(err)
    }

}

module.exports = logEvent