const { Router } = require("express");
const AuthController = require("./controllers/AuthController");

const routes = Router();

routes.get("/auth/redirect", AuthController.redirect);

module.exports = routes;
