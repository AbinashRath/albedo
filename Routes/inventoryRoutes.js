var express = require('express');
var router = express.Router();
var {addInventory} = require("../controllers/Inventory/addInventory");
var {deleteInventory} = require("../controllers/Inventory/deleteInventory");
var {fetchInventory} = require("../controllers/Inventory/fetchInventory");

router.get("/fetchInventory", fetchInventory);
router.post("/addInventory", addInventory);
router.post("/deleteInventory", deleteInventory);

module.exports = router;
