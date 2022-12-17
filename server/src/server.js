const http = require("http");

const mongoose = require("mongoose");

const app = require("./app");

const { loadPlanetsData } = require("./models/planets.model");

const PORT = process.env.PORT || 8000;

const MONGO_URL =
  "mongodb+srv://admin:admin@nasacluster.hx8kzp0.mongodb.net/nasa?retryWrites=true&w=majority";

const server = http.createServer(app);

mongoose.connection.once("open", () => {
  console.log("💽 [DATABASE] MongoDB Connection Ready!");
});

mongoose.connection.on("error", (err) => {
  console.error(err);
});

mongoose.set("strictQuery", true);

async function startServer() {
  await mongoose.connect(MONGO_URL);
  await loadPlanetsData();

  server.listen(PORT, () => {
    console.log(`🚀 [SERVER] is running on port http://localhost:${PORT}`);
  });
}

startServer();
