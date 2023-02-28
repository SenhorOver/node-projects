const ProductsModel = require('../models/products')


function index(req, res){
    const {c} = req.query
    res.render('register', {
        title: 'Registro de Produtos',
        cadastrado: c,
    })
}

function register(req, res){
    const {name, price, stock} = req.body

    const register = new ProductsModel({
        name,
        price,
        stock,
    })

    register.save()

    res.redirect('/register?c=1')
}

async function list(req, res){
    const products = await ProductsModel.find()
    const {e} = req.query
    const {r} = req.query

    res.render('list', {
        title: 'Listagem dos Produtos registrados',
        products,
        edited: e,
        removed: r,
    })
}

async function edit(req, res){
    const {id} = req.params

    const product = await ProductsModel.findById(id)
    res.render('edit', {
        title: 'Editar Produtos',
        product,
    })
}

async function confirmEdit(req, res){
    const {id} = req.params
    const {name, price, stock} = req.body

    const product = await ProductsModel.findById(id)

    product.name = name
    product.price = price
    product.stock = stock

    await product.save()

    res.redirect('/list?e=1')
}

async function remove(req, res){
    const {id} = req.params

    const response = await ProductsModel.deleteOne({_id: id})

    if(response.acknowledged){
        res.redirect('/list?r=1')
    } else {
        res.redirect('/error')
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