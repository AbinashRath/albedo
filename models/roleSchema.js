var mongoose = require("mongoose");
var roleSchema = new mongoose.Schema({
  Role_Id: String,
  Role_Name: String,
  Main_menu: String,
  UI_access: String,
  SystemAdmin: Boolean,
  APSMaster: Boolean,
  APSDataScreen: Boolean,
  status: Number,
});

roleSchema.pre("save", function (next) {
  this.Role_Id = this._id;
  next();
});
module.exports = mongoose.model("Roles", roleSchema, "ALB_Role");
