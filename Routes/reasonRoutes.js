var express = require("express");
var router = express.Router();
var  {addReason}  = require("../controllers/Reason/addReason");
var  {deleteReason}  = require("../controllers/Reason/deleteReason");
var  {fetchReason}  = require("../controllers/Reason/fetchReason");

router.post("/addReason", addReason);
router.post("/deleteReason", deleteReason);
router.get("/fetchReason", fetchReason);

module.exports = router;
