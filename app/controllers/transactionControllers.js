let models = require('../../models/index')

async function getTransactionDetail(req, res) {
    try {
        let result = await models.TransactionDetail.findAll()

        if (result.length < 1) {
            res.json({ message: "Data not available" })
        }
        res.json(result)
    } catch (error) {
        res.json(error)
    }
}

async function getTransactionHeader(req, res) {
    try {
        let result = await models.TransactionHeader.findAll({
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

async function createTransaction(req, res) {
    try {
        let createTransaction = await models.TransactionHeader.create(req.body)[0]
        res.json(req.body)
    } catch (error) {
        res.json(error)
    }
}

async function createTransactionDetail(req, res) {
    try {
        await models.TransactionDetail.create(req.body)
        let td = await models.TransactionHeader.findOne({ where: { id: req.body.transactionid } })
        let amountprice = td.totalprice
        let id = td.id
        let result = await models.Book.findOne({ where: { id: req.body.idbook } })
        let total = result.pricebook * req.body.qty
        for (let i = 0; i < id; i++) {
            amountprice += total
        }

        res.json(amountprice)
    } catch (error) {
        res.json(error)
    }
}

async function deleteTransaction(req, res) {
    try {
        await models.TransactionDetail.destroy({ where: { id: req.params.id } })

        res.json({ message: "Transaction deleted", id: req.params.id })
    } catch (errror) {
        res.json(error)
    }
}

module.exports = {
    getTransactionDetail,
    getTransactionHeader,
    createTransaction,
    createTransactionDetail,
    deleteTransaction
}