var ItemMaster = require("../../models/itemMasterSchema");

exports.fetchItemMaster = (req, res, next) => {
  ItemMaster.find({ status: 1 }, function (err, response) {
    res.json(response);
  });
};
