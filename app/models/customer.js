const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const validator = require("validator");

const customerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (value) {
        return validator.isEmail(value);
      },
      message: function () {
        return `Invalid Email Format`;
      },
    },
  },
  mobile: {
    type: String,
    required: true,
    unique: true,
    minLength: 10,
    maxLength: 10,
    validate: {
      validator: function (value) {
        return validator.isNumeric(value);
      },
      message: function () {
        return `Invalid Mobile Number, Must contain only numbers`;
      },
    },
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now(),
  },
});

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;
