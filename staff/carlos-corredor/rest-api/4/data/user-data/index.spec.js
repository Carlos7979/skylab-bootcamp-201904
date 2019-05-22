const userData = require('.')
require('../../common/utils/array-random.polyfill')
const { MongoClient, ObjectId } = require('mongodb')

const url = 'mongodb://localhost/rest-api-test'

describe('user data', () => {
    let client, users

    beforeAll(async () => {
        client = await MongoClient.connect(url, { useNewUrlParser: true })

        const db = client.db()

        users = db.collection('users')

        userData.__col__ = users
    })

    const names = ['Pepito', 'Fulanito', 'Menganito']

    const _users = new Array(Math.random(100)).fill().map(() => ({
        name: `${names.random()}-${Math.random()}`,
        surname: `Grillo-${Math.random()}`,
        email: `grillo-${Math.random()}@mail.com`,
        password: `123-${Math.random()}`
    }))

    beforeEach(() => users.deleteMany())

    describe('create', () => {
        it('should succeed on correct data', async () => {
            const user = {
                name: 'Manuel',
                surname: 'Barzi',
                email: 'manuelbarzi@gmail.com',
                password: '123'
            }

            await userData.create(user)

            expect(user._id).toBeInstanceOf(ObjectId)
            
            const cursor = await users.find()
            
            const _users = []
            
            await cursor.forEach(user => _users.push(user))
            
            expect(_users).toHaveLength(1)

            const [_user] = _users

            expect(_user).toEqual(user)
        })
    })

    describe('list', () => {
        
        beforeEach(async () =>{
            await users.insert(_users)
        })

        it('should succeed and return items if users exist', async () => {
            const usersArrayfound = await userData.list()
            expect(usersArrayfound).toHaveLength(_users.length)
            // expect(_users).toMatchObject(users)
            expect(usersArrayfound).toEqual(_users)
        })
    })

    describe('retrieve', () => {
        beforeEach(async () =>{
            await users.insert(_users)
        })

        it('should succeed on an already existing user', async () => {
            const user = _users.random()
            const userfound = await userData.retrieve(user._id)
            expect(userfound).toEqual(user)

        })
    })

    describe('update', () => {
        beforeEach(async () =>{
            await users.insert(_users)
        })

        describe('replacing', () => {
            it('should succeed on correct data', async () => {
                const user = _users.random()

                const data = { name: 'n', email: 'e', password: 'p', lastAccess: Date.now() }

                await userData.update(user._id, data, true)

                const userfound = await users.findOne(user._id)

                expect(userfound).toBeDefined()

                expect(userfound._id).toEqual(user._id)

                expect(userfound).toMatchObject(data)

                expect(Object.keys(userfound).length).toEqual(Object.keys(data).length + 1)

            })
        })

        describe('not replacing', () => {
            it('should succeed on correct data', async () => {
                const user = _users.random()

                const data = { name: 'n', lastAccess: Date.now(), anotherOne: 'hello' }

                await userData.update(user._id, data)

                const userfound = await users.findOne(user._id)

                expect(userfound).toBeDefined()

                expect(userfound._id).toEqual(user._id)

                expect(userfound).toMatchObject(data)

                expect(Object.keys(userfound).length).toEqual(Object.keys(user).length + 2)

            })
        })
    })

    describe('delete', () => {
        beforeEach(async () => await users.insert(_users))

        it('should succeed on an already existing user', async () => {
            const user = _users.random()
            await userData.delete(user._id)
            const userfound = await users.findOne(user._id)
            expect(userfound).toBe(null)
        })
 
    })

    describe('find', () => {
        let _users2

        beforeEach(async() => {
            _users2 = _users.concat({ // concatena al array _users un objeto adicional, y nombramos a este nuevo array "_users2"
                id: `123-${Math.random()}`,
                name: `Fulanito-${Math.random()}`,
                surname: `Grillo-${Math.random()}`,
                email: `pepitogrillo-${Math.random()}@mail.com`,
                password: `123-${Math.random()}`
            })

            return await users.insert(_users2)

        })

        it('should succeed on matching existing users', async () => {
            const criteria = ({ name, email }) => (name.includes('F') || name.includes('a')) && email.includes('i')

            const usersfound = await userData.find(criteria)
            const usersFilteredFromOriginal = _users2.filter(criteria)
            expect(usersfound).toEqual(usersFilteredFromOriginal)
          
        })
    })

    afterAll(() => client.close())
})