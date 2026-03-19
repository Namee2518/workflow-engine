const express = require("express");
const router = express.Router();

const { addStep } = require("../controllers/stepController");

router.post("/workflows/:workflow_id/steps", addStep);

module.exports = router;