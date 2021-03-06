var mongoose = require("mongoose");
var jobSchedulerSchema = new mongoose.Schema({
  JobScheduler_id: String,
  Operator: [{ type: mongoose.Schema.Types.ObjectId, ref: "Employee" }],
  Supervisor: [{ type: mongoose.Schema.Types.ObjectId, ref: "Employee" }],
  WorkStation: [{ type: mongoose.Schema.Types.ObjectId, ref: "Workstation" }],
  Job_Batch_name: String,
  WorkOrderDetails: String,
  ScheduleStartTime: String,
  ScheduleEndTime: String,
  ScheduleDownTimeStart: String,
  ScheduleDownTimeEnd: String,
  SceduleHr: String,
  Item_id: [{ type: mongoose.Schema.Types.ObjectId, ref: "ItemMaster" }],
  status: Number,
});
jobSchedulerSchema.pre("save", function (next) {
  this.Item_id = this._id;
  next();
});
module.exports = mongoose.model(
  "JobScheduler",
  jobSchedulerSchema,
  "ALB_JobScheduler"
);
