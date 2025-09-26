const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/mernDashboard")
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.log(err));

const Product = mongoose.model("Product", { name: String, price: Number });
const Customer = mongoose.model("Customer", { name: String, email: String });

app.get("/products", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

app.post("/products", async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.json(product);
});

app.get("/customers", async (req, res) => {
  const customers = await Customer.find();
  res.json(customers);
});

app.post("/customers", async (req, res) => {
  const customer = new Customer(req.body);
  await customer.save();
  res.json(customer);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Backend running on port ${PORT}`));
