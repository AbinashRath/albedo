var mongoose = require("mongoose");
var downtimeSchema = new mongoose.Schema({
  Downtime_id: String,
  DT_Code: String,
  DT_Reason: String,
  DT_Stop: String,
  DT_min: String,
  Nstops: String,
  OEE_DT_Dec: String,
  OEE_Hr: String,
  Comments: String,
  DTCorrective_Action: String,
  status: Number,
});
downtimeSchema.pre("save", function (next) {
  this.Downtime_id = this._id;
  next();
});
module.exports = mongoose.model("Downtime", downtimeSchema, "ALB_Downtime");
