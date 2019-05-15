require('dotenv').config()

const express = require('express')
const package = require('./package.json')
const routes = require('./routes')
const cors = require('cors')

const { env: { PORT }, argv: [, , port = PORT || 8080], } = process

const app = express()

app.use(cors())

app.use('/api', routes)


app.listen(port, () => console.log(`${package.name} ${package.version} up on port ${port}`))