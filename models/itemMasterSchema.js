var mongoose = require("mongoose");

var itemMasterSchema = new mongoose.Schema({
  Item_id: String,
  Item_Code: String,
  Unit: String,
  Start_Date: String,
  End_Date: String,
  Min_Produce_Hr: String,
  Max_Produce_Hr: String,
  Averag_Produce_Hr: String,
  ItemDescription: String,
  Organization_id: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Organization" },
  ],
  status: Number,
});
itemMasterSchema.pre("save", function (next) {
  this.Item_id = this._id;
  next();
});
module.exports = mongoose.model(
  "ItemMaster",
  itemMasterSchema,
  "ALB_Item_Master"
);
