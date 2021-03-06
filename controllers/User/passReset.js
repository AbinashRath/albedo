var User = require("../../models/userSchema");
var bcrypt =  require('bcrypt');

exports.reset = (req, res, next) => {
  var resetInfo = req.body;
//   var msg = "";
//   var stat = -1;
  var saltRounds = 10;
  console.log(req.body);

  if (resetInfo.password == resetInfo.confirmPassword) {
    bcrypt.genSalt(saltRounds, function (err, salt) {
      if (err) {
        res.json({ message: "Salt generation error", status: 0 });
      } else {
        bcrypt.hash(resetInfo.password, salt, function (err, hash) {
          if (err) {
            res.json({ message: "Hash error", status: 0 });
          } else {
            var myquery = { User_id: resetInfo.UserId };
            var newvalues = { $set: { Password: hash, First_Login: 0 } };
            User.updateOne(myquery, newvalues, function (err, result) {
              if (err) {
                result.json({ message: "Error", status: 0 });
              } else {
                res.json({
                  message: "Password Reset",
                  id: resetInfo.UserId,
                  status: 1,
                });
              }
            });
          }
        });
      }
    });
  } else {
    res.json({ message: "Password reset failed", status: 0 });
  }

  //res.json({message: msg , status: stat});
};
