var mongoose = require("mongoose");
var inventoryCalanderSchema = new mongoose.Schema({
  Inventory_id: String,
  Inventory_Cal_Name: String,
  Year: Number,
  Start_Date: String,
  End_Date: String,
  Period: String,
  P_Start_Date: String,
  P_End_Date: String,
  Schedule: String,
  Shift: String,
  Shift_Hour: Number,
  status: Number,
});
module.exports = mongoose.model(
  "InventoryCalender",
  inventoryCalanderSchema,
  "ALB_Inventory_Calendar"
);
