const workflows = require("../data/workflows");
const steps = require("../data/steps");
const rules = require("../data/rules");
const executions = require("../data/executions");

let execId = 1;

exports.start = (req, res) => {
  const { workflowId, data } = req.body;

  if (!data.amount) return res.json({ error: "amount required" });

  const firstStep = steps.find(s => s.workflow_id == workflowId && s.step_order == 1);

  const exec = {
    id: execId++,
    workflow_id: workflowId,
    status: "in_progress",
    data,
    current_step_id: firstStep.id,
    logs: [],
    started_at: new Date()
  };

  executions.push(exec);

  res.json(exec);
};

exports.next = (req, res) => {
  const exec = executions.find(e => e.id == req.body.executionId);

  const step = steps.find(s => s.id == exec.current_step_id);

  const stepRules = rules.filter(r => r.step_id == step.id).sort((a,b)=>a.priority-b.priority);

  let next = null;
  let logs = [];

  for (let r of stepRules) {
    let result = false;

    if (r.condition === "DEFAULT") result = true;
    else {
      try {
        const fn = new Function("data", `with(data){return ${r.condition}}`);
        result = fn(exec.data);
      } catch {}
    }

    logs.push({ rule: r.condition, result });

    if (result) {
      next = r.next_step_id;
      break;
    }
  }

  exec.logs.push({
    step: step.step_name,
    rules: logs,
    next,
    time: new Date()
  });

  if (!next) {
    exec.status = "completed";
    return res.json(exec);
  }

  exec.current_step_id = next;

  res.json(exec);
};

exports.getExecution = (req, res) => {
  const exec = executions.find(e => e.id == req.params.id);
  res.json(exec);
};