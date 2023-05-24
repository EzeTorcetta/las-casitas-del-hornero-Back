const { Router } = require("express");
const NodeMailer = Router();

const {
  getNodeMailerHandler,
  getRegistroNodeMailerHandler,
} = require("../handlers/getNodeMailerHandler");

NodeMailer.get("/", getNodeMailerHandler);
NodeMailer.get("/Registro/:gmail", getRegistroNodeMailerHandler);

module.exports = NodeMailer;