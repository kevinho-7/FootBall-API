const router = require("express").Router();
const teamsController = require("../controllers/teams");
const {validadeTeam} = require("../validator/validator");
const {isAuthenticated} = require("../middlewares/auth");

// Get 
// #swagger.tags = ["teams"]
// #swagger.path = "/teams"
router.get("/", teamsController.getAllTeams);

// #swagger.path ="/teams/{id}"
router.get("/:id", teamsController.getTeamById);

// Post
// #swagger.tags = ["teams"]
// #swagger.path = "/teams"
router.post("/", isAuthenticated, validadeTeam, teamsController.createTeam);

// Put
// #swagger.tags = ["teams"]
// #swagger.path = "/teams/{id}"
router.put("/:id", isAuthenticated, validadeTeam, teamsController.updateTeam);

// Delete
// #swagger.tags = ["teams"]
// #swagger.path = "/teams/{id}"
router.delete("/:id", isAuthenticated, teamsController.deleteTeam);


module.exports = router;