var mongoose = require("mongoose");
var uniqueValidator = require('mongoose-unique-validator');

var userSchema = new mongoose.Schema({
  User_id: String,
  Employee_id: [{ type: mongoose.Schema.Types.ObjectId, ref: "Employee" }],
  Employee_number: String,
  User_name: { type: String, unique: true },
  Client: String,
  Creation_date: String,
  Updated_date: String,
  Role_id: [{ type: mongoose.Schema.Types.ObjectId, ref: "Roles" }],
  Role_name: String,
  Created_by: [{ type: mongoose.Schema.Types.ObjectId, ref: "ALB_User" }],
  Updated_by: [{ type: mongoose.Schema.Types.ObjectId, ref: "ALB_User" }],
  Email_Id: { type: String, unique: true },
  Password: String,
  Start_Date: String,
  End_Date: String,
  Organization_id: String,
  status: Number,
  First_Login: Number,
});

userSchema.plugin(uniqueValidator, {
  message: "User name or Email ID already exists",
});
userSchema.pre("save", function (next) {
  // userSchema.plugin(uniqueValidator);

  this.User_id = this._id;
  next();
});

module.exports = mongoose.model("User", userSchema, "ALB_User");
