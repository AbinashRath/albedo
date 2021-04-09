var AspJob =  require('../../models/aspJobSchema');
var mmongoose = require('mongoose');
var ObjectID = require('mongodb').ObjectID;

exports.aspJob = (req, res, next) => {
  console.log(req.body);

  var aspJobInfo = req.body;

  var userId = aspJobInfo.UserId;

  var newAspJob = new AspJob({
    job_Id: new ObjectID(),
    job: aspJobInfo.job,
    jobDetails: aspJobInfo.jobDetails,
    scheduleStartTime: aspJobInfo.scheduleStartTime,
    scheduleEndTime: aspJobInfo.scheduleEndTime,
    item: aspJobInfo.item,
    scheduleDownStartTime: aspJobInfo.scheduleDownStartTime,
    scheduleDownEndTime: aspJobInfo.scheduleDownEndTime,
    totalProdue: aspJobInfo.totalProdue,
    status: 1,
  });

  User.find({ User_id: userId }, function (err, response) {
    if (err || response.length == 0)
      res.json({ message: "User Not Authenticated", status: 1 });
    else {
      newAspJob.save(function (err, AspJob) {
        if (err) res.json({ message: "Error", status: 1 });
        else res.json({ message: "AspJob added successfully", status: 0 });
      });
    }
  });
};
