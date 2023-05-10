const {
  getFavs,
  postFav,
  deleteFav,
} = require("../controllers/favControllers");

//* Handler que me trae todos los Favoritos
const getFavHandler = async (req, res) => {
  const { id_user } = req.params;
  try {
    const Fav = await getFavs(id_user);
    res.status(200).json({ Fav });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//* Handler que postea el hotel fav en la DB
const postFavHandler = async (req, res) => {
  const { id_user, id_hotel } = req.params;
  try {
    await postFav(id_user, id_hotel);
    res.status(200).json("Hotel successfully added");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteFavHandler = async (req, res) => {
  const { id_user, id_hotel } = req.params;
  try {
    await deleteFav(id_user, id_hotel);
    res.status(200).json("Hotel successfully removed");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getFavHandler,
  postFavHandler,
  deleteFavHandler,
};