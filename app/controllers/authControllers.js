let jwt = require('jsonwebtoken')
let bcrypt = require('bcrypt')
let models = require('../../models/index')

async function loginAdmin(req, res) {
    try {
        let result = await models.Admin.findOne({ where: { email: req.body.email } })
        if (result.length < 1) {
            res.send("Admin not found")
        }

        let password = req.body.password;
        let match = await bcrypt.compare(password, result.password);
        if (!match) {
            res.send("Wrong Email or Password");
        }

        let payload = {
            id: result.id,
            name: result.name,
            email: result.email
        }

        let token = jwt.sign(payload, 'secret')

        res.json({ message: "login Susccess", access_token: token })
    } catch (error) {
        res.json(error)
    }
}

async function registerAdmin(req, res) {
    try {
        let salt = bcrypt.genSaltSync(10);
        let password = bcrypt.hashSync(req.body.password, salt)
        req.body.password = password

        await models.Admin.create(req.body)

        res.json(req.body)
    } catch (error) {
        res.json(error)
    }
}

async function loginCustomer(req, res) {
    try {
        let result = await models.Customer.findOne({ where: { email: req.body.email } })
        if (result.length < 1) {
            res.send("Customer not found")
        }

        let password = req.body.password;
        let match = await bcrypt.compare(password, result.password);
        if (!match) {
            res.send("Wrong Email or Password");
        }

        let payload = {
            id: result.id,
            name: result.name,
            email: result.email
        }

        let token = jwt.sign(payload, 'secret')

        res.json({ message: "login Susccess", access_token: token })
    } catch (error) {
        res.json(error)
    }
}

async function registerCustomer(req, res) {
    try {
        let salt = bcrypt.genSaltSync(10);
        let password = bcrypt.hashSync(req.body.password, salt)
        req.body.password = password

        await models.Customer.create(req.body)

        res.json(req.body)
    } catch (error) {
        res.json(error)
    }
}

module.exports = {
    loginAdmin,
    loginCustomer,
    registerAdmin,
    registerCustomer
}