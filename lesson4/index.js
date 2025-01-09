
const logEvent = require('./logEvent')
const EventEmiiter = require('events')



class MyEmitter extends EventEmiiter{}
const myEmitter = new MyEmitter();

myEmitter.on('log',(msg)=>{
    logEvent(msg)

})
setTimeout(()=> {
    myEmitter.emit('log','Log event emitted')


},2000)