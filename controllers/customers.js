const Customer = require('../models/customers')

class Customers {

    static get (req, res) {

    }

    create (req, res) {
        let newCustomer = new Customer(req.body)
        newCustomer.save(err => {
            err ? res.status(400).send('Unable to save customer to database') : res.status(200).send('Customer saved to database');
        })
    }

}

module.exports = Customers
