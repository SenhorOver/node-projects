const mongoose = require('mongoose')

const squema = new mongoose.Schema({
    name: String,
    price: Number,
    stock: Number,
})

const ProductsModel = mongoose.model('products', squema)

module.exports = ProductsModel