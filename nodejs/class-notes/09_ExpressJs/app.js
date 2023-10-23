'use strict'
console.log("express app");
const exp = require('express')
const app = exp()
require('dotenv').config()
//console.log(process.env);

const PORT = process.env.PORT || 8000
const HOST = process.env.HOST || '127.0.0.1'
//app.listen(8000,()=>{console.log("server is running")})
//app.listen(PORT,()=>{console.log("server is running")})

/* app.get('/', (req, res) => {
    // res.send('welcome de06 expressJS')
    // res.send({key: 'value'})
     res.send({message: 'Welcome de06 members'})
}) */
// app.post('/', (req, res) => {res.send({message: 'post request'})})
// app.put('/', (req, res) => {res.send({message: 'put request'})})
// app.delete('/', (req, res) => {res.send({message: 'delete request'})})
// app.patch('/', (req, res) => {res.send({message: 'patch request'})})
// app.all('/', (req, res) => {res.send({message: 'all request'})})


// app.route('/')
//                 .get((req, res) => {res.send({message: 'route get request'})})
//                 .post((req, res) => {res.send({message: 'route post request'})})
//                 .put((req, res) => {res.send({message: 'route put request'})})
//                 .delete((req, res) => {res.send({message: 'route delete request'})})

// app.route('/home').get((req, res) => res.send({message:'Welcome to home'}))
// app.route('/abc(x?)123').get((req, res) => res.send({message:'x varsa da yoksa da calis'}))    //x varsa da yoksa da calis
// app.route('/abc(x+)123').get((req, res) => res.send({message:'ortaya istedigin kadar x yaz'}))    //n times
// app.route('/abc(*)123').get((req, res) => res.send({message:'araya ne koyarsan koy'}))     //araya ne koyarsan koy

//?regex

// app.route('/home/').get((req, res) => res.send({message:'Welcome to home'}))
// app.route(/home$/).get((req, res) => res.send({message:'Welcome to home'}))    //sonu home olanlar
// app.route(/^\/home/).get((req, res) => res.send({message:'Welcome to home'}))    //basi home olanlar


//? catch ile url parametreler

app.get('/users/:userId(\\d+)/:userName(\\w+)', (req, res) => {
    console.log(req.params);
    res.send({
        message: 'Parametreler calisiyor.',
        userID: req.params.userId,
        userName: req.params.userName,
        protocol: req.protocol,
        parameters: req.params,
        baseURL: req.baseUrl,
        path: req.path,
        query: req.query,
        subDom: req.subdomains
    })
  })


  //? Some useful response methods


  app.get('/error', (req, res) => {
    // res.sendStatus(404)
    // res.status(404).send("New error message")
    // res.json({message: 'JSON formati'})
    // res.download('./app.js', 'newFile.js')
    //res.send(__dirname)    //Dosya adini yazdirma
    // res.sendFile(__dirname + './app.js')
    // res.redirect('http://www.google.com')
  })

app.listen(PORT,HOST, ()=>{console.log(`server is running on http://${HOST}:${PORT}`)})