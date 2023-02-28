const mongoose = require('mongoose')


function connect(){
    mongoose.connect('mongodb://127.0.0.1/estudo-revisao',
        { useNewUrlParser: true, useUnifiedTopology: true })

    const db = mongoose.connection

    db.once('open', () => console.log('Connected to MongoDB Server'))

    db.on('error', () => console.error.bind(console, 'Connection error: '))
}


module.exports = {connect}
