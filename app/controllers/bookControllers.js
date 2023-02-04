let models = require('../../models/index')

async function getBook(req, res) {
    try {
        let adminid = req.params.adminid
        let result = await models.Book.findAll({
            attributes: ['id', 'namebook', 'descbook', 'pricebook'],
            where: { adminid: adminid }
        })

        if (result.length < 1) {
            res.json({ message: "Data not available" })
        }
        res.json(result)
    } catch (error) {
        res.json(error)
    }
}

async function getAllBook(req, res) {
    try {
        let result = await models.Book.findAll()

        if (result.length < 1) {
            res.json({ message: "Data not available" })
        }
        res.json(result)
    } catch (error) {
        res.json(error)
    }
}

async function getBookById(req, res) {
    try {
        let adminid = req.params.adminid
        let result = await models.Book.findOne({
            attributes: ['id', 'namebook', 'descbook', 'pricebook'],
            where: { id: req.params.id, adminid: adminid }
        })

        if (result.length < 1) {
            res.json({ message: "Data not available" })
        }

        res.json(result)
    } catch (error) {
        res.json(error)
    }
}

async function createBook(req, res) {
    try {
        let createBook = await models.Book.create(req.body)
        res.json(req.body)
    } catch (error) {
        res.json(error)
    }
}

async function updateBook(req, res) {
    try {
        let adminid = req.params.adminid
        let result = await models.Book.findOne({
            attributes: ['id', 'namebook', 'descbook', 'pricebook'],
            where: { id: req.params.id, adminid: adminid }
        })

        if (result.length < 1) {
            res.json({ message: "Data not available" })
        }
        let updateUser = await result.update(req.body)
        res.json(result)
    } catch (error) {
        res.json(error)
    }
}

async function deleteBook(req, res) {
    try {
        let adminid = req.params.adminid
        let deleteBook = await models.Book.destroy({ where: { id: req.params.id, adminid: adminid } })

        if (result.length < 1) {
            res.json({ message: "Data not available" })
        }

        res.json({ message: "Book deleted", id: req.params.id })
    } catch (error) {
        res.json(error)
    }
}

// async function addtoCart(req, res, next) {
//     const addedBook = models.Book.findById(req.book.id)[0]

//     models.Cart.save(addedBook)
//     console.log(models.Cart.getCart())
//     res.send('Added to cart!')
// }

// async function getCart(req, res, next) {
//     // res.render('cart', { cart: models.Cart.getCart(), pageTitle: 'Shopping Cart Detail', path: '/cart', name: 'Edward' })
//     let result = await models.Book.findAll(req.book.id)[0]
//     // attributes: ['id', 'namebook', 'descbook', 'pricebook'],
//     // where: { adminid: adminid }

//     if (result.length < 1) {
//         res.json({ message: "Data not available" })
//     }

//     res.json(result)
// }




module.exports = {
    getBook,
    getAllBook,
    getBookById,
    createBook,
    updateBook,
    deleteBook
    // addtoCart
    // getCart
}