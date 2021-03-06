var InventoryCalender = require("../../models/inventoryCalanderSchema");
exports.fetchInventory = (req, res, next) => {
  InventoryCalender.find({ status: 1 }, function (err, response) {
    res.json(response);
  });
};
