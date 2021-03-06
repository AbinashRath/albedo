var JobScheduler = require("../../models/jobSchedulerSchema");
exports.fetchJobScheduler = (req, res, next) => {
  JobScheduler.find({ status: 1 }, function (err, response) {
    res.json(response);
  });
};
