var User = require('../../models/userSchema');

exports.fetchUsers = (req, res, next) => {
	
	User.find({ status: 1 },function(err, response){
      res.json(response);
   });
}