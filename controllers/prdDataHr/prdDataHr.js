var PrdDataHr = require("../../models/prdDataHrSchema");
var ObjectID = require('mongodb').ObjectID;

exports.prdDataHr = (req, res, next) => {
  var prdDataHrInfo = req.body;

  var userId = prdDataHrInfo.UserId;
  var ddate = moment(prdDataHrInfo.date).format("YYYY-MM-DD HH:mm:ss");

  var newPrdDataHr = new PrdDataHr({
    job_Id: new ObjectID(),
    job: prdDataHrInfo.job,
    date: ddate,
    shift: prdDataHrInfo.shift,
    hours: prdDataHrInfo.hours,
    workstation: prdDataHrInfo.workstation,
    operator: prdDataHrInfo.operator,
    supervisor: prdDataHrInfo.supervisor,
    stCountPerHr: prdDataHrInfo.stCountPerHr,
    acCountPerHr: prdDataHrInfo.acCountPerHr,
    speedOfRun: prdDataHrInfo.speedOfRun,
    dtCode: prdDataHrInfo.dtCode,
    dtReason: prdDataHrInfo.dtReason,
    dtStop: prdDataHrInfo.dtStop,
    dtMin: prdDataHrInfo.dtMin,
    noOfStops: prdDataHrInfo.noOfStops,
    sndMail: prdDataHrInfo.sndMail,
    status: 1,
  });

  User.find({ User_id: userId }, function (err, response) {
    if (err || response.length == 0)
      res.json({ message: "User Not Authenticated", status: 1 });
    else {
      newPrdDataHr.save(function (err, PrdDataHr) {
        if (err) res.json({ message: "Error", status: 1 });
        else res.json({ message: "PrdDataHr added successfully", status: 0 });
      });
    }
  });
};
