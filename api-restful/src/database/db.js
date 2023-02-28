const mongoose = require('mongoose')

function connect(){
    mongoose.connect('mongodb://127.0.0.1/apiRestFul', 
    {useNewUrlParser: true, useUnifiedTopology: true})

    const db = mongoose.connection

    db.once('open', () => console.log('Connected do MongoDB'))

    db.on('error', console.error.bind(console, 'Connection Error: '))
}

module.exports = {
    connect
}