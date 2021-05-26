var express = require('express');
var router = express.Router();
var { addWorkstation }= require("../controllers/Workstation/addWorkstation");
var { deleteWorkstation } = require("../controllers/Workstation/deleteWorkstation");
var { fetchWorkstation } = require("../controllers/Workstation/fetchWorkstation");
var { updateWorkstation } = require("../controllers/Workstation/updateWorkstation")

router.post("/addWorkstation", addWorkstation);
router.post("/deleteWorkstation", deleteWorkstation);
router.get("/fetchWorkstation", fetchWorkstation);
router.put("/updateWorkstation", updateWorkstation);

module.exports = router;

