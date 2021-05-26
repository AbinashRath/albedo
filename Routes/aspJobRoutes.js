
var express = require('express');
var router = express.Router();
var {aspJob} = require("../controllers/aspJob/aspJob");
var {deleteaspJob} = require("../controllers/aspJob/deleteaspJob");
var {fetchJob} = require("../controllers/aspJob/fetchJob");
var {updateJob} = require('../controllers/aspJob/updateJob');

router.post("/aspJob", aspJob);
router.post("/deleteaspJob", deleteaspJob);
router.get("/fetchJob", fetchJob);
router.put("/updateJob",updateJob);

module.exports = router;
