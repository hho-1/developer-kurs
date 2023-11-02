'use strict'


const {User} = require('../models/userModel')

module.exports.User = {
    list: async(req, res) => {
        const data = await User.find()

        res.status(200).send({
            error: false,
            result: data,
            count: data.length,
        })
    },
    create: async(req, res) => {
        const data = await User.create(req.body)

        res.status(201).send({
            error: false,
            result: res.body,
            result: data
        })
    },
    read: async(req, res) => {
        const data = await User.findOne({_id:req.params.userId})
        //const data = await User.findById(req.params.userId)      // ayni seyi verir

        res.status(200).send({
            error: false,
            result: data,
            count: data.length,
        })
    },
    update: async(req, res) => {
        const data = await User.updateOne({_id:req.params.userId}, req.body)

        res.status(202).send({
            error: false,
            result: data,
            count: data.length,
            newData: await User.findOne({_id:req.params.userId}),      //Yenisini görmek icin
        })
    },
    delete: async(req, res) => {
        const data = await User.deleteOne({_id:req.params.userId})

        res.status(200).send({
            error: false,
            result: data,
        })
    },
}
