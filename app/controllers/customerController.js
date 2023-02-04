let models = require('../../models/index')

async function getCustomer(req, res) {
    try {
        let result = await models.Customer.findAll()
        if (result.length < 1) {
            res.json({ message: "Data not available" })
        }
        res.json(result)
    } catch (error) {
        res.json(error)
    }
}

async function getCustomerById(req, res) {
    try {
        let result = await models.Customer.findOne({ where: { id: req.params.id } })
        if (result.length < 1) {
            res.json({ message: "Data not available" })
        }

        res.json(result)
    } catch (error) {
        res.json(error)
    }
}

async function updateCustomer(req, res) {
    try {
        let result = await models.Customer.findOne({ where: { id: req.params.id } })
        if (result.length < 1) {
            res.json({ message: "Data not available" })
        }
        let updateUser = await result.update(req.body)
        res.json(result)
    } catch (error) {
        res.json(error)
    }
}

async function deleteCustomer(req, res) {
    try {
        let deleteCustomer = await models.Customer.destroy({ where: { id: req.params.id } })

        res.json({ message: "Customer deleted", id: req.params.id })
    } catch (errror) {
        res.json(error)
    }
}

async function createCustomer(req, res) {
    try {
        let createBook = await models.Customer.create(req.body)
        res.json(req.body)
    } catch (error) {
        res.json(error)
    }
}

module.exports = {
    getCustomer,
    getCustomerById,
    updateCustomer,
    deleteCustomer,
    createCustomer
}