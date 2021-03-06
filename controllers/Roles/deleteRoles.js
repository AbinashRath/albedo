var Roles = require('../../models/roleSchema');

exports.deleteRoles = (req, res, next) => {

	var myquery = { _id: req.body.id };
	var newvalues = { $set: {status: 0} };
	Roles.updateOne(myquery, newvalues, function(err, result) {
		if (err){
			esult.json({message: 'Error' , status: 1});
		} 
		else{
			res.json({message: 'Successfully deleted' , status: 0});
		}
	});	
};