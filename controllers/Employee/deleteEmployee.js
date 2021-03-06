var Employee = require("../../models/employeeSchema");

exports.deleteEmployee = (req, res, next) => {
  var myquery = { Employee_id: req.body.id };
  var newvalues = { $set: { status: 0 } };
  Employee.updateOne(myquery, newvalues, function (err, result) {
    if (err) {
      esult.json({ message: "Error", status: 1 });
    } else {
      res.json({ message: "Successfully deleted", status: 0 });
    }
  });
};
