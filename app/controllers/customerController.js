const express = require("express");
const Customer = require("../models/customer");

const customerController = {};

customerController.list = (req, res) => {
  Customer.find()
    .then((response) => {
      if (response) {
        res.json(response);
      } else {
        res.json({});
      }
    })
    .catch((err) => {
      res.json(err.message);
    });
};

customerController.create = (req, res) => {
  const body = req.body;
  const customer = new Customer(body);
  customer
    .save()
    .then((response) => {
      if (response) {
        res.json(response);
      }
    })
    .catch((err) => {
      res.json(err);
    });
};

customerController.show = (req, res) => {
  const id = req.params.id;
  Customer.findById(id)
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

customerController.update = (req, res) => {
  const id = req.params.id;
  const body = req.body;
  Customer.findByIdAndUpdate(id, body, { new: true, runValidators: true })
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

customerController.destroy = (req, res) => {
  const id = req.params.id;
  Customer.findByIdAndDelete(id)
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

module.exports = customerController;
