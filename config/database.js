const express = require("express");
const mongoose = require("mongoose");

const configureDb = () => {
  mongoose
    .connect("mongodb://localhost:27017/ticket-master-fs", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    .then(() => {
      console.log("Connected to Database");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = configureDb;
