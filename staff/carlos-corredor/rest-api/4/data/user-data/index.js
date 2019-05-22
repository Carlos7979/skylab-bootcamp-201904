const validate = require('../../common/validate')
const { ValueError } = require('../../common/errors')

const userData = {
    __col__: null,

    create(user) {
        validate.arguments([
            { name: 'user', value: user, type: 'object', optional: false }
        ])

        return (async () => {
            await this.__col__.insertOne(user)
        })()
    },

    list() {
        return this.__col__.find().toArray()

    },

    retrieve(id) {
        validate.arguments([
            { name: 'id', value: id, type: 'object', notEmpty: true, optional: false }
        ])

        return this.__col__.findOne(id)
    },

    find(criteria) {
        validate.arguments([
            { name: 'criteria', value: criteria, type: 'function', notEmpty: true, optional: false }
        ])

        return (async () => {
             const cursor = await this.__col__.find()

            const users = []

            await cursor.forEach(user => {
                if (criteria(user))
                    users.push(user)
            })

            return users
        })()
    },

    update(id, data, replace) {
        validate.arguments([
            { name: 'id', value: id, type: 'object', notEmpty: true },
            { name: 'data', value: data, type: 'object' },
            { name: 'replace', value: replace, type: 'boolean', optional: true }
        ])

        if (data._id && id !== data._id) throw new ValueError('data id does not match criteria id')

        return (async () => {
            await this.__col__.findOne(id)

            if (replace) await this.__col__.findOneAndReplace({ _id: id }, data)
            else await this.__col__.findOneAndUpdate({ _id: id }, {$set: data})

        })()
    },

    delete(id) {
        validate.arguments([
            { name: 'id', value: id, type: 'object', notEmpty: true },
        ])

        return this.__col__.deleteOne({_id: id})
    }
}

module.exports = userData