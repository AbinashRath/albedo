var Reason = require("../../models/reasonSchema");
var mongoose = require('mongoose');
var ObjectID = require('mongodb').ObjectID;

exports.addReason = (req, res, next) => {
  var reasonInfo = req.body;

  var userId = reasonInfo.UserId;

  var newReason = new Reason({
    Reason_id: new ObjectID(),
    Reason: reasonInfo.reason,
    TagCode: reasonInfo.tagCode,
    TagName: reasonInfo.tagName,
    TagColor: reasonInfo.tagColor,
    TagState: reasonInfo.tagState,
    ParentCode: reasonInfo.parentCode,
    TagLevel: reasonInfo.tagLevel,
    TagCategories: reasonInfo.tagCategory,
    errorDescription: reasonInfo.errorDescription,
    status: 1,
  });

  User.find({ User_id: userId }, function (err, response) {
    if (err || response.length == 0)
      res.json({ message: "User Not Authenticated", status: 1 });
    else {
      newReason.save(function (err, Reason) {
        if (err) res.json({ message: "Error", status: 1 });
        else res.json({ message: "Reason added successfully", status: 0 });
      });
    }
  });
};
