const logic = require('../logic');

module.exports = async (req, res) => {
    const { body: { username, email, password, passwordConfirmation } } = req
debugger
    try {
        let id = await logic.registerUser(username, email, password, passwordConfirmation)
        res.json({ id })
    }
    catch ({ message }) {
        res.status(409).json({
            error: message
        })

    }
}