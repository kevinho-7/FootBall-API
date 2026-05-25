const router = require("express").Router();
const playersController = require("../controllers/players");
const {validadePlayer} = require("../validator/validator");
const {isAuthenticated} = require("../middlewares/auth");


// Get 
// #swagger.tags = ["players"]
// #swagger.path = "/players"
router.get("/", playersController.getAllPlayers);

// #swagger.path = "/players/{id}"
router.get("/:id", playersController.getPlayerById);

// Post
// #swagger.tags = ["players"]
// #swagger.path = "/players"
router.post("/", isAuthenticated, validadePlayer, playersController.addPlater);

// Put 
// #swagger.tags = ["players"]
// #swagger.path = "/players"
router.put("/:id", isAuthenticated, validadePlayer, playersController.updatePlayer);

// Delete
// #swagger.tags = ["players"]
// #swagger.path = "/players"
router.delete("/:id", isAuthenticated, playersController.deletePLayer);

module.exports = router;