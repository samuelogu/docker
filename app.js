const express = require('express')
const app = express()
const port = 3000

const db = require('./db');
const customer = require('./controllers/customers')

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/customers', (req, res) => {
    customer.get
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
