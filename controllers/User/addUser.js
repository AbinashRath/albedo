
var User = require("../../models/userSchema");
var Roles = require("../../models/roleSchema");
var ObjectID = require("mongodb").ObjectID;
var bcrypt = require("bcryptjs");
var nodemailer = require("nodemailer");
const moment = require("moment");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

exports.addUser = (req, res, next) => {
  var userInfo = req.body;
  var startDate = moment(userInfo.startdate).format("YYYY-MM-DD HH:mm:ss");
  var endDate = moment(userInfo.enddate).format("YYYY-MM-DD HH:mm:ss");
  var currentDate = moment(new Date()).format("YYYY-MM-DD HH:mm:ss");
  var userId = userInfo.UserId;

  if (userId == "1234") {
    userId = new ObjectID();
  }

  var roleName = "";
  const saltRounds = 10;

  Roles.findOne({ _id: userInfo.role }, function (err, response) {
    if (err) {
      res.json({ message: "RoleName error", status: 1 });
    } else {
      console.log("Response: " + response);
      roleName = response.Role_Name;

      bcrypt.genSalt(saltRounds, function (err, salt) {
        if (err) {
          res.json({ message: "Salt generation error", status: 1 });
        } else {
          bcrypt.hash(userInfo.pwd, salt, function (err, hash) {
            if (err) {
              res.json({ message: "Hash error", status: 1 });
            } else {
              console.log("Hash; " + hash);
              var newUser = new User({
                User_id: new ObjectID(),
                User_name: userInfo.username,
                Employee_id: userInfo.employeeId,
                Employee_number: userInfo.empNumber,
                Client: "Test",
                Start_Date: startDate,
                End_Date: endDate,
                Creation_date: currentDate,
                Updated_date: currentDate,
                Created_by: userId,
                Updated_by: userId,
                Role_id: userInfo.role,
                Role_name: roleName,
                Email_Id: userInfo.email,
                Organization_id: userInfo.organizationId,
                Password: hash,
                First_Login: 1,
                status: 1,
              });
              newUser.save(function (err, User) {
                if (err) {
                  if (
                    err.errors.User_name != undefined &&
                    err.errors.User_name.kind === "unique"
                  ) {
                    res.json({
                      message: "User name already exists",
                      status: 1,
                    });
                  } else if (
                    err.errors.Email_Id != undefined &&
                    err.errors.Email_Id.kind === "unique"
                  ) {
                    res.json({ message: "Email ID already exists", status: 1 });
                  } else {
                    res.json({ message: "Save Error", status: 1 });
                  }
                } else {
                  const clientId =
                    "438648115554-tscqb14rcunjp9c821bmbveh95mmipvb.apps.googleusercontent.com";
                  // const secret = "WFyBQDu1s0VcZmeR3bDqrcrs";
                  const secret = "8BpaSbsRtmy5OhZBspORyt9x";
                  const email = "atgenx@gmail.com";
                  const oauth2Client = new OAuth2(
                    clientId,
                    secret,
                    "https://developers.google.com/oauthplayground"
                  );
                  // const refreshToken =
                  //   "1//04ib2YTaqIQx4CgYIARAAGAQSNwF-L9IrJVWWhFcGqg48ANEIxZ70aRnUwRSP-Z8JDP5WF9GVlEPZyN-dK2xRcWkRVFy7GZWBka4";
                    const refreshToken =
                    "1//04AgXkIaC_X2tCgYIARAAGAQSNwF-L9Ir7BbNhU2E9W2EprnI357NEaOp7atSXk9WW7NOz3RCYPJsshMWbnHzH3Q8bZT2_1vmntY";

                  oauth2Client.setCredentials({
                    refresh_token: refreshToken,
                  });

                  async function sendMail() {
                    try {
                      const accessToken = await oauth2Client.getAccessToken();
                      console.log(accessToken);

                      const transport = nodemailer.createTransport({
                        // service: "gmail",
                        host: 'smtp.gmail.com',
                        port: 465,
                        secure:true,
                        auth: {
                          type: "OAuth2",
                          user: email,
                          clientId: clientId,
                          clientSecret: secret,
                          refreshToken:
                            "1//04AgXkIaC_X2tCgYIARAAGAQSNwF-L9Ir7BbNhU2E9W2EprnI357NEaOp7atSXk9WW7NOz3RCYPJsshMWbnHzH3Q8bZT2_1vmntY",
                          accessToken: accessToken,
                          
                        },
                      });

                      const mailOptions = {
                        from: email,
                        to: userInfo.email,
                        subject: "Welcome to Albedo",
                        text: "Your temporary password is:  " + userInfo.pwd,
                        html: `<h3>Welcome to Albedo</h3><p>Your temporary password is: <b>${userInfo.pwd}</b></p>`,
                      };
                      const result = await transport.sendMail(mailOptions);
                      return result;
                    } catch (error) {
                      return error;
                    }
                  }

                  sendMail()
                    .then((result) => {
                      console.log("Email sent...", result);
                      res.json({ message: "User added", status: 0 });
                    })
                    .catch((error) => {
                      console.log(error.message);
                      res.json({ message: "Email error", status: 1 });
                    });
                }
              });
            }
          });
        }
      });
    }
  });
};

