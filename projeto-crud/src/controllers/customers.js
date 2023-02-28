const CustomersModel = require('../models/customers')
const {crypto} = require('../utils/password')

const defaultTile = 'Cadastro de Clientes'

function index(req, res){
        res.render('register', {
            title: defaultTile,
        })
}

async function add(req, res) {
    const {
        name,
        age,
        email,
        password
    } = req.body

    const passwordCrypto = await crypto(password)

    const register = new CustomersModel({
        name,
        age, 
        email, 
        password: passwordCrypto,
    })

    register.save()
    res.render('register', {
        title: defaultTile,
        massage: 'Cadastro realizado com sucesso'
    })
}

async function listUsers(req, res) {
    const users = await CustomersModel.find()

    res.render('listUsers', {
        title: 'Listagem de usuários',
        users,

    })
}

async function formEdit(req, res){
    const { id } = req.query

    const user = await CustomersModel.findById(id)

    res.render('edit', {
        title: 'Editar Usuário',
        user,
    })
}

async function edit(req, res){
    const {
        name,
        age,
        email,
    } = req.body

    const { id } = req.params

    const user = await CustomersModel.findById(id)

    user.name = name
    user.age = age
    user.email = email

    user.save()

    res.render('edit', {
        title: 'Editar Usuário',
        user,
        message: 'Usuário alterado com sucesso!'
    })
}

async function remove(req, res){
    const { id } = req.params

    const remove = await CustomersModel.deleteOne({ _id: id })

    if(remove.acknowledged) {
        res.redirect('/list')
    }
}

module.exports = {
    add,
    index,
    listUsers,
    formEdit,
    edit,
    remove,
}