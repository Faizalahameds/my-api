const express = require("express");
const cors = require("cors"); // Import CORS package

const app = express();
const port = process.env.PORT || 5000;

// Use CORS middleware
app.use(cors());

// Use JSON middleware to parse JSON bodies
app.use(express.json());

// Import your JSON data
const products = require("./db.json");

// Define an endpoint to fetch all products
app.get("/api/products", (req, res) => {
  res.json(products);
});

// Define an endpoint to fetch a single product by id
app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p.id == req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: "Product not found" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`API is running on http://localhost:${port}`);
});
