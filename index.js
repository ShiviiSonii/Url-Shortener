import express from "express";
import mongoose from "mongoose";
import urlRoute from "./routes/urlRoute.js";
import dotenv from "dotenv";
const app = express();
const port = 8000;

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URL)
  .then(console.log("Mongodb connected"));

app.use(express.json());

app.use("/", urlRoute);

app.listen(port, (req, res) => {
  console.log("Server is listening on port:", port);
});
