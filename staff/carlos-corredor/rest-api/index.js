const express = require('express')
const package = require('./package.json')
const bodyParser = require('body-parser')
const logic = require('./logic')

const jsonParser = bodyParser.json()

const { argv: [, , port = 8080] } = process

const app = express()

app.post('/user', jsonParser, (req, res) => {
    const { body: { name, surname, email, password } } = req
    
    try {
        logic.registerUser(name, surname, email, password)
            .then(() => res.json({ message: 'Ok, user registered. '}))
            .catch(({ message }) => {
                res.status(400).json({ error: message})
            })
    } catch ({ message }) {
        res.status(400).json({ error: message})
    }
})

app.post('/auth', jsonParser, (req, res) => {
    const { body: { email, password } } = req
    
    try {
        logic.authenticateUser(email, password)
            .then((token) => res.json({ token: token }))
            .catch(({ message }) => {
                res.status(400).json({ error: message})
            })
    } catch ({ message }) {
        res.status(400).json({ error: message})
    }
})

app.get('/user', (req, res) => {
    const { headers } = req
    const token = headers.authorization.split(' ')[1]
    try {
        logic.retrieveUser(token)
            .then(data => res.json({status: 'OK', data}))
            .catch(({ message }) => {
                res.status(400).json({ error: message})
            })
    } catch ({ message }) {
        res.status(400).json({ error: message})
    }
})

app.put('/user', jsonParser, (req, res) => {
    const { headers, body } = req
    const token = headers.authorization.split(' ')[1]
    data = body

    try {
        logic.updateUser(data, token)
            .then(response => res.json(response))
            
            .catch(({ message }) => {
                res.status(400).json({ error: message})
            })
    } catch ({ message }) {
        res.status(400).json({ error: message})
    }
})

app.delete('/user', jsonParser, (req, res) => {
    const { headers, body } = req
    const token = headers.authorization.split(' ')[1]
    password = body.password

    try {
        logic.deleteUser(token, password)
            .then(response => res.json(response))
            
            .catch(({ message }) => {
                res.status(400).json({ error: message})
            })
    } catch ({ message }) {
        res.status(400).json({ error: message})
    }
})


// TODO other routes

app.use(function (req, res, next) {
    debugger
    res.redirect('/')
})

app.listen(port, () => console.log(`${package.name} ${package.version} up on port ${port}`))