var express = require('express');
var router = express.Router();
var {addEmployee} = require("../controllers/Employee/addEmployee");
var {deleteEmployee} = require("../controllers/Employee/deleteEmployee");
var {fetchEmployee} = require("../controllers/Employee/fetchEmployee");

router.post("/addEmployee", addEmployee);
router.delete("/deleteEmpolyee", deleteEmployee);
router.get("/fetchEmployee", fetchEmployee);

module.exports = router;
