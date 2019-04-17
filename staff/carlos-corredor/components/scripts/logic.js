'use strict';

var logic = {
    register: function (name, surname, email, password) {
        if (typeof name !== 'string') throw TypeError(name + ' is not a valid name');
        // TODO add more validations
        if (!surname) throw TypeError(undefined + ' is not a valid surname');
        if (!email) throw TypeError(undefined + ' is not a valid email');
        if (!password) throw TypeError(undefined + ' is not a valid password');

        // TODO verify user does not exists already, otherwise error 'user already exists'
        var user = users.find(function(user) { return user.email === email });
        if(user) throw TypeError('This user mail already exists');
        
        users.push({
            name: name,
            surname: surname,
            email: email,
            password: password
        });
    },

    login: function (email, password) {
        // TODO validate input data

        var user = users.find(function(user) { return user.email === email });

        if (!user) {
            var error = Error('wrong credentials')

            error.code = 1;

            throw error;
        };

        if (user.password === password) {
            this.__userEmail__ = email;
            this.__accessTime__ = Date.now();
        } else {
            var error = Error('wrong credentials')

            error.code = 1;

            throw error;
        };
    },

    searchDucks: function (query, callback) {
        // TODO validate inputs
        if(!query) throw TypeError('undefined is not a valid argument');
        if(!callback) throw TypeError('undefined is not a function');
        if(!(callback instanceof Function)) throw TypeError(callback + ' is not a function');
        var xhr = new XMLHttpRequest;

        xhr.open('GET', 'https://duckling-api.herokuapp.com/api/search?q=' + query);

        xhr.addEventListener('load', function () {
            callback(JSON.parse(this.responseText));
        });

        xhr.send();
    },

    retrieveDucklingDetail: function(id, callback) {
        // TODO validate inputs

        var xhr = new XMLHttpRequest;

        xhr.open('GET', 'https://duckling-api.herokuapp.com/api/ducks/' + id);

        xhr.addEventListener('load', function () {
            callback(JSON.parse(this.responseText));
        });

        xhr.send();
    }
}
