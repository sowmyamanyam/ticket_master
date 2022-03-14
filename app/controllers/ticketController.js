const Ticket = require("../models/ticket");

const ticketController = {};

ticketController.list = (req, res) => {
  Ticket.find()
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      res.json(err);
    });
};
ticketController.create = (req, res) => {
  const body = req.body;
  const ticket = new Ticket(body)
  ticket.save()
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      res.json(err);
    });
};

ticketController.show = (req, res) => {
  const id = req.params.id;
  Ticket.findById(id)
    .populate("employee")
    .populate("customer")
    .populate("department")
    .then((response) => {
      if (response) {
        res.json(response);
      } else {
        res.json({});
      }
    })
    .catch((err) => {
      res.json(err);
    });
};

ticketController.update = (req, res) => {
  const id = req.params.id;
  const body = req.body;
  Ticket.findByIdAndUpdate(id, body, { new: true, runValidators: true })
    .then((response) => {
      if (ticket) {
        res.json(ticket);
      } else {
        res.json({});
      }
    })
    .catch((err) => {
      res.json(err);
    });
};

ticketController.destroy = (req, res) => {
  const id = req.params.id
  Ticket.findByIdAndDelete(id)
    .then((response) => {
      if (response) {
        res.json(response);
      } else {
        res.json({});
      }
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports = ticketController;
