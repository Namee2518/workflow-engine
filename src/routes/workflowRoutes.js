const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/workflowController");

// workflow CRUD
router.post("/workflow", ctrl.createWorkflow);
router.get("/workflow", ctrl.getWorkflows);
router.put("/workflow/:id", ctrl.updateWorkflow);
router.delete("/workflow/:id", ctrl.deleteWorkflow);

// step & rule
router.post("/step", ctrl.addStep);
router.post("/rule", ctrl.addRule);

// execution
router.post("/start", ctrl.startExecution);
router.post("/next", ctrl.nextStep);
router.get("/execution/:id", ctrl.getExecution);
router.post("/cancel/:id", ctrl.cancelExecution);

module.exports = router;