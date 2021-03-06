var express = require("express");
var router = express.Router();


// Import Routes
var addUser = require("./Routes/userRoutes");
var deleteUser = require("./Routes/userRoutes");
var fetchUsers = require("./Routes/userRoutes");
var reset = require("./Routes/userRoutes");
var login = require("./Routes/userRoutes");

var addWorkstation = require("./Routes/workStationRoutes");
var deleteWorkstation = require("./Routes/workStationRoutes")
var fetchWorkstation = require("./Routes/workStationRoutes");

var addRoles = require("./Routes/roleRoutes");
var deleteRoles = require("./Routes/roleRoutes");
var fetchRoles = require("./Routes/roleRoutes");

var addReason = require("./Routes/reasonRoutes");
var deleteReason = require("./Routes/reasonRoutes");
var fetchreason = require("./Routes/reasonRoutes");

var prdDataHr = require("./Routes/prdDataHrRoutes");  
var deleteProduction = require("./Routes/prdDataHrRoutes");
var fetchProduction = require("./Routes/prdDataHrRoutes");

var addOrganization=require("./Routes/organizationRoutes");
var fetchOrganization=require("./Routes/organizationRoutes");
var deleteOrganization = require("./Routes/organizationRoutes");

var addJobScheduler= require("./Routes/jobSchedulerRoutes");
var deleteJobScheduler= require("./Routes/jobSchedulerRoutes");
var fetchJobScheduler = require("./Routes/jobSchedulerRoutes");

var addItemMaster = require("./Routes/itemMasterRoutes");
var deleteItem = require("./Routes/itemMasterRoutes");
var fetchItemMaster = require("./Routes/itemMasterRoutes");

var addInventory = require("./Routes/inventoryRoutes");
var deleteInventory = require("./Routes/inventoryRoutes");
var fetchInventory = require("./Routes/inventoryRoutes");

var aspJob = require("./Routes/aspJobRoutes");
var deleteaspJob = require("./Routes/aspJobRoutes");
var fetchJob = require("./Routes/aspJobRoutes");

var addDowntime = require("./Routes/downtimeRoutes");
var deleteDowntime = require("./Routes/downtimeRoutes");
var fetchDowntime = require("./Routes/downtimeRoutes");

var deleteEmployee = require("./Routes/employeeRoutes");
var fetchEmployee = require("./Routes/employeeRoutes");
var addEmployee = require("./Routes/employeeRoutes");

//user Routes
router.use("/api", addUser);
router.use("/api", deleteUser);
router.use("/api", fetchUsers);
router.use("/api", reset);
router.use("/api", login);

//Workstaion routes
router.use("/api", addWorkstation);
router.use("/api", deleteWorkstation);
router.use("/api", fetchWorkstation);

//roles Routes
router.use("/api", addRoles);
router.use("/api", deleteRoles);
router.use("/api", fetchRoles);

//reason Routes
router.use("/api", addReason);
router.use("/api", deleteReason);
router.use("/api", fetchreason);

//production routes
router.use("/api", prdDataHr);
router.use("/api", deleteProduction);
router.use("/api", fetchProduction);

//Organization Routes
router.use("/api", addOrganization);
router.use("/api", deleteOrganization);
router.use("/api", fetchOrganization);

//JobScheduler Routes
router.use("/api", addJobScheduler);
router.use("/api", deleteJobScheduler);
router.use("/api", fetchJobScheduler);

//ItemMaster Routes
router.use("/api", addItemMaster);
router.use("/api", deleteItem);
router.use("/api", fetchItemMaster);

//Inventory Routes
router.use("/api", addInventory);
router.use("/api", deleteInventory);
router.use("/api", fetchInventory);

//Employee Routes
router.use("/api", addEmployee);
router.use("/api", deleteEmployee);
router.use("/api", fetchEmployee);
//Downtime Routes
router.use("/api", addDowntime);
router.use("/api", deleteDowntime);
router.use("/api", fetchDowntime);
//aspJob routes
router.use("/api", aspJob);
router.use("/api", deleteaspJob);
router.use("/api", fetchJob);

module.exports = router;
