let models = require('../../models/index')

async function getAdmin(req, res) {
    try {
        let result = await models.Admin.findAll()
        if (result.length < 1) {
            res.json({ message: "Data not available" })
        }
        res.json(result)
    } catch (error) {
        res.json(error)
    }
}

async function getAdminById(req, res) {
    try {
        let result = await models.Admin.findOne({ where: { id: req.params.id } })
        if (result.length < 1) {
            res.json({ message: "Data not available" })
        }

        res.json(result)
    } catch (error) {
        res.json(error)
    }
}

async function updateAdmin(req, res) {
    try {
        let result = await models.Admin.findOne({ where: { id: req.params.id } })
        if (result.length < 1) {
            res.json({ message: "Data not available" })
        }
        let updateUser = await result.update(req.body)
        res.json(result)
    } catch (error) {
        res.json(error)
    }
}

async function deleteAdmin(req, res) {
    try {
        let deleteAdmin = await models.Admin.destroy({ where: { id: req.params.id } })

        res.json({ message: "Admin deleted", id: req.params.id })
    } catch (errror) {
        res.json(error)
    }
}

module.exports = {
    getAdmin,
    getAdminById,
    updateAdmin,
    deleteAdmin
}