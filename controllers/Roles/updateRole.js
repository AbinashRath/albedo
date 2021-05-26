var Roles = require("../../models/roleSchema");
exports.updateRole = (req, res, next) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to Role can not be empty!",
    });
  }
  const id = { Role_Id: req.body.Role_Id };

  Roles.findOneAndUpdate(id, req.body, function (err, doc) {
    if (err) {
      console.log("Something wrong when updating data!");
    }

    console.log("this is doc", doc);
  })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Role with id=${id}.Maybe Role was not found`,
        });
      } else {
        res.send({ message: "Role was updated Successfully." });
        console.log("this is data ", data);
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Role with id=" + id,
      });
    });
};
