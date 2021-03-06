var JobScheduler = require('../../models/jobSchedulerSchema');
var ObjectID = require('mongodb').ObjectID;
exports.addJobScheduler = (req, res, next) => {

	var jobSchedulerInfo = req.body;
	
	var userId = jobSchedulerInfo.UserId;
	var startTime = moment(jobSchedulerInfo.startTime).format("YYYY-MM-DD HH:mm:ss");
	var endTime = moment(jobSchedulerInfo.endTime).format("YYYY-MM-DD HH:mm:ss");
	var start = moment(jobSchedulerInfo.start).format("YYYY-MM-DD HH:mm:ss");
	var end = moment(jobSchedulerInfo.end).format("YYYY-MM-DD HH:mm:ss");

	var newJobScheduler = new JobScheduler({
		JobScheduler_id: new ObjectID(),
		Operator: jobSchedulerInfo.operator,
		Supervisor: jobSchedulerInfo.supervisor,
		WorkStation: jobSchedulerInfo.workStation,
		Job_Batch_name: jobSchedulerInfo.batchName,
		WorkOrderDetails: jobSchedulerInfo.orderDetails, 
		ScheduleStartTime: startTime,
		ScheduleEndTime: endTime,
		ScheduleDownTimeStart: start,
		ScheduleDownTimeEnd: end,
		SceduleHr: jobSchedulerInfo.scheduleHr,
		Item_id: jobSchedulerInfo.itemId,
		status: 1
	});
	
	User.find({ User_id: userId },function(err, response){
		if(err || response.length == 0)
            res.json({message: 'User Not Authenticated' , status: 1});
		else{
			newJobScheduler.save(function(err, JobScheduler){
				 if(err)
					res.json({message: 'Error' , status: 1});
				else
					res.json({message: 'Job Scheduler added successfully' , status: 0});
			});
		}
	})
}