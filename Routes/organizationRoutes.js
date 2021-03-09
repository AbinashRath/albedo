var express = require('express');
var router = express.Router();
var {addOrganization} = require("../controllers/Organization/addOrganization");
var {deleteOrganization} = require("../controllers/Organization/deleteOrganization");
var {fetchOrganization} = require("../controllers/Organization/fetchOrganization");

router.post("/addOrganization", addOrganization);
router.get("/fetchOrganization", fetchOrganization);
router.post("/deleteOrganization", deleteOrganization);

module.exports = router;
