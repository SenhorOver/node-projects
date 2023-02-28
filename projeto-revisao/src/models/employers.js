const mongoose = require('mongoose')

const squema = new mongoose.Schema({
    name: String,
    lastname: String,
    age: Number,
    pwd: String,
})

const EmployersModel = mongoose.model('employers', squema)

module.exports = EmployersModel