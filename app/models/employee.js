const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const validator = require("validator");

const employeeSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
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
    validate: {
      validator: function (value) {
        return validator.isNumeric(value);
      },
      message: function () {
        return `Invalid Mobile Number, Should contain only numbers`;
      },
    },
  },
  department: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Department",
  },
});

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee