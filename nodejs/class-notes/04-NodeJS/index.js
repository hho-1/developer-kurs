'use strict'

const http = require('node:http')       //http modülünü cagirdik

/* const app = http.createServer((request, response) => {
    response.end('Welcome to nodejs server')
}).listen(8000, ()=> console.log('Server calisiyor... http://127.0.0.1:8000')) */


/* const app = http.createServer((req, res) => {
    //console.log(req);

    if(req.url == '/'){
        res.end('Welcome to HOME page')
    }
    else if(req.url == '/product'){
        res.end('Welcome to PRODUCT page')
    }
    else{
        res.end('Welcome to nodejs server')
    }
    
})
app.listen(8000, ()=> console.log('Server calisiyor... http://127.0.0.1:8000')) */


const app = http.createServer((req, res) => {
    //console.log(req);

    if(req.url == '/'){
        /* res.write('message 1')
        res.write('message 2')
        res.end() */                 // .end döngünün sonlanmasi icin sart

        if(req.method == 'GET'){
            //res.statusCode = 404
            //res.statusMessage = 'This is status message'
            res.writeHead(404, 'This is status message')
            res.end('GET request received')
        }
        else{
            res.end('You cannot get this request')
        }
    }
    else if(req.url == '/product'){
        res.end('Welcome to PRODUCT page')
    }
    else{
        res.end('Welcome to nodejs server')
    }
    
})
app.listen(8000, ()=> console.log('Server calisiyor... http://127.0.0.1:8000'))