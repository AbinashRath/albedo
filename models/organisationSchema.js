var mongoose = require("mongoose");
var organisationSchema = new mongoose.Schema({
  Organization_id: String, //nv
  Organization_Code: String,
  Location: String,
  Client: String,
  costCenter: String,
  Plant: String,
  businessUnit: String,
  //organizationName: String,
  Workstation: String, //nv
  //department: String,
  Shopfloor: String,
  status: Number,
});
organisationSchema.pre("save", function (next) {
  this.Organization_id = this._id;
  // this.Workstation = randomString();
  next();
});
module.exports = mongoose.model(
  "Organization",
  organisationSchema,
  "ALB_Organization"
);
