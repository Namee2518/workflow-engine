const express = require("express");
const router = express.Router();
const c = require("../controllers/executionController");

router.post("/start", c.start);
router.post("/next", c.next);
router.get("/:id", c.getExecution);

module.exports = router;