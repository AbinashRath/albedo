var Downtime = require("../../models/downtimeSchema");
exports.fetchDowntime = (req, res, next) => {
  Downtime.find({ status: 1 }, function (err, response) {
    res.json(response);
  });
};
