const fsPromises = require('fs').promises
const path = require('path')



const filePromises = async ()=>{
    try{
        const data = await fsPromises.readFile(path.join(__dirname,'files','starter.txt'),'utf8')
        console.log(data)

        await fsPromises.unlink(path.join(__dirname,'files','starter.txt'))

        await fsPromises.writeFile(path.join(__dirname,'files','promiseWrite.txt'),data)
        await fsPromises.appendFile(path.join(__dirname,'files','promiseWrite.txt'),'\n\n adding the promise ')
        await fsPromises.rename(path.join(__dirname,'files','promiseWrite.txt'),path.join(__dirname,'files','promiseWriteName.txt'))
        const newdata = await fsPromises.readFile(path.join(__dirname,'files','promiseWriteName.txt'),'utf8')
        console.log(newdata)
    }
    catch(err){
        console.log(err)
    }


}
filePromises()


// fs.readFile(path.join(__dirname,'files','starter.txt'),'utf8',(error, data) => {
//     if (error) throw error
//     console.log(data)

// })

// console.log('hello world')
// fs.writeFile(path.join(__dirname,'files','reply.txt'),'how all this mistaken idea of denouncing pleasure and praising pai',(error) => {
//     if (error) throw error
//     console.log('operation completed successfully')

//     fs.appendFile(path.join(__dirname,'files','reply.txt'),'\n\ntesting file',(error) => {
//     if (error) throw error
//     console.log(' done  updating test')

//     fs.rename(path.join(__dirname,'files','testing.txt'),path.join(__dirname,'files','name2.txt'),(error) => {
//     if (error) throw error
//     console.log(' done  name changing test')

// })

// })

// })

// fs.appendFile(path.join(__dirname,'files','testing.txt'),'testing file',(error) => {
//     if (error) throw error
//     console.log(' done  updating test')

// })


process.on('uncaughtException',error => {
    console.error(`There was an error: ${error}`)
    process.exit(1)
})