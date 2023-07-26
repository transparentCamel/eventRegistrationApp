const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  age: String,
});

const CustomerModel = mongoose.model('customers', CustomerSchema);
module.exports = CustomerModel;
