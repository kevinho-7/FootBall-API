const router = require("express").Router();
const statsController = require("../controllers/stats");
const {validateStats} = require("../validator/validator");
const {isAuthenticated} = require("../middlewares/auth");

// Get
// #swagger.tags = ["stats"]
// #swagger.path = "/stats"
router.get("/", statsController.getAllStats);

// #swagger.tags = "/stats/:id"
router.get("/:id", statsController.getAllStats);

// Post
// #swagger.tags = ["stats"]
// #swagger.path = "/stats"
router.post("/", isAuthenticated, validateStats, statsController.createStats);

// Put
// #swagger.tags = ["stats"]
// #swagger.path = "/stats/:id"
router.put("/:id", isAuthenticated, validateStats, statsController.updateStats);

// Delete
// #swagger.tags = ["stats"]
// #swagger.path = "/stats/:id"
router.delete("/:id", isAuthenticated, statsController.deleteStats);


module.exports = router;