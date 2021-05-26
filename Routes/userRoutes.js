var express = require('express');
var router = express.Router();
var {addUser} = require("../controllers/User/addUser");
var {deleteUser} = require("../controllers/User/deleteUser");
var {fetchUsers} = require("../controllers/User/fetchUsers");
var {reset} = require("../controllers/User/passReset");
var {login} = require("../controllers/User/loginAuth");
var {updateUser} = require("../controllers/User/updateUser");

router.post("/addUser", addUser);
router.post("/deleteUser", deleteUser);
router.get("/fetchUsers", fetchUsers);
router.post("/reset", reset);
router.post("/login", login);
router.put("/updateUser", updateUser);

module.exports = router;
