var express = require('express');
var router = express.Router();
var {addEmployee} = require("../controllers/Employee/addEmployee");
var {deleteEmployee} = require("../controllers/Employee/deleteEmployee");
var {fetchEmployee} = require("../controllers/Employee/fetchEmployee");
var {updateEmployee} = require("../controllers/Employee/updateEmployee");

router.post("/addEmployee", addEmployee);
router.post("/deleteEmployee", deleteEmployee);
router.get("/fetchEmployee", fetchEmployee);
router.get("/updateEmployee",updateEmployee);

module.exports = router;
