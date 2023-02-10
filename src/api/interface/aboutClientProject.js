//aBOUT CLIENT INTERFACE
module.exports.AboutClientInterface = (req) => {
 
    return {
      firstName : req.body.firstName,
      email: req.body.email,
      phoneNo: req.body.phoneNo,
      country: req.body.country,
      projectType: req.body.projectType,
      budget: req.body.budget,
      moreAboutProject: req.body.moreAboutProject
    }
  } 