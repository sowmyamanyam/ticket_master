const express = require("express");
const Department = require("../models/department");

const departmentController = {};

departmentController.list = (req, res) => {
  Department.find()
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      res.json(err);
    });
};

departmentController.create = (req, res) => {
  const body = req.body;
  const department = new Department(body);
  department
    .save()
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      res.json(err);
    });
};

departmentController.show = (req, res) => {
  const id = req.params.id;
  Department.findById(id)
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

departmentController.update = (req, res) => {
  const id = req.params.id;
  const body = req.body;
  Department.findByIdAndUpdate(id, body, { new: true, runValidators: true })
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

departmentController.destroy = (req, res) => {
  const id = req.params.id;
  Department.findByIdAndDelete(id)
    .then((response) => {
      if (response) {
        res.json(response);
      } else {
        res.json(err);
      }
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports = departmentController;
