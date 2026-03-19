const express = require("express");
const router = express.Router();
const c = require("../controllers/ruleController");

router.post("/:step_id", c.addRule);
router.get("/:step_id", c.getRules);

module.exports = router;