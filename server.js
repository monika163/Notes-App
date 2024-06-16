const express = require("express");
const app = express();
// const port = 5000;
const path = require("path");
const dotenv = require("dotenv");
// const cors = require("cors");

// app.use(
//   cors({
//     origin: ["https://localhost:3000"],
//     methods: ["POST", "GET"],
//     credentials: true
//   })
// );

// Available routes
app.use(express.json());

// dotenv config
dotenv.config();

// Connect to MongoDB
require("./db")(); // Assuming db.js exports a function for connecting to MongoDB

app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

//static files
app.use(express.static(path.join(__dirname, "./client/build")));

app.get("*", function (req, resp) {
  resp.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Start the server
const server = app.listen(process.env.PORT, () => {
  console.log(`Notes-App-backend listening on port ${process.env.PORT}`);
});

//shutdown
process.on("SIGTERM", () => {
  console.log("Received SIGTERM. Shutting down gracefully");
  server.close(() => {
    process.exit(0);
  });
});
