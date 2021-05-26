var AspJob = require('../../models/aspJobSchema');
exports.updateJob =(req, res, next) => {
    if(!req.body) {
      return res.status(400).send({
        message:"Data to update can not be empty!"
      });
  
    }
  const id = {job_Id : req.body.JobScheduler_id};
  AspJob.findOneAndUpdate(id,req.body,{ useFindAndModify : false})
  .then(data => {
    if(!data){
      res.status(404).send({
        message:`Cannot update job with id=${id}.Maybe organization was not found`
      });
    }else res.send({message:"job was updated Successfully."});
  })  
  .catch(err => {
    res.status(500).send({
      message:"Error updating job with id="+ id
    });
  });
   }