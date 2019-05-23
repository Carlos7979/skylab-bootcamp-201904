const mongoose = require('mongoose');
(async () => {mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true }, function (err) {
 
    if (err) throw err;
  
    console.log('Successfully connected');
  
 })})()

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    const TestSchema = new mongoose.Schema({
        user: {
            name: String,
            surname: String,
            age: Number
        },
        created: Date

    });

    const Test1 = mongoose.model('Test1', TestSchema);
    const silence = new Test1({ name: 'Hello World' });
    console.log(silence.name); // 'Hello World'


})