const http = require("http");

const { mongoConnect } = require("./middlewares/mongo");

const app = require("./app");

const { loadPlanetsData } = require("./models/planets.model");

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

async function startServer() {
  await mongoConnect();
  await loadPlanetsData();
  server.listen(PORT, () => {
    console.log(`🚀 [SERVER] is running on port http://localhost:${PORT}`);
  });
}

startServer();
