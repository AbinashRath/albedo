var mongoose = require("mongoose");
var workstationSchema = new mongoose.Schema({
  workstation_id: String,
  Workstation: String,
  Machine_Type: String,
  Manufacture: String,
  ShopFloor: String,
  IP_Address: String,
  host_name: String,
  Description: String,
  status: Number,
});
workstationSchema.pre("save", function (next) {
  this.workstation_id = this._id;
  next();
});

module.exports = mongoose.model(
  "Workstation",
  workstationSchema,
  "ALB_Workstation"
);
