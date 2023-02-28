const EmployersModel = require('../models/employers')
const {pwdCrypt} = require('../utils/pwdCrypt')


function index(req, res){
    const {c} = req.query

    res.render('registerEmployers', {
        title: 'Registro de funcionários',
        cadastrado: c,
    })
}

async function register(req, res){
    const {name, lastname, age, pwd} = req.body

    const newPwd = await pwdCrypt(pwd)

    const register = new EmployersModel({
        name,
        lastname,
        age,
        pwd: newPwd,
    })

    register.save()

    res.redirect('/registerEmployers?c=1')
}

async function list(req, res){
    const {e} = req.query
    const {r} = req.query
    const employers = await EmployersModel.find()

    res.render('listEmployers', {
        title: 'Lista de funcionários',
        employers,
        edited: e,
        removed: r,
    })
}

async function edit(req, res){
    const {id} = req.params

    const employer = await EmployersModel.findById(id)


    res.render('editEmployers.ejs', {
        title: 'Editar informações',
        employer,
    })
}

async function confirmEdit(req, res){
    const {id} = req.params
    const {name, lastname, age} = req.body

    const employer = await EmployersModel.findById(id)

    employer.name = name
    employer.lastname = lastname
    employer.age = age

    await employer.save()

    res.redirect('/listEmployers?e=1')
}

async function remove(req, res){
    const {id} = req.params

    const removed = await EmployersModel.deleteOne({_id: id})

    if(removed.acknowledged){
        res.redirect('/listEmployers?r=1')
    }
}

module.exports = {
    index,
    register,
    list,
    edit,
    confirmEdit,
    remove,
}