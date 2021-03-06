var Organization = require("../../models/organisationSchema");
exports.deleteOrganization = (req, res, next) => {
  var myquery = { Organization_id: req.body.id };
  var newvalues = { $set: { status: 0 } };
  Organization.updateOne(myquery, newvalues, function (err, result) {
    if (err) {
      result.json({ message: "Error", status: 1 });
    } else {
      res.json({ message: "Successfully deleted", status: 0 });
    }
  });
};
