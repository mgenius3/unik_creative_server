const router = require("express").Router();

const {addClientProject, getClientProject} = require("../controllers/client/index");

router.get("/project", getClientProject);
router.post("/project", addClientProject);

module.exports = router; 