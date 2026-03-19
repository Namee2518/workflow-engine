let steps = [];

exports.addStep = (req, res) => {
  const step = {
    id: steps.length + 1,
    workflow_id: Number(req.params.workflow_id),
    name: req.body.name,
    order: req.body.order
  };

  steps.push(step);
  res.json(step);
};