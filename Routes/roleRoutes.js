var express = require("express");
var router = express.Router();
var { fetchRoles } = require("../controllers/Roles/fetchRoles");
var { deleteRoles } = require("../controllers/Roles/deleteRoles");
var { addRoles } = require("../controllers/Roles/addRoles");

router.post("/addRoles", addRoles);
router.delete("/deleteRoles", deleteRoles);
router.get("/fetchRoles", fetchRoles);

module.exports = router;
