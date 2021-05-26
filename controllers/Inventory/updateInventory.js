var InventoryCalender = require('../../models/inventoryCalanderSchema');
exports.updateInventory_Calander = (req, res, next) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!",
      });
    }
    const id = { Inventory_id: req.body.Inventory_id };
    InventoryCalender.findOneAndUpdate(id, req.body, { useFindAndModify: false })
      .then((data) => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update Inventory with id=${id}.Maybe Inventory was not found`,
          });
        } else res.send({ message: "Inventory was updated Successfully." });
      })
      .catch((err) => {
        res.status(500).send({
          message: "Error updating Inventory with id=" + id,
        });
      });
  }