var express = require('express');
var router = express.Router();
var {deleteProduction} = require("../controllers/prdDataHr/deleteProduction");
var {fetchProduction} = require("../controllers/prdDataHr/fetchProduction");
var {prdDataHr} = require("../controllers/prdDataHr/prdDataHr");

router.post("/deleteProduction", deleteProduction);
router.get("/fetchProduction", fetchProduction);
router.post("/prdDataHr", prdDataHr);
module.exports = router;
