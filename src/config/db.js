const mongoose = require("mongoose");

// MONGODB CONNECTION
module.exports.mongodb_connection = async () => {
  try {
    await mongoose
      .set("strictQuery", true)
      .connect(
        process.env.NODE_ENV === "developmen"
          ? process.env.MONGODB_URI_DEV
          : process.env.MONGODB_URI,
        {
          useUnifiedTopology: true,
          useNewUrlParser: true,
        }
      );
  } catch (error) {
    if (error.message.indexOf("ECONNREFUSED") !== -1) {
      console.error(
        "Error: The server was not able to reach MongoDB. Maybe it's not running?"
      );
    } else {
      console.log(`CONNECTION FAILED:::: \nERROR :: ${error.message}`);
    }
  }
};

// const { MongoClient, ServerApiVersion } = require("mongodb");

// const client = new MongoClient(
//   process.env.NODE_ENV === "development"
//     ? process.env.MONGODB_URI_DEV
//     : process.env.MONGODB_URI,
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     serverApi: ServerApiVersion.v1,
//   }
// );
// client.connect((err) => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });
