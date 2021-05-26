var Employee = require('../../models/employeeSchema');
exports.updateEmployee = (req, res, next) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!",
      });
    }
    const id = { Employee_id: req.body.Employee_id };
    Employee.findOneAndUpdate(id, req.body, { useFindAndModify: false })
      .then((data) => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update Employee with id=${id}.Maybe Employee was not found`,
          });
        } else res.send({ message: "Employee was updated Successfully." });
      })
      .catch((err) => {
        res.status(500).send({
          message: "Error updating Employee with id=" + id,
        });
      });
  }