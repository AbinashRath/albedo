var Workstation =  require('../../models/workstationSchema');

exports.fetchWorkstation = (req, res, next) => {
  Workstation.find({ status: 1 }, function (err, response) {
    res.json(response);
  });
};
