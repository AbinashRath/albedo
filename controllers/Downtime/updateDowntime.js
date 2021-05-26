var Downtime = require('../../models/downtimeSchema');
exports.updateDowntime = (req, res, next) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!",
      });
    }
    const id = { Downtime_id: req.body.Downtime_id};
    Downtime.findOneAndUpdate(id, req.body, { useFindAndModify: false })
      .then((data) => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update Downtime with id=${id}.Maybe Downtime was not found`,
          });
        } else res.send({ message: "Downtime was updated Successfully." });
      })
      .catch((err) => {
        res.status(500).send({
          message: "Error updating Downtime with id=" + id,
        });
      });
  }