// const express = require('express'); <-- common way of importing express
import express from "express"; // Modern way of importing express with package.json having "type": "module"
import dotenv from "dotenv";
import { connectDB } from './config/db.js';
import productRoutes from "./routes/product.route.js";

dotenv.config();

const app = express();

app.use(express.json()); // allows us to accept JSON in the req.body

app.use("/api/products", productRoutes);

app.listen(5000, () => {
  connectDB();
  console.log("Server started at http://localhost:5000");
});