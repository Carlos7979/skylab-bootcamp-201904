const logic = require('../../logic')

module.exports = (req, res) => {

    const { params: { id } } = req
    try {
        logic.updateUser(id, req.body)

            .then(user => res.json(user))
            .catch(({ message }) => res.send({ error: message }))

        } catch ({ message }) {
            res.send({ error: message })
        }
    }