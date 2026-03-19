const rules = require("../data/rules");

exports.addRule = (req, res) => {
  const rule = {
    id: rules.length + 1,
    step_id: req.params.step_id,
    condition: req.body.condition,
    next_step_id: req.body.next_step_id,
    priority: req.body.priority
  };
  rules.push(rule);
  res.json(rule);
};

exports.getRules = (req, res) => {
  const data = rules.filter(r => r.step_id == req.params.step_id);
  res.json(data);
};