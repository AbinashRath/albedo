var Organization = require("../../models/organisationSchema");
var ObjectID = require('mongodb').ObjectID;
// var Roles = require('../models/roleSchema');

exports.addOrganization = (req, res, next) => {
  let organizationInfo = req.body;
  let organizationCode = organizationInfo.Organization_Code;
  let client = organizationInfo.Client;
  let location = organizationInfo.Location;
  let costCenter = organizationInfo.costCenter;
  let plant = organizationInfo.Plant;
  let shopFloor = organizationInfo.Shopfloor;
  let businessUnit = organizationInfo.businessUnit;

  var newOrganization = new Organization({
    Oraganization_Id: new ObjectID(),
    Organization_Code: organizationCode,
    Location: location,
    Client: client,
    costCenter: costCenter,
    Plant: plant,
    businessUnit: businessUnit,
    //organizationName: String,
    Workstation: randomString(), //nv
    //department: String,
    Shopfloor: shopFloor,
    status: 1,
  });

  newOrganization.save(function (err, Roles) {
    if (err) res.json({ message: "Error", status: 1 });
    else res.json({ message: "Roles added successfully", status: 0 });
  });
};
