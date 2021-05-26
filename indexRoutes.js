var express = require("express");
var router = express.Router();
router.use(express.json());

// var { login } = require("./controllers/User/loginAuth");

// Import Routes
var addUser = require("./Routes/userRoutes");
var deleteUser = require("./Routes/userRoutes");
var fetchUsers = require("./Routes/userRoutes");
var reset = require("./Routes/userRoutes");
var login = require("./Routes/userRoutes");
var updateUser = require("./Routes/userRoutes");

var addWorkstation = require("./Routes/workStationRoutes");
var deleteWorkstation = require("./Routes/workStationRoutes");
var fetchWorkstation = require("./Routes/workStationRoutes");
var updateWorkstation = require("./Routes/workStationRoutes");

var addRoles = require("./Routes/roleRoutes");
var deleteRoles = require("./Routes/roleRoutes");
var fetchRoles = require("./Routes/roleRoutes");
var updateRoles = require("./Routes/roleRoutes");

var addReason = require("./Routes/reasonRoutes");
var deleteReason = require("./Routes/reasonRoutes");
var fetchReason = require("./Routes/reasonRoutes");
var updateReason = require("./Routes/reasonRoutes");

var prdDataHr = require("./Routes/prdDataHrRoutes");
var deleteProduction = require("./Routes/prdDataHrRoutes");
var fetchProduction = require("./Routes/prdDataHrRoutes");

var addOrganization = require("./Routes/organizationRoutes");
var fetchOrganization = require("./Routes/organizationRoutes");
var deleteOrganization = require("./Routes/organizationRoutes");
var updateOrganization = require("./Routes/organizationRoutes");

var addJobScheduler = require("./Routes/jobSchedulerRoutes");
var deleteJobScheduler = require("./Routes/jobSchedulerRoutes");
var fetchJobScheduler = require("./Routes/jobSchedulerRoutes");

var addItemMaster = require("./Routes/itemMasterRoutes");
var deleteItem = require("./Routes/itemMasterRoutes");
var fetchItemMaster = require("./Routes/itemMasterRoutes");
var updateItem_Master = require("./Routes/itemMasterRoutes");

var addInventory = require("./Routes/inventoryRoutes");
var deleteInventory = require("./Routes/inventoryRoutes");
var fetchInventory = require("./Routes/inventoryRoutes");
var updateInventory_Calander = require("./Routes/inventoryRoutes");

var aspJob = require("./Routes/aspJobRoutes");
var deleteaspJob = require("./Routes/aspJobRoutes");
var fetchJob = require("./Routes/aspJobRoutes");
var updateJob = require("./Routes/aspJobRoutes");

var addDowntime = require("./Routes/downtimeRoutes");
var deleteDowntime = require("./Routes/downtimeRoutes");
var fetchDowntime = require("./Routes/downtimeRoutes");
var updateDowntime = require("./Routes/downtimeRoutes");

var deleteEmployee = require("./Routes/employeeRoutes");
var fetchEmployee = require("./Routes/employeeRoutes");
var addEmployee = require("./Routes/employeeRoutes");
var updateEmployee  = require("./Routes/employeeRoutes");

//user Routes
router.use("/api", addUser);
router.use("/api", deleteUser);
router.use("/api", fetchUsers);
router.use("/api", reset);
router.use("/api", login);
router.use("/api", updateUser);

//Workstaion routes
router.use("/api", addWorkstation);
router.use("/api", deleteWorkstation);
router.use("/api", fetchWorkstation);
router.use("/api", updateWorkstation);

//roles Routes
router.use("/api", addRoles);
router.use("/api", deleteRoles);
router.use("/api", fetchRoles);
router.use("/api", updateRoles);
//reason Routes
router.use("/api", addReason);
router.use("/api", deleteReason);
router.use("/api", fetchReason);
router.use("/api", updateReason);

//production routes
router.use("/api", prdDataHr);
router.use("/api", deleteProduction);
router.use("/api", fetchProduction);

//Organization Routes
router.use("/api", addOrganization);
router.use("/api", deleteOrganization);
router.use("/api", fetchOrganization);
router.use("/api", updateOrganization);
//JobScheduler Routes
router.use("/api", addJobScheduler);
router.use("/api", deleteJobScheduler);
router.use("/api", fetchJobScheduler);

//ItemMaster Routes
router.use("/api", addItemMaster);
router.use("/api", deleteItem);
router.use("/api", fetchItemMaster);
router.use("/api", updateItem_Master)
//Inventory Routes
router.use("/api", addInventory);
router.use("/api", deleteInventory);
router.use("/api", fetchInventory);
router.use("/api", updateInventory_Calander);

//Employee Routes
router.use("/api", addEmployee);
router.use("/api", deleteEmployee);
router.use("/api", fetchEmployee);
router.use("/api", updateEmployee);
//Downtime Routes
router.use("/api", addDowntime);
router.use("/api", deleteDowntime);
router.use("/api", fetchDowntime);
router.use("/api", updateDowntime);
//aspJob routes
router.use("/api", aspJob);
router.use("/api", deleteaspJob);
router.use("/api", fetchJob);
router.use("/api", updateJob);

module.exports = router;
