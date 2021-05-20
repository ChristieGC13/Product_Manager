const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [
            true, "Name of product is required"
        ]
    },
    price: {
        type: Number,
        required: [
            true, "Price of product is required"
        ]
    },
    description: {type: String}
}, {timestamps:true})

module.exports.Product = mongoose.model('Product', ProductSchema);