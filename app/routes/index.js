let express = require('express')
let authController = require('../controllers/authControllers')
let adminController = require('../controllers/adminControllers')
let customerController = require('../controllers/customerController')
let bookController = require('../controllers/bookControllers')
let transactionController = require('../controllers/transactionControllers')
let validateRegisterMiddlewares = require('../middlewares/validateRegisterMiddlewares')
let validatebookMiddlewares = require('../middlewares/validateBookMiddlewares')
let authMiddlewares = require('../middlewares/authMiddlewares')
let router = express.Router()

//Auth
// Register
router.post('/register/admin', validateRegisterMiddlewares, authController.registerAdmin)
// Login
router.post('/login/admin', authController.loginAdmin)

// Admin
// Delete admin Account
router.delete('/admin/:id', authMiddlewares.isAuthenticate, adminController.deleteAdmin)
// View List of admin Account
router.get('/admin', authMiddlewares.isAuthenticate, adminController.getAdmin)
//View admin Account by id
router.get('/admin/:id', authMiddlewares.isAuthenticate, adminController.getAdminById)
// Update admin Account
router.put('/admin/:id', authMiddlewares.isAuthenticate, adminController.updateAdmin)

// Customer
// Register
router.post('/register/customer', validateRegisterMiddlewares, authController.registerCustomer)
// Login
router.post('/login/customer', authController.loginCustomer)

// Delete admin Account
router.delete('/customer/:id', authMiddlewares.isAuthenticate, customerController.deleteCustomer)
// View List of admin Account
router.get('/customer', authMiddlewares.isAuthenticate, customerController.getCustomer)
//View admin Account by id
router.get('/customer/:id', authMiddlewares.isAuthenticate, customerController.getCustomerById)
// Update admin Account`
router.put('/customer/:id', authMiddlewares.isAuthenticate, customerController.updateCustomer)

// Book
// admin can use admin service if they are register and log in
// Create book
router.post('/book', validatebookMiddlewares, authMiddlewares.isAuthenticate, bookController.createBook)
// Delete book
router.delete('/admin/:adminid/book/:id', authMiddlewares.isAuthenticate, bookController.deleteBook)
// Update bookspo
router.put('/admin/:adminid/book/:id', authMiddlewares.isAuthenticate, bookController.updateBook)
// View List of book
router.get('/book', authMiddlewares.isAuthenticate, bookController.getAllBook)
router.get('/admin/:adminid/book', authMiddlewares.isAuthenticate, bookController.getBook)
// View book by Id
router.get('/admin/:adminid/book/:id', authMiddlewares.isAuthenticate, bookController.getBookById)

router.post('/createtransaction', transactionController.createTransaction)
router.post('/createtransactiondetail', transactionController.createTransactionDetail)
router.get('/transactiondetail', transactionController.getTransactionDetail)
router.get('/transactionheader', transactionController.getTransactionHeader)
router.delete('/deletetransaction/:id', transactionController.deleteTransaction)

// router.get('/cart', bookController.)
module.exports = router