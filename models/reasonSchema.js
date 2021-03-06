var mongoose = require("mongoose");
var reasonSchema = new mongoose.Schema({
  Reason_id: String,
  Reason: String,
  TagCode: String,
  TagName: String,
  TagColor: String,
  TagState: String,
  ParentCode: String,
  TagLevel: String,
  TagCategories: String,
  errorDescription: String,
  status: Number,
});
reasonSchema.pre("save", function (next) {
  this.Reason_id = this._id;
  next();
});
module.exports = mongoose.model("Reason", reasonSchema, "ALB_Reason");
