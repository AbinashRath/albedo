var Workstation = require("../../models/workstationSchema");

exports.deleteWorkstation = (req, res, next) => {
  var myquery = { workstation_id: req.body.id };
  var newvalues = { $set: { status: 0 } };
  Workstation.updateOne(myquery, newvalues, function (err, result) {
    if (err) {
      esult.json({ message: "Error", status: 1 });
    } else {
      res.json({ message: "Successfully deleted", status: 0 });
    }
  });
};
