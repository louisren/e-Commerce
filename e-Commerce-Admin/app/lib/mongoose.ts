/* eslint func-names:0 */
const mongoose = require("mongoose");
mongoose.promises = require("bluebird");
const { url } = global["configuration"].mongo;
const options = {
  reconnectTries: 60,
  reconnectInterval: 1000,
  poolSize: 10,
  bufferMaxEntries: 0, // If not connected, return errors immediately rather than waiting for reconnect
  useMongoClient: true,
};
const MongoConnect = function () {
  const db = mongoose.connect(url, options, (error) => {
    if (error) {
      console.log(`Mongoose default connection error: ${error}`);
    } else {
      console.log("mongo Connected :)");
    }
  });
  mongoose.connection.on("connected", () => {
    console.log(`Mongoose default connection open to ${url}`);
  });

  // If the connection throws an error
  mongoose.connection.on("error", (err) => {
    console.log(`Mongoose default connection error: ${err}`);
  });

  // When the connection is disconnected
  mongoose.connection.on("disconnected", () => {
    console.log("Mongoose default connection disconnected");
  });

  // If the Node process ends, close the Mongoose connection
  process.on("SIGINT", () => {
    mongoose.connection.close(() => {
      console.log(
        "Mongoose default connection disconnected through app termination"
      );
      process.exit(0);
    });
  });
  return db;
};

export default MongoConnect;
