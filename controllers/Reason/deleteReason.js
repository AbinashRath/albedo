var Reason = require("../../models/reasonSchema");

exports.deleteReason = (req, res, next) => {
  var myquery = { Reason_id: req.body.id };
  var newvalues = { $set: { status: 0 } };
  Reason.updateOne(myquery, newvalues, function (err, result) {
    if (err) {
      esult.json({ message: "Error", status: 1 });
    } else {
      res.json({ message: "Successfully deleted", status: 0 });
    }
  });
};
