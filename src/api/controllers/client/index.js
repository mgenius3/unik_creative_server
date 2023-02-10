const { AboutClientInterface} = require("../../interface/aboutClientProject");

const aboutClientModel = require("../../models/aboutClientProject");
const {clientProjectValidation} = require("../../validations/aboutClientProject");

module.exports.addClientProject = async (req, res) => {
  const data = AboutClientInterface(req);

  console.log(data);
  try {
    await clientProjectValidation(req.body)
    await aboutClientModel.create(data);
    res.status(200).json({
      msg: "successfully submitted your project offer",
    });
  } catch (err) {
    res.status(401).json({
      msg: err.message,
    });
  }
};


module.exports.getClientProject = async (req, res) => {
  try {
    const all_comment = await aboutClientModel.find();
    res.status(200).json(all_comment);
  } catch (err) {
    res.status(401).json({
      msg: err.message,
    });
  }
};