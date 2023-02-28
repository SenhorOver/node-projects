const router = require('express').Router()

const IndexController = require('../controllers/index')
const ProductsController = require('../controllers/products')
const EmployersController = require('../controllers/employers')

// Main Page
router.get('/', IndexController.index)




// Register Procucts Page
router.get('/register', ProductsController.index)
router.post('/register/new', ProductsController.register)

// List Products Page
router.get('/list', ProductsController.list)

// Edit Product Page
router.get('/edit/:id', ProductsController.edit)
router.post('/edit/new/:id', ProductsController.confirmEdit)

// Remove Product
router.get('/remove/:id', ProductsController.remove)



// Register Employers Page
router.get('/registerEmployers', EmployersController.index)
router.post('/registerEmployers/new', EmployersController.register)

// List Employers Page
router.get('/listEmployers', EmployersController.list)

// Edit Employers Page
router.get('/editEmployers/:id', EmployersController.edit)
router.post('/editEmployers/new/:id', EmployersController.confirmEdit)

// Remove Employers Page
router.get('/removeEmployers/:id', EmployersController.remove)

module.exports = router