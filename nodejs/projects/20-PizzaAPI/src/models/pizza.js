'use strict'

const {mongoose} = require('../configs/dbConnection')


const PizzaSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    image: {
        type: String,
        trim: true,
    },
    price: {
        type: Number,
        trim: true,
        required: true,
    },
    toppings: [{            //?many to many condition
        type: mongoose.Schema.Types.ObjectId,
        ref:'Topping',
        trim: true,
        required: true,
    }],
    
}, {
    collection: 'pizzas',
    timestamps: true
})

module.exports=mongoose.model('Pizza', PizzaSchema)