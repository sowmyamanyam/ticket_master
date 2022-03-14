const express = require("express");
const configureDb = require("./config/database");
const app = express();
const router = require("./config/routes");
const port = 3050;
app.use(express.json());

configureDb();
app.use(router);

app.listen(port, () => {
  console.log("Server is up and running on port", port);
});
