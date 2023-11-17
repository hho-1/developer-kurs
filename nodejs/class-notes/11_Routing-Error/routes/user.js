'use strict'

//?Express Routing

const router = require('express').Router()
// router.get('/', (req, res) => {res.send({message: 'All users'})})
// router.get('/login', (req, res) => {res.send({message: 'Login page'})})
// router.get('/logout', (req, res) => {res.send({message: 'Logout page'})})
// router.get('/user', (req, res) => {res.send({message: 'User page'})})
// router.get('/user/:userID', (req, res) => {res.send({message: 'A special user page'})})


// router.get('/register', (req, res) => {res.send({message: 'Get page'})})
//         .post('/register', (req, res) => {res.send({message: 'Post page'})})
//         .put('/register', (req, res) => {res.send({message: 'Put page'})})
//         .delete('/register', (req, res) => {res.send({message: 'Delete page'})})

const userControl = (req, res, next) => {
    const {userName} = req.query
    console.log(userName);
    if(userName == 'de') next()
    else res.send({message: 'Wrong user name'})
}
router.use(userControl)

//*Shortest form

router.route('/register').get((req, res) => {res.send({message: 'Get page'})})
                        .post((req, res) => {res.send({message: 'Post page'})})
                        .put((req, res) => {res.send({message: 'Put page'})})
                        .delete((req, res) => {res.send({message: 'Delete page'})})

module.exports = router