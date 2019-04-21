'use strict'

const logic = {
    registerUser(name, surname, email, password, callback) {
        validate.arguments([
            { name: 'name', value: name, type: 'string', notEmpty: true },
            { name: 'surname', value: surname, type: 'string', notEmpty: true },
            { name: 'email', value: email, type: 'string', notEmpty: true },
            { name: 'password', value: password, type: 'string', notEmpty: true },
            { value: callback, type: 'function' }
        ])

        validate.email(email)

        userApi.create(name, surname, email, password, function(response) {
            if (response.status === 'OK') callback()
            else callback(Error(response.error))
        })
    },

    loginUser(email, password, callback) {
        // TODO validate input data
        userApi.authenticate(email, password, function(response){
            if(response.status === 'OK') {
                this.__userId__ = response.data.id
                this.__userToken__ = response.data.token
                callback()
            } else {
                this.__userId__ = undefined
                this.__userToken__ = undefined
                callback(Error(response.error))
            }
        }.bind(this))

    
    },

    retrieveUser(callback) {
        // TODO validate input
        userApi.retrieve(this.__userId__, this.__userToken__, function(response){
            callback({
                name: response.data.name,
                surname: response.data.surname,
                email: response.data.email
            })
 
        })
        
    },

    searchDucks(query, callback) {
        // TODO validate inputs

        // TODO handle api errors
        duckApi.searchDucks(query, callback)
    },

    retrieveDuck(id, callback) {
        // TODO validate inputs

        // TODO handle api errors
        duckApi.retrieveDuck(id, callback)
    }
}
