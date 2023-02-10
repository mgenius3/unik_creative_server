const mongoose = require("mongoose");

const ClientProjectShema = new mongoose.Schema(
  {
   
    firstName: {
      type: String,
      required: true,
    },
    email: {
        type:String,
        required: true
    },
   
    phoneNo: {
      type: String,
      required: true,
    },
   
    country: {
      type: String,
      required: true,
    },
    projectType: {
      type: String,
      required: true,
    },
    budget: {
      type: String,
      required: true,
    },
    moreAboutProject: {
        type: String,
        required: true
    }

  },
  { timestamps: true }
);

module.exports = mongoose.model("AboutProject", ClientProjectShema);
