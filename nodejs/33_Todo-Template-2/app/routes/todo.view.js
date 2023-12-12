"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */
const router = require('express').Router()

// Call TODO Controller:
const todo = require('../controllers/todo.view')

/* router.get('/', todo.list)

router.route('/create')
        .get(todo.create)
        .post( todo.create)

router.get('/:id', todo.read)

router.get('/:id/delete', todo.delete)

router.get('/:id/update', todo.update)
router.post('/:id/update', todo.update)

*/

router.all('/', todo.list)
router.all('/create', todo.create)           //swagger bu sekilde algilamiyor. Üstteki gibi ayri ayri yapmak gerekiyor
router.all('/:id', todo.read)
router.all('/:id/update', todo.update)
router.all('/:id/delete', todo.delete) 

module.exports = router