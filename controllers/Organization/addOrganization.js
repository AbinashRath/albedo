var Organization = require("../../models/organisationSchema");
var mongoose = require('mongoose');
var ObjectID = require('mongodb').ObjectID;
// var randomString = require('../../utils/randomString');
// var Roles = require('../models/roleSchema');

exports.addOrganization = (req, res, next) => {
  console.log("check");
  console.log(req.body);
 var organizationInfo = req.body;
 var organizationCode = organizationInfo.Organization_Code;
 var client = organizationInfo.Client;
 var location = organizationInfo.Location;
 var costCenter = organizationInfo.costCenter;
 var plant = organizationInfo.Plant;
 var shopFloor = organizationInfo.Shopfloor;
 var businessUnit = organizationInfo.businessUnit;

  var newOrganization = new Organization({
    Oraganization_Id: new ObjectID(),
    Organization_Code: organizationCode,
    Location: location,
    Client: client,
    costCenter: costCenter,
    Plant: plant,
    businessUnit: businessUnit,
    //organizationName: String,
    // Workstation: randomString(), //nv
    //department: String,
    Shopfloor: shopFloor,
    status: 1,
  });

  newOrganization.save(function (err, Roles) {
    if (err) res.json({ message: "Error", status: 1 });
    else res.json({ message: "Roles added successfully", status: 0 });
  });
};
