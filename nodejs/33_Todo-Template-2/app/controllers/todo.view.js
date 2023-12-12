"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */
// npm i express-async-errors
require('express-async-errors')

const Todo = require('../models/todo')

const PRIORITY = {
    '1': 'High',
    '0': 'Normal',
    '-1': 'Low'
}

module.exports = {

    list: async (req, res) => {

        // const data = await Todo.findAll()
        const data = await Todo.findAndCountAll({
            order: [
                ['id', 'DESC']
            ],
        })

        // res.status(200).send({
        //     error: false,
        //     result: data
        // })

        // res.render('page') // views/page.ejs
        // Send data:
        // res.render('page', {
        //     username: 'Qadir',
        //     email: 'qadir@clarusway.com',
        //     isLogin: false
        // })

        // console.log(data)

        res.render('todoList', { count: data.count, todos: data.rows, priority: PRIORITY })
    },

    // CRUD METHODS:

    create: async (req, res) => {

        if (req.method == 'POST') { // Form sent.
            // Saving Process:

            // console.log('Form sent.')
            // console.log(req.body)

            const data = await Todo.create(req.body)

            // Redirect to home:
            res.redirect('/view')

        } else { // Form viewed.

            // Viewing Process:
            // console.log('Form viewed.')
            res.render('todoCreate')
        }
    },

    read: async (req, res) => {

        // https://sequelize.org/docs/v6/core-concepts/model-querying-finders/
        // const data = await Todo.findOne({ where: { id: req.params.id } })

        const data = await Todo.findByPk(req.params.id)
        // res.status(200).send({
        //     error: false,
        //     result: data
        // })
        res.render('todoRead', { todo: data, priority: PRIORITY })

    },

    update: async (req, res) => {

        if (req.method == 'POST') {

            const isUpdated = await Todo.update(req.body, { where: { id: req.params.id } })

            // Redirect to home:
            res.redirect('/view')

        } else {

            const data = await Todo.findByPk(req.params.id)

            res.render('todoUpdate', { todo: data, priority: PRIORITY })

        }
    },

    delete: async (req, res) => {

        const isDeleted = await Todo.destroy({ where: { id: req.params.id } })

        // Redirect to home:
        res.redirect('/view')
    }
}