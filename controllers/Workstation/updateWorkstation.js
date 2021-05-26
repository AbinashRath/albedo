var Workstation = require('../../models/workstationSchema');  
exports.updateWorkstation = (req, res, next) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!",
      });
    }
    const id = { workstation_id: req.body.workstation_id };
    console.log(id);
    Workstation.findOneAndUpdate(id, req.body, { useFindAndModify: false })
      .then((data) => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update Workstation with id=${id}.Maybe Workstation was not found`,
          });
        } else res.send({ message: "Workstation was updated Successfully." });
      })
      .catch((err) => {
        res.status(500).send({
          message: "Error updating Workstation with id=" + id,
        });
      });
  }