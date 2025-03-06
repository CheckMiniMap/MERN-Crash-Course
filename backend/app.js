// Tutorial: https://www.youtube.com/watch?v=O3BUHwfHf84 2:02:21
// const express = require('express'); <-- common way of importing express
import express from "express"; // Modern way of importing express with package.json having "type": "module"
import dotenv from "dotenv";
import path from "path";

import { connectDB } from './config/db.js';
import productRoutes from "./routes/product.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

app.use(express.json()); // allows us to accept JSON in the req.body

// Prefixing all the routes with /api/products
app.use("/api/products", productRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
}

app.listen(PORT, () => {
  connectDB();
  console.log(`Server started at http://localhost:${PORT}`);
});

