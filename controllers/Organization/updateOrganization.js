var Organization = require('../../models/organisationSchema');
exports.updateOrganization = (req, res, next) => {
    if(!req.body) {
      return res.status(400).send({
        message:"Data to update can not be empty!"
      });
  
    }
  const id = {Organization_id : req.body.Organization_id};
  Organization.findOneAndUpdate(id,req.body,{ useFindAndModify : false})
  .then(data => {
    if(!data){
      res.status(404).send({
        message:`Cannot update organization with id=${id}.Maybe organization was not found`
      });
    }else res.send({message:"organization was updated Successfully."});
  })  
  .catch(err => {
    res.status(500).send({
      message:"Error updating organization with id="+ id
    });
  });
   }