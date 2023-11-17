'use strict'

const router = require('express').Router()

/* router.get(/\a(bc|cd)/, (req, res) => {
    //console.log("<h1>path matched</h1");
    res.send({
        message: "path matched"
    });
}) */

/* router.get(/\a[0-9]c{2,3}/, (req, res) => {
    res.send({
        message: "path matched"
    });
}) */

/* router.get(/\/*Hello$/, (req, res) => {
    res.send({
        message: 'Route matched'
    })
}) */
/* router.get(/^Hello$/, (req, res) => {
    res.send({
        message: 'Route matched'                       //??????
    })
}) */

module.exports = router