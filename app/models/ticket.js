const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
  customer: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Customer",
  },
  department: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Department",
  },
  employees: [
    {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Employee",
    },
  ],
  priority: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  isResolved: {
    type: String,
    required: true,
    default: false,
  },
  code: {
    type: String,
    required: true,
  },
});

const Ticket = mongoose.model("Ticket", ticketSchema);

module.exports = Ticket;
