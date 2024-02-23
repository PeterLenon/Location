require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", (error) => {
  console.error("MongoDB connection error:", error);
});
db.once("open", () => console.log("Connected to Database"));

app.use(express.static("public"));

const locationsRouter = require("./routes/locations");
const usersRouter = require("./routes/users");

app.use("/locations", locationsRouter);
app.use("/users", usersRouter);

app.listen(3000, () => console.log("Server Started"));
