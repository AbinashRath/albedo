var express = require('express');
var router = express.Router();
var {addInventory} = require("../controllers/Inventory/addInventory");
var {deleteInventory} = require("../controllers/Inventory/deleteInventory");
var {fetchInventory} = require("../controllers/Inventory/fetchInventory");
var {updateInventory_Calander, updateInventory_Calander} = require("../controllers/Inventory/updateInventory");

router.post("/addInventory", addInventory);
router.post("/deleteInventory", deleteInventory);
router.get("/fetchInventory", fetchInventory);
router.put("/updateInventory_Calander", updateInventory_Calander)
module.exports = router;
