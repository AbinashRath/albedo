var AspJob = require('../../models/aspJobSchema');
exports.fetchJob = (req, res, next) => {
	
	AspJob.find({ status: 1 },function(err, response){
      res.json(response);
   });
};