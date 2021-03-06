var Reason = require('../../models/reasonSchema');

exports.fetchReason = (req, res, next) => {
	
	Reason.find({ status: 1 },function(err, response){
      res.json(response);
   });
};