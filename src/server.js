const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("frontend"));

// ✅ Frontend serve பண்ணும்
app.use(express.static(path.join(__dirname, "../frontend")));

// In-memory DB
let workflows = [];
let steps = [];
let rules = [];
let executions = [];

let wfId = 1;
let stepId = 1;
let ruleId = 1;
let execId = 1;

// CREATE WORKFLOW
app.post("/api/workflow", (req, res) => {
  const { name } = req.body;
  const wf = { id: wfId++, name };
  workflows.push(wf);
  res.json(wf);
});

// ADD STEP
app.post("/api/step", (req, res) => {
  const { workflowId, name, order } = req.body;
  const step = { id: stepId++, workflowId, name, order };
  steps.push(step);
  res.json(step);
});

// ADD RULE
app.post("/api/rule", (req, res) => {
  const { workflowId, condition, nextStepId, stepOrder } = req.body;
  const rule = { id: ruleId++, workflowId, condition, nextStepId, stepOrder };
  rules.push(rule);
  res.json(rule);
});

// START EXECUTION
app.post("/api/start", (req, res) => {
  const { workflowId, data } = req.body;
  const wfSteps = steps
    .filter(s => s.workflowId === workflowId)
    .sort((a, b) => a.order - b.order);
  const firstStep = wfSteps[0];
  const execution = {
    id: execId++,
    workflowId,
    currentStepId: firstStep ? firstStep.id : null,
    status: "in_progress",
    data,
    logs: []
  };
  executions.push(execution);
  res.json(execution);
});

// NEXT STEP
app.post("/api/next", (req, res) => {
  const { executionId } = req.body;
  const exec = executions.find(e => e.id === executionId);
  if (!exec) return res.json({ error: "Execution not found" });
  if (exec.status === "completed") return res.json(exec);

  const currentStep = steps.find(s => s.id === exec.currentStepId);
  const stepRules = rules.filter(
    r => r.workflowId === exec.workflowId && r.stepOrder === currentStep.order
  );

  let nextStepId = null;
  for (let rule of stepRules) {
    try {
      if (eval(rule.condition.replace("amount", exec.data.amount))) {
        nextStepId = rule.nextStepId;
        break;
      }
    } catch (e) {}
  }

  if (nextStepId === exec.currentStepId) nextStepId = null;

  exec.logs.push({ stepId: exec.currentStepId, nextStepId, time: new Date() });
  exec.currentStepId = nextStepId;
  if (!nextStepId) exec.status = "completed";

  res.json(exec);
});

// GET EXECUTION
app.get("/api/execution/:id", (req, res) => {
  const exec = executions.find(e => e.id == req.params.id);
  if (!exec) return res.json({ error: "Not found" });
  res.json(exec);
});

// ✅ PORT fix — Render deployment க்கு தேவை
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🔥 Server running on port ${PORT}`);
});