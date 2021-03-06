var AspJob = require("../../models/aspJobSchema");

exports.deleteaspJob = (req, res, next) => {
  var myquery = { job_Id: req.body.id };
  var newvalues = { $set: { status: 0 } };
  AspJob.updateOne(myquery, newvalues, function (err, result) {
    if (err) {
      esult.json({ message: "Error", status: 1 });
    } else {
      res.json({ message: "Successfully deleted", status: 0 });
    }
  });
};
