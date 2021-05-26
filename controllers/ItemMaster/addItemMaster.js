var ItemMaster = require('../../models/itemMasterSchema');
var User = require('../../models/userSchema');
var  mongoose = require('mongoose');
var ObjectID = require('mongodb').ObjectID;
var moment = require('moment');

exports.addItemMaster = (req, res, next) => {
  var itemMasterInfo = req.body;
  var userId = itemMasterInfo.UserId;
  var startDate = moment(itemMasterInfo.startDate).format(
    "YYYY-MM-DD HH:mm:ss"
  );
  var endDate = moment(itemMasterInfo.endDate).format("YYYY-MM-DD HH:mm:ss");

  var newItemMaster = new ItemMaster({
    Item_id: new ObjectID(),
    Item_Code: itemMasterInfo.itemCode,
    Unit: itemMasterInfo.unit,
    Start_Date: startDate,
    End_Date: endDate,
    Min_Produce_Hr: itemMasterInfo.minProduce,
    Max_Produce_Hr: itemMasterInfo.maxProduce,
    Averag_Produce_Hr: itemMasterInfo.averageProduce,
    ItemDescription: itemMasterInfo.itemDescription,
    Organization_id: itemMasterInfo.organizationId,
    status: 1,
  });

  User.find({ User_id: userId }, function (err, response) {
    if (err || response.length == 0)
      res.json({ message: "User Not Authenticated", status: 1 });
    else {
      newItemMaster.save(function (err, ItemMaster) {
        if (err) res.json({ message: "Error", status: 1 });
        else res.json({ message: "ItemMaster added successfully", status: 0 });
      });
    }
  });
};
