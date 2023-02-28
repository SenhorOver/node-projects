const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    password: String,
})

const CustomersModel = mongoose.model('customers', schema)

module.exports = CustomersModel