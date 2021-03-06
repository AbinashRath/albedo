var JobScheduler = require('../../models/jobSchedulerSchema');
exports.deleteJobScheduler=(req, res, next) => {

	var myquery = { JobScheduler_id: req.body.id };
	var newvalues = { $set: {status: 0} };
	JobScheduler.updateOne(myquery, newvalues, function(err, result) {
		if (err){
			esult.json({message: 'Error' , status: 1});
		} 
		else{
			res.json({message: 'Successfully deleted' , status: 0});
		}
	});	
};