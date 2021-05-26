var express = require("express");
var router = express.Router();
var  {addReason}  = require("../controllers/Reason/addReason");
var  {deleteReason}  = require("../controllers/Reason/deleteReason");
var  {fetchReason}  = require("../controllers/Reason/fetchReason");
var  {updateReason} = require("../controllers/Reason/updateReason");

router.post("/addReason", addReason);
router.post("/deleteReason", deleteReason);
router.get("/fetchReason", fetchReason);
router.put("/updateReason", updateReason);

module.exports = router;
