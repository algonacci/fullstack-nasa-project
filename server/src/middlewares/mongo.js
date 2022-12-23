const mongoose = require("mongoose");

require("dotenv").config();

const MONGO_URL = process.env.MONGODB_URI;

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
