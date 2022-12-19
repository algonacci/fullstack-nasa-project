const mongoose = require("mongoose");

const MONGO_URL =
  "mongodb+srv://admin:admin@nasacluster.hx8kzp0.mongodb.net/nasa?retryWrites=true&w=majority";

mongoose.connection.once("open", () => {
  console.log("💽 [DATABASE] MongoDB Connection Ready!");
});

mongoose.connection.on("error", (err) => {
  console.error(err);
});

mongoose.set("strictQuery", true);

async function mongoConnect() {
  await mongoose.connect(MONGO_URL);
}

async function mongoDisconnect() {
  await mongoose.disconnect();
}

module.exports = {
  mongoConnect,
  mongoDisconnect,
};
