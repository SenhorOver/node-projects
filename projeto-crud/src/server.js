const express = require('express')
const path = require('path')

const db = require('./database')
const routes = require('./routes')

const app = express()


// Conexão com o banco de dados
db.connect()

// Configurando o template engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// Definindo os arquivos públicos
app.use(express.static(path.join(__dirname, 'public')))

// Habilita server para receber dados via post (formulários)
app.use(express.urlencoded({ extended: true }))

// Defininfo as rotas
app.use('/', routes)

// 404 error (not found)
app.use((req, res) => {
    res.send('Página não encontrada!')
})


// Executando o servidor
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Starting server on port ${port}`))