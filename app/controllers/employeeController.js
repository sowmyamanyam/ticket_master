const express = require("express");
const Employee = require("../models/employee");
const mongoose = require("mongoose");

const employeeController = {};

employeeController.list = (req, res) => {
  Employee.find().populate("department")
    .then((employees) => {
      res.json(employees);
    })
    .catch((err) => {
      res.json(err);
    });
};
employeeController.create = (req, res) => {
  const body = req.body;
  const employee = new Employee(body);
  employee
    .save()
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      res.json(err.message);
    });
};

employeeController.show = (req, res) => {
  const id = req.params.id;
  Employee.findById(id)
    .populate("department")
    .then((response) => {
      if (response) {
        res.json(response);
      }
    })
    .catch((err) => {
      res.json(err);
    });
};

employeeController.update = (req, res) => {
  const id = req.params.id;
  const body = req.body;
  Employee.findByIdAndUpdate(id, body, { new: true, runValidators: true })
    .then((response) => {
      if (employee) {
        res.json(employee);
      } else {
        res.json({});
      }
    })
    .catch((err) => {
      res.json(err);
    });
};

employeeController.destroy = (req, res) => {
  const id = req.params.id;
  Employee.findByIdAndDelete(Id)
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

module.exports = employeeController;
