const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send({
        message: 'This is our LOGIN Route'
    })
})



module.exports = router