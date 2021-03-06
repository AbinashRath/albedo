var mongoose = require("mongoose");
var employeeSchema = new mongoose.Schema({
  Employee_id: String,
  Employee: String,
  First_Name: String,
  Last_Name: String,
  Employee_ref: String,
  email_address: String,
  Role_id: [{ type: mongoose.Schema.Types.ObjectId, ref: "Roles" }],
  Phone: String,
  Mobile: String,
  Manager_number: [{ type: mongoose.Schema.Types.ObjectId, ref: "Employee" }],
  Oraganization_Id: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Organization" },
  ],
  status: Number,
});

employeeSchema.pre("save", function (next) {
  this.Employee_id = this._id;
  next();
});

module.exports = mongoose.model("Employee", employeeSchema, "ALB_Employees");
