const app = require("./app");
const connectDB = require("./config/db");
const PORT = 3000;

const startServer = async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log("Sever is running on port" + PORT);
  });
};

startServer();
