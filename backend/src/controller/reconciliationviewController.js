const ReconciliationResult = require("../models/ReconciliationResult");


const getReconciliationView = async (req, res) => {
  const { uploadJobId } = req.params;

const results = await ReconciliationResult.find()
.populate("recordId")
.populate("systemRecordId");

  res.json(results);



};


module.exports= getReconciliationView;