var express = require('express');
var router = express.Router();
var {addDowntime} = require("../controllers/Downtime/addDowntime");
var {deleteDowntime} = require("../controllers/Downtime/deleteDowntime");
var {fetchDowntime} = require("../controllers/Downtime/fetchDowntime");
var {updateDowntime} = require("../controllers/Downtime/updateDowntime");

router.post("/addDowntime", addDowntime);
router.post("/deleteDowntime", deleteDowntime);
router.get("/fetchDowntime", fetchDowntime);
router.put("/updateDowntime",updateDowntime)

module.exports = router;
