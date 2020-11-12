const Customer = require('../models/customers')

class Customers {

    static async get (req, res) {
        try {
            const allCustomers = await Customer.find()
            res.json(allCustomers)
        }catch (e) {
            res.json({ message: e})
        }
    }

    static create (req, res) {
        let newCustomer = new Customer(req.body)
        newCustomer.save(err => {
            err ? res.status(400).send('Unable to save customer to database') : res.status(200).send('Customer saved to database');
        })
    }

}

module.exports = Customers
