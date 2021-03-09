var express = require ('express');
var mongoose = require('mongoose');
var User = require("../../models/userSchema");
var Roles = require("../../models/roleSchema");
var ObjectID = require('mongodb').ObjectID;
var bcrypt = require('bcrypt');
var nodemailer = require('nodemailer')


exports.addUser = (req, res, next) => {
  console.log("Data; " + req.body.pwd);
  // if(userSchema.plugin(uniqueValidator)){
  // 	res.json({message: 'User Name or Email Id already exists' , status: 1});
  // }
  var userInfo = req.body;
  var startDate = moment(userInfo.startdate).format("YYYY-MM-DD HH:mm:ss");
  var endDate = moment(userInfo.enddate).format("YYYY-MM-DD HH:mm:ss");
  var currentDate = moment(new Date()).format("YYYY-MM-DD HH:mm:ss");
  var userId = userInfo.UserId;

  if (userId == "1234") {
    userId = new ObjectID();
  }

  var roleName = "";
  var saltRounds = 10;

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
                  var transporter = nodemailer.createTransport({
                    host: "smtp.yandex.com",
                    port: 465,
                    auth: {
                      //user: 'foodonlineimca@gmail.com',
                      user: "support@atgenx.com",
                      //pass: 'imca@123'
                      pass: "@genX2021",
                    },
                  });

                  var mailOptions = {
                    from: "support@atgenx.com",
                    to: userInfo.email,
                    subject: "Welcome to albedo",
                    text: "Your temporary password is: " + userInfo.pwd,
                  };

                  transporter.sendMail(mailOptions, function (error, info) {
                    if (error) {
                      console.log("Error" + error);
                      res.json({ message: "Email error", status: 1 });
                    } else {
                      res.json({ message: "User added", status: 0 });
                    }
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
