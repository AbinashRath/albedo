var Roles = require("../../models/roleSchema");
var mongoose = require('mongoose')
var ObjectID = require('mongodb').ObjectID;


exports.addRoles = (req, res, next) => {
  var rolesInfo = req.body;
//   var userId = rolesInfo.UserId;
//   var token = rolesInfo.Token;

  var newRoles = new Roles({
    Role_Id: new ObjectID(),
    Role_Name: rolesInfo.Role_Name,
    Main_menu: "Not Specified",
    UI_access: rolesInfo.UI_access,
    SystemAdmin: false,
    APSMaster: false,
    APSDataScreen: false,
    status: 1,
  });

  newRoles.save(function (err, Roles) {
    if (err) res.json({ message: "Error", status: 1 });
    else res.json({ message: "Roles added successfully", status: 0 });
  });
};
