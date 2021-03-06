var express = require('express');
var router = express.Router();
var {addJobScheduler} = require("../controllers/JobScheduler/addJobScheduler");
var {deleteJobScheduler} = require("../controllers/JobScheduler/deleteJobScheduler");
var {fetchJobScheduler} = require("../controllers/JobScheduler/fetchJobScheduler");
router.post("/addJobScheduler", addJobScheduler);
router.get("/fetchJobScheduler", fetchJobScheduler);
router.delete("/deleteJobScheduler", deleteJobScheduler);

module.exports = router;
