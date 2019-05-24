const mongoose = require('mongoose')


const { user, note } = require('./schemas')

const model = mongoose.model.bind(mongoose)


module.exports = { 
    User: model('User', user),
    Note: model('Note', note)
}