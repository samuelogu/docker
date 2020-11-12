const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')

const multer = require('multer');
const data = multer();
app.use(data.array());

app.use(bodyParser.json())

// const db = require('./db');
const mongoose = require('mongoose');
const customer = require('./controllers/customers')

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/posts', (req, res) => {
    res.send('posts route!')
})

app.get('/customers', customer.get)

app.post('/customers', customer.create)

const url = 'mongodb://localhost:27018/account'

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
    console.log('Mongodb connected!');
    app.listen(port, () => {
        console.log('Testing!');
        console.log(`Example app listening at http://localhost:${port}`)
    })
}).catch(err => {
    console.log(err);
})
