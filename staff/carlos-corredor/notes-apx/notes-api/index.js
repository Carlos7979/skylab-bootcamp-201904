import mongoose from 'mongoose'

require('dotenv').config()

const express = require('express')
const package = require('./package.json')
const routes = require('./routes')
const cors = require('./routes/cors')
const { MongoClient } = require('mongodb')
const userData = require('./data')

const { env: { PORT, MONGO_URL: url }, argv: [, , port = PORT || 8080], } = process;

(async ()=>{
    try {
        await mongoose.connect('mongodb://localhost/note-api', { useNewUrlParser: true })

        console.log('connected to database')

        // express

    const app = express()

    app.use(cors)

    app.use('/api', routes)

    app.use(function (req, res, next) {
        res.status(404).json({ error: 'Not found.' })
    })

    app.listen(port, () => console.log(`${package.name} ${package.version} up on port ${port}`))
    } catch (error) {
        console.error(error)
    }
})()

// (async () => {
//     const client = await MongoClient.connect(url, { useNewUrlParser: true })

//     const db = client.db()

//     userData.__col__ = db.collection('users')

//     // express

//     const app = express()

//     app.use(cors)

//     app.use('/api', routes)

//     app.use(function (req, res, next) {
//         res.status(404).json({ error: 'Not found.' })
//     })

//     app.listen(port, () => console.log(`${package.name} ${package.version} up on port ${port}`))
// })()