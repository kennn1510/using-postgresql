const express = require("express");
const usernameRouter = express.Router();
const usernameController = require("../controllers/usernameController");

usernameRouter.get("/", usernameController.usernameGet);
usernameRouter.get("/new", usernameController.newUsernameGet);
usernameRouter.post("/new", usernameController.newUsernamePost);

module.exports = usernameRouter;
