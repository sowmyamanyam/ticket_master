// const mongoose = require('mongoose')
const express = require("express");
const userAuthenticationController = require("../app/controllers/userAuthenticationController");
const authenticateUser = require("../app/middlewares/authentication");
const customerController = require("../app/controllers/customerController");
const departmentController = require("../app/controllers/departmentController");
const employeeController = require("../app/controllers/employeeController");
const ticketController = require("../app/controllers/ticketController");
const router = express.Router();

router.post("/users/register", userAuthenticationController.register);
router.post("/users/login", userAuthenticationController.login);
router.delete(
  "/users/logout",
  authenticateUser,
  userAuthenticationController.logout
);

router.get("/customers", authenticateUser, customerController.list);
router.post("/customers", authenticateUser, customerController.create);
router.get("/customers/:id", authenticateUser, customerController.show);
router.put("/customers/:id", authenticateUser, customerController.update);
router.delete("/customers/:id", authenticateUser, customerController.destroy);

router.get("/department", departmentController.list);
router.post("/department", departmentController.create);
router.get("/department/:id", departmentController.show);
router.put("/department/:id", departmentController.update);
router.delete("/department/:id", departmentController.destroy);

router.get("/employee", employeeController.list);
router.post("/employee", employeeController.create);
router.get("/employee/:id", employeeController.show);
router.put("/employee/:id", employeeController.update);
router.delete("/employee/:id", employeeController.destroy);

router.get("/tickets", authenticateUser, ticketController.list);
router.post("/tickets", authenticateUser, ticketController.create);
router.get("/tickets/:id", authenticateUser, ticketController.show);
router.put("/tickets/:id", authenticateUser, ticketController.update);
router.delete("/tickets/:id", authenticateUser, ticketController.destroy);

module.exports = router;
