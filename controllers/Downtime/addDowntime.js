var Downtime = require('../../models/downtimeSchema');
var ObjectID = require('mongodb').ObjectID;
exports.addDowntime = (req, res, next) => {

	var downtimeInfo = req.body;
	
	var userId = downtimeInfo.UserId;

	var newDowntime = new Downtime({

		Downtime_id: new ObjectID(),
		DT_Code: downtimeInfo.dtCode,
		DT_Reason: downtimeInfo.dtReason,
		DT_Stop: downtimeInfo.dtStop,
		DT_min: downtimeInfo.dtMin,
		Nstops: downtimeInfo.nStops,
		OEE_DT_Dec: downtimeInfo.oeedtdec,
		OEE_Hr: downtimeInfo.oeeHr,
		Comments: downtimeInfo.comments,
		DTCorrective_Action: downtimeInfo.action,
		status: 1
	});
	
	User.find({ User_id: userId },function(err, response){
		if(err || response.length == 0)
            res.json({message: 'User Not Authenticated' , status: 1});
		else{
			newDowntime.save(function(err, Downtime){
				 if(err)
					res.json({message: 'Error' , status: 1});
				else
					res.json({message: 'Downtime added successfully' , status: 0});
			});
		}
	})
}