var User = require("../../models/userSchema");
var bcrypt = require("bcrypt");



exports.login =  function(req, res, next) {

	console.log(req.body);

	var LoginInfo = req.body;
	var flag = 0;
	
	User.find({ Email_Id: LoginInfo.email , status: 1 },function(err, response){
         if(err)
            res.json({message: 'Error' , status: 0});
		else if(response.length == 0)
			res.json({message: 'Invalid user id' , status: 0});
		else{
			var role=response[0].Role_Id;
			var id=response[0].User_id;
			var firstLogin=response[0].First_Login;
			var token=response[0].authenticationToken;
			var hash = response[0].Password;
			console.log(response[0].Password);
			bcrypt.compare(LoginInfo.password, hash, function(err, success) {
						
				if(err){
					res.json({message: 'Error' , status: 0});
				}
				else{
					if(success == false){
						res.json({message: 'Invalid Password' , status: 0});
					}
					else{
						res.json({message: 'Login Successful' , id:id , token:token , role:role , first_Login:firstLogin , status: 1});
					}
				}
			});
		}
    });
}
