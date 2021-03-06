
var express = require('express');
var router = express.Router();
var {aspJob} = require("../controllers/aspJob/aspJob");
var {deleteaspJob} = require("../controllers/aspJob/deleteaspJob");
var {fetchJob} = require("../controllers/aspJob/fetchJob");

router.post("/aspJob", aspJob);
router.delete("/deleteaspJob", deleteaspJob);
router.get("/fetchJob", fetchJob);

module.exports = router;
