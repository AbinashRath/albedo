var ItemMaster = require("../../models/itemMasterSchema");

exports.deleteItem = (req, res, next) => {
  var myquery = { Item_id: req.body.id };
  var newvalues = { $set: { status: 0 } };
  ItemMaster.updateOne(myquery, newvalues, function (err, result) {
    if (err) {
      esult.json({ message: "Error", status: 1 });
    } else {
      res.json({ message: "Successfully deleted", status: 0 });
    }
  });
};
