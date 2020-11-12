const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')

app.use(bodyParser.json())

const db = require('./db');
const customer = require('./controllers/customers')

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/customers', customer.get)

app.post('/customers', customer.create)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
