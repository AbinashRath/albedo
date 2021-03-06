var InventoryCalender = require("../../models/inventoryCalanderSchema");

exports.deleteInventory = (req, res, next) => {
  var myquery = { Inventory_id: req.body.id };
  var newvalues = { $set: { status: 0 } };
  InventoryCalender.updateOne(myquery, newvalues, function (err, result) {
    if (err) {
      esult.json({ message: "Error", status: 1 });
    } else {
      res.json({ message: "Successfully deleted", status: 0 });
    }
  });
};
