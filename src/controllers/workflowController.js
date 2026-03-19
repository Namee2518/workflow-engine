const store = require("../data/store");

let workflowId = 1;
let stepId = 1;
let ruleId = 1;
let executionId = 1;

// ✅ RULE ENGINE (supports && ||)
const evaluateCondition = (condition, data) => {
  try {
    if (!condition || condition === "DEFAULT") return true;
    const func = new Function(...Object.keys(data), `return ${condition}`);
    return func(...Object.values(data));
  } catch {
    return false;
  }
};

// ✅ VALIDATION
const validateAmount = (data) => {
  if (!data || typeof data.amount !== "number") {
    return "amount must be number";
  }
  return null;
};

// ---------------- WORKFLOW CRUD ----------------

// CREATE
exports.createWorkflow = (req, res) => {
  if (!req.body.name) return res.status(400).json({ error: "name required" });

  const wf = { id: workflowId++, name: req.body.name, version: 1 };
  store.workflows.push(wf);
  res.json(wf);
};

// GET ALL
exports.getWorkflows = (req, res) => {
  res.json(store.workflows);
};

// UPDATE
exports.updateWorkflow = (req, res) => {
  const wf = store.workflows.find(w => w.id == req.params.id);
  if (!wf) return res.status(404).json({ error: "not found" });

  wf.name = req.body.name || wf.name;
  wf.version += 1;

  res.json(wf);
};

// DELETE
exports.deleteWorkflow = (req, res) => {
  store.workflows = store.workflows.filter(w => w.id != req.params.id);
  res.json({ message: "deleted" });
};

// ---------------- STEP ----------------

exports.addStep = (req, res) => {
  const step = {
    id: stepId++,
    workflowId: req.body.workflowId,
    name: req.body.name,
    order: req.body.order
  };
  store.steps.push(step);
  res.json(step);
};

// ---------------- RULE ----------------

exports.addRule = (req, res) => {
  const rule = {
    id: ruleId++,
    workflowId: req.body.workflowId,
    condition: req.body.condition,
    nextStepId: req.body.nextStepId
  };
  store.rules.push(rule);
  res.json(rule);
};

// ---------------- EXECUTION ----------------

exports.startExecution = (req, res) => {
  const { workflowId, data } = req.body;

  const error = validateAmount(data);
  if (error) return res.status(400).json({ error });

  const wfSteps = store.steps
    .filter(s => s.workflowId == workflowId)
    .sort((a, b) => a.order - b.order);

  const execution = {
    id: executionId++,
    workflowId,
    currentStepId: wfSteps[0]?.id || null,
    status: "in_progress",
    data,
    logs: []
  };

  store.executions.push(execution);
  res.json(execution);
};

// NEXT
exports.nextStep = (req, res) => {
  const { executionId } = req.body;

  const execution = store.executions.find(e => e.id == executionId);
  if (!execution) return res.status(404).json({ error: "Execution not found" });

  if (execution.status === "completed") {
    return res.json(execution);
  }

  const wfRules = store.rules.filter(r => r.workflowId == execution.workflowId);

  let nextStepId = null;

  for (let rule of wfRules) {
    if (evaluateCondition(rule.condition, execution.data)) {
      nextStepId = rule.nextStepId || null;
      break;
    }
  }

  execution.logs.push({
    stepId: execution.currentStepId,
    nextStepId,
    time: new Date()
  });

  execution.currentStepId = nextStepId;

  if (!nextStepId) {
    execution.status = "completed";
  }

  res.json(execution);
};

// GET EXECUTION
exports.getExecution = (req, res) => {
  const execution = store.executions.find(e => e.id == req.params.id);
  if (!execution) return res.status(404).json({ error: "not found" });

  res.json(execution);
};

// CANCEL
exports.cancelExecution = (req, res) => {
  const execution = store.executions.find(e => e.id == req.params.id);
  if (!execution) return res.status(404).json({ error: "not found" });

  execution.status = "cancelled";
  res.json(execution);
};