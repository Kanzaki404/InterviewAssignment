const http = require('http')
const port = process.env.PORT || 5000;

const app = require('./app')
var debug = require('debug')('dev')


const server = http.createServer(app);
// debug('Listening on port: ', port);
server.listen(port, err => {
    if(err){
        console.log(err)
    }else{
        console.log("server is listening on port: ", port)
    }
})