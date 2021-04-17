const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const TestController = require("./controller/TestController");
const PackageController = require("./controller/PackageController");
const OrderController = require("./controller/OrderController");
const ReviewController = require("./controller/ReviewController");
const MakeAdminController = require("./controller/MakeAdminController");

// Declier server port
const port = 5000;

// Initialize the Express app.
const app = express();
app.use(express.json());
app.use(cors());

//Database connection with mongoose
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.s0sj8.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Database connected successfully"))
  .catch((err) => console.log(err));

// Check server status
app.get("/", (req, res) => {
  res.status(200).json("Server started successfully");
});

// App routs
app.use("/test", TestController);
app.use("/package", PackageController);
app.use("/order", OrderController);
app.use("/review", ReviewController);
app.use("/makeAdmin", MakeAdminController);

app.listen(process.env.PORT || port, () => {
  console.log("listening on port", port);
});
