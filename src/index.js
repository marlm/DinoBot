require("dotenv").config();
const express = require("express");

const routes = require("./routes");

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
  console.log("App running on port ", PORT);
});
