var Employee = require("../../models/employeeSchema");

exports.fetchEmployee = (req, res, next) => {
  Employee.find({ status: 1 }, function (err, response) {
    res.json(response);
  });
};
