var mongoose = require("mongoose");

var prdDataHrSchema = new mongoose.Schema({
  job_Id: String,
  job: String,
  date: String,
  shift: String,
  hours: String,
  workstation: String,
  operator: String,
  supervisor: String,
  stCountPerHr: String,
  acCountPerHr: String,
  speedOfRun: String,
  dtCode: String,
  dtReason: String,
  dtStop: String,
  dtMin: String,
  noOfStops: String,
  sndMail: String,
  status: Number,
});
module.exports = mongoose.model("PrdDataHr", prdDataHrSchema, "prdDataHr");
