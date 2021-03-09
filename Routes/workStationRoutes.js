var express = require('express');
var router = express.Router();
var{ addWorkstation }= require("../controllers/Workstation/addWorkstation");
var { deleteWorkstation } = require("../controllers/Workstation/deleteWorkstation");
var { fetchWorkstation } = require("../controllers/Workstation/fetchWorkstation");

router.post("/addWorkstation", addWorkstation);
router.post("/deleteWorkstation", deleteWorkstation);
router.get("/fetchWorkstation", fetchWorkstation);

module.exports = router;

