var Employee = require('../../models/employeeSchema');
var ObjectID = require('mongodb').ObjectID;

exports.addEmployee = (req, res, next) => {
  var employeeInfo = req.body;

  var userId = employeeInfo.UserId;

  var newEmployee = new Employee({
    Employee_id: new ObjectID(),
    Employee: employeeInfo.employee,
    First_Name: employeeInfo.employeeFname,
    Last_Name: employeeInfo.employeeLname,
    Employee_ref: employeeInfo.employeeRef,
    email_address: employeeInfo.email,
    Role_id: employeeInfo.roleId,
    Phone: employeeInfo.phnNumber,
    Mobile: employeeInfo.cellNumber,
    Manager_number: employeeInfo.managerNumber,
    Oraganization_Id: employeeInfo.organizationId,
    status: 1,
  });

  User.find({ User_id: userId }, function (err, response) {
    if (err || response.length == 0)
      res.json({ message: "User Not Authenticated", status: 1 });
    else {
      newEmployee.save(function (err, Employee) {
        if (err) res.json({ message: "Error", status: 1 });
        else res.json({ message: "Employee added successfully", status: 0 });
      });
    }
  });
};
