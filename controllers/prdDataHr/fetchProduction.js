var PrdDataHr = require("../../models/prdDataHrSchema");

exports.fetchProduction = (req, res, next) => {
  PrdDataHr.find({ status: 1 }, function (err, response) {
    res.json(response);
  });
};
