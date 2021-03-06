var Downtime = require("../../models/downtimeSchema");
exports.deleteDowntime = (req, res, next) => {
  var myquery = { Downtime_id: req.body.id };
  var newvalues = { $set: { status: 0 } };
  Downtime.updateOne(myquery, newvalues, function (err, result) {
    if (err) {
      esult.json({ message: "Error", status: 1 });
    } else {
      res.json({ message: "Successfully deleted", status: 0 });
    }
  });
};
