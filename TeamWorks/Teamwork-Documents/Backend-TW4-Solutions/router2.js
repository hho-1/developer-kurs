'use strict'

const router = require('express').Router()

const students = [{
    id: 1,
    name: "Alex",
},
{
id: 2,
    name: "Steve",
}];


/* router.get('/', (req, res) => {
    res.json(students)
}) */
router.get('/:id', (req, res) => {
    const results = students.find(student => student.id == req.params.id)
    res.json(results)
})

module.exports = router