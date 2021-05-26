var express = require("express");
var router = express.Router();
var { fetchRoles } = require("../controllers/Roles/fetchRoles");
var { deleteRoles } = require("../controllers/Roles/deleteRoles");
var { addRoles } = require("../controllers/Roles/addRoles");
var { updateRole } = require("../controllers/Roles/updateRole");
router.post("/addRoles", addRoles);
router.post("/deleteRoles", deleteRoles);
router.get("/fetchRoles", fetchRoles);
router.put("/updateRole",updateRole);

module.exports = router;
