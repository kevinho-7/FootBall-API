const router = require("express").Router()
const matchController = require("../controllers/matches");
const {validadeMatch} = require("../validator/validator");
const {isAuthenticated} = require("../middlewares/auth");

// Get
// #swagger.tags = ["mathches"]
// #swagger.path = "/mathches"
router.get("/", matchController.getAllMatches);

// #swagger.path = "/mathches/:id"
router.get("/:id", matchController.getMatchesById);

// #swagger.path = "/mathches"
router.post("/", isAuthenticated, validadeMatch, matchController.addMatch);

// #swagger.path = "/mathches/:id"
router.put("/:id", isAuthenticated, validadeMatch, matchController.updateMatch);

// #swagger.path = "/mathches/:id"
router.delete("/:id", isAuthenticated,  matchController.deleteMatch);

module.exports = router;