'use strict'

//?Express Routing

const router = require('express').Router()
router.get('/', (req, res) => {res.send({message: 'How is it going?'})})
router.get('/about', (req, res) => {res.send({message: 'Here is about page'})})
router.get('/user/:userID', (req, res) => {res.send({message: 'User page'})})

module.exports = router
