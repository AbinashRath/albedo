var express = require('express');
var router = express.Router();
var {addItemMaster} = require("../controllers/ItemMaster/addItemMaster");
var {deleteItem} = require("../controllers/ItemMaster/deleteItem");
var {fetchItemMaster} = require("../controllers/ItemMaster/fetchItemMaster");
var {updateItem_Master} = require("../controllers/ItemMaster/updateItem");

router.post("/addItemMaster", addItemMaster);
router.get("/fetchItemMaster", fetchItemMaster);
router.post("/deleteItem", deleteItem);
router.put("/updateItem_Master",updateItem_Master);

module.exports = router;
