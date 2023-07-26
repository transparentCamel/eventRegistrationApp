const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const CustomerModel = require('./models/Customer');
const AdminModel = require('./models/Admin');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/registeredCustomers');

app.post('/form', (req, res) => {
  CustomerModel.create(req.body)
    .then((customers) => res.json(customers))
    .catch((err) => res.json(err));
});

app.get('/customers', (req, res) => {
  CustomerModel.find({})
    .then((customers) => {
      res.json(customers);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

app.delete('/customers/:id', (req, res) => {
  const customerId = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(customerId)) {
    return res.status(400).json({ error: 'Invalid customer ID' });
  }

  CustomerModel.findByIdAndDelete(customerId)
    .then((deletedCustomer) => {
      if (!deletedCustomer) {
        return res.status(404).json({ error: 'Customer not found' });
      }

      res.json({ message: 'Customer deleted successfully' });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: 'Server error' });
    });
});

app.put('/customers/:id', (req, res) => {
  const customerId = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(customerId)) {
    return res.status(400).json({ error: 'Invalid customer ID' });
  }
  CustomerModel.findByIdAndUpdate(customerId, req.body)
    .then((updatedCustomer) => {
      if (!updatedCustomer) {
        return res.status(404).json({ error: 'Customer not found' });
      }

      res.json(updatedCustomer);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: 'Server error' });
    });
});

app.post('/login', (req, res) => {
  const { adminId, password } = req.body;
  console.log('Received login request:', { adminId, password });

  AdminModel.findOne({ adminId: adminId })
    .then((admin) => {
      if (admin) {
        if (admin.password === password) {
          res.json('Success');
        } else {
          res.json('The password is incorrect');
        }
      } else {
        res.json('Admin does not exist');
      }
    })
    .catch((err) => {
      console.error('Error while processing login:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    });
});

app.listen(3001, () => {
  console.log('server is running');
});
