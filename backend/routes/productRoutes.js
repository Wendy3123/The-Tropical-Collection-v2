import express from "express";
const router = express.Router();
import Product from "../models/productModel.js";

router.get("/", async (req, res) => {
  try {
    // .find({}) ====> the {} inside the parentheses means to find ALL items
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(404).json({ message: "Error 404" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.json(product);
  } catch (error) {
    res.status(404).json({ message: "Product not found" });
  }
});

export default router;
