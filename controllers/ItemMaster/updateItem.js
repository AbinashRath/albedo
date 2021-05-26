var ItemMaster = require('../../models/itemMasterSchema');
exports.updateItem_Master = (req, res, next) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!",
      });
    }
    const id = { Item_id: req.body.Item_id };
    ItemMaster.findOneAndUpdate(id, req.body, { useFindAndModify: false })
      .then((data) => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update Item with id=${id}.Maybe Item was not found`,
          });
        } else res.send({ message: "Item was updated Successfully." });
      })
      .catch((err) => {
        res.status(500).send({
          message: "Error updating Item with id=" + id,
        });
      });
  }