var Workstation =  require('../../models/workstationSchema');
var mongoose = require('mongoose');
var User = require('../../models/userSchema');
var ObjectID = require('mongodb').ObjectID;
// var mongoose = require('mongoose');
exports.addWorkstation = (req, res, next) => {

	var workstationInfo = req.body;
	
//<<<<<<< HEAD
	var userId = workstationInfo.UserId;
	
	var newWorkStation = new Workstation({
		workstation_id: new ObjectID(),
		Workstation: workstationInfo.workstationName,
		Machine_Type: workstationInfo.machineType,
		Manufacture: workstationInfo.manufacture,
		ShopFloor: workstationInfo.shopFloor,
		IP_Address: workstationInfo.ipAddress,
		host_name: workstationInfo.hostName,
		Description: workstationInfo.description,
		status: 1
	});
	
	User.find({ User_id: userId },function(err, response){
		if(err || response.length == 0)
            res.json({message: 'User Not Authenticated' , status: 1});
		else{
			newWorkStation.save(function(err, Workstation){
				 if(err)
					res.json({message: 'Error' , status: 1});
				else
					res.json({message: 'Workstation added successfully' , status: 0});
			});
		}
	})
}