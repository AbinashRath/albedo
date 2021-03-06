var mongoose = require("mongoose");

var aspJobSchema = new mongoose.Schema({
  job_Id: String,
  job: String,
  jobDetails: String,
  scheduleStartTime: String,
  scheduleEndTime: String,
  item: String,
  scheduleDownStartTime: String,
  scheduleDownEndTime: String,
  totalProdue: String,
  status: Number,
});
module.exports = mongoose.model("AspJob", aspJobSchema, "aspJob");
