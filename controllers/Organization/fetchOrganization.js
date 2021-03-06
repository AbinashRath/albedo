var Organization = require("../../models/organisationSchema");

exports.fetchOrganization = (req, res, next) => {
  Organization.find({ status: 1 }, function (err, response) {
    res.json(response);
  });
};
