var InventoryCalender = require("../../models/inventoryCalanderSchema");
var User = require('../../models/userSchema');
var mongoose = require('mongoose');
var ObjectID = require('mongodb').ObjectID;
var moment = require('moment');

exports.addInventory = (req, res, next) => {
  var inventoryInfo = req.body;

  var userId = inventoryInfo.UserId;
  var startDate = moment(inventoryInfo.yearStartDate).format(
    "YYYY-MM-DD HH:mm:ss"
  );
  var endDate = moment(inventoryInfo.yearEndDate).format("YYYY-MM-DD HH:mm:ss");
  var PrStartDate = moment(inventoryInfo.pereiodStartDate).format(
    "YYYY-MM-DD HH:mm:ss"
  );
  var PrEndDate = moment(inventoryInfo.periodEndDate).format(
    "YYYY-MM-DD HH:mm:ss"
  );

  var newInventory = new InventoryCalender({
    Inventory_id: new ObjectID(),
    Inventory_Cal_Name: inventoryInfo.Inventory_Cal_Name,
    Year: inventoryInfo.Year,
    Start_Date: startDate,
    End_Date: endDate,
    Period: inventoryInfo.inventoryInfo.Period,
    P_Start_Date: PrStartDate,
    P_End_Date: PrEndDate,
    Schedule: inventoryInfo.Schedule,
    Shift: inventoryInfo.Shift,
    Shift_Hour: inventoryInfo.Shift_Hour,
    status: 1,
  });

  User.find({ User_id: userId }, function (err, response) {
    if (err || response.length == 0)
      res.json({ message: "User Not Authenticated", status: 1 });
    else {
      newInventory.save(function (err, InventoryCalender) {
        if (err) res.json({ message: "Error", status: 1 });
        else
          res.json({
            message: "Inventory Calender added successfully",
            status: 0,
          });
      });
    }
  });
};
