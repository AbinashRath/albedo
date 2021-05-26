var Reason = require('../../models/reasonSchema');
exports.updateReason = (req, res, next) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!",
      });
    }
    const id = { Reason_id: req.body.Reason_id };
    Reason.findOneAndUpdate(id, req.body, { useFindAndModify: false })
      .then((data) => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update Reason with id=${id}.Maybe Reason was not found`,
          });
        } else res.send({ message: "Reason was updated Successfully." });
      })
      .catch((err) => {
        res.status(500).send({
          message: "Error updating Reason with id=" + id,
        });
      });
  }