// const express = require('express'); <-- common way of importing express
import express from 'express'; // Modern way of importing express with package.json having "type": "module"

const app = express();

app.get("/products", (req, res) => {
  res.send("Server is ready");
})

app.listen(5000, () => {
  console.log("Server started at http://localhost:5000");
})

// pwd: Wmr3EsShRj9iPyEZ