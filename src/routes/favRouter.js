const { Router } = require("express");
const favRouter = Router();

const {
  getFavHandler,
  postFavHandler,
  deleteFavHandler,
} = require("../handlers/favHandler");

favRouter.get("/:id_user", getFavHandler);
favRouter.delete("/:id_hotel/:id_user", deleteFavHandler);
favRouter.post("/:id_user/:id_hotel", postFavHandler);

module.exports = favRouter;
