const express = require('express')
const cors = require('cors')

const db = require('./database/db')
const routes = require('./routes/routes')

const app = express()

// conexão com o banco de dados
db.connect()

// habilita cors para uma único endereço
// app.use(cors({
//     origin: 'http://127.0.0.1:5500'
// }))

// habilita cors para mais de um endereço
const allowedOrigins = [
    'http://127.0.0.1:5500',
    'http://yourapp.com'];

app.use(cors({
  origin: function(origin, callback){

    // Mobile Request
    if(!origin) return callback(null, true);

    if(allowedOrigins.indexOf(origin) === -1){
      let msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));

// habilita server para receber dados json
app.use(express.json())

//definindo as rotas
app.use('/api', routes)

// executando o servidor
const port = process.env.PORT || 8080
app.listen(port, () => console.log('Server is listening to port', port))