import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
const port = process.env.PORT;

connectDB();

const app = express();

app.get("/", (req, res) => {
  res.send("API IS RUNNING.....");
});

app.use("/api/products", productRoutes);

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
