var express = require('express');
var router = express.Router();
var {addItemMaster} = require("../controllers/ItemMaster/addItemMaster");
var {deleteItem} = require("../controllers/ItemMaster/deleteItem");
var {fetchItemMaster} = require("../controllers/ItemMaster/fetchItemMaster");

router.post("/addItemMaster", addItemMaster);
router.get("/fetchItemMaster", fetchItemMaster);
router.post("/deleteItem", deleteItem);

module.exports = router;
