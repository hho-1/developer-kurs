'use strict'

const router = require('express').Router()

/* router.get(/\a(bc|cd)$/, (req, res) => {
    res.send({
        message: 'Path matched'
    })
}) */
/* router.get(/\a[0-9]c{2,3}/, (req, res) => {
    res.send({
        message: 'Path matched'
    })
}) */
/* router.get(/\/*Hello$/, (req, res) => {
    res.send({
        message: 'Path matched'
    })
}) */
router.get(/^.*Hello$/, (req, res) => {
    res.send({
        message: 'Path matched'
    })
})



module.exports = router