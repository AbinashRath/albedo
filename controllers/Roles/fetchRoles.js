var Roles = require('../../models/roleSchema');

exports.fetchRoles = (req, res, next) => {
	
	Roles.find({ status: 1 },function(err, response){
      res.json(response);
   });
}